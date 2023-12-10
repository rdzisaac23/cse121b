// search.js
export function performSearch() {
    const query = document.getElementById('search-box').value.trim();

    if (query) {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the JSON data to the console
                displayBooks(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        console.log('Please enter a search term');
        // Optionally, clear any previous results or display a message to the user
    }
}

export function displayBooks(data) {
    const booksGrid = document.querySelector('.books-grid');
    booksGrid.innerHTML = ''; // Clear previous results

    data.items.forEach(book => {
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors : ['Unknown Author'];
        const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x192.png?text=No+Cover';
        const previewLink = book.volumeInfo.previewLink;
        const bookId = book.id; // Assuming each book has a unique 'id' field

        let authorsHtml = authors.map(author => 
            `<button class="author-search" data-author="${author}">${author}</button>`
        ).join(', ');

        const bookCard = `
            <div class="book-card">
            <a href="${previewLink}" target="_blank">
            <img src="${imageUrl}" alt="${title}">
            </a>
            <h3>${title}</h3>
            <p>${authorsHtml}</p>
            <button class="add-to-library" data-book-id="${bookId}">Add to library</button>
            </div>
        `;

        booksGrid.innerHTML += bookCard;
    });

    // Add click event listeners to all author-search buttons
    document.querySelectorAll('.author-search').forEach(button => {
        button.addEventListener('click', function() {
            performSearchByAuthor(this.getAttribute('data-author'));
        });
    });

    // Add event listeners to all 'add-to-library' buttons
    document.querySelectorAll('.add-to-library').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book-id');
            const book = data.items.find(item => item.id === bookId);
            addToLibrary(book);
        });
    });
}    

export function performSearchByAuthor(author) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(author)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayBooks(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function addToLibrary(book) {
    let library = JSON.parse(localStorage.getItem('myLibrary')) || [];
    library.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(library));
    displayLibrary(); // Update the library display
}

function displayLibrary() {
    const libraryGrid = document.querySelector('#for-you .books-grid');
    let library = JSON.parse(localStorage.getItem('myLibrary')) || [];

    libraryGrid.innerHTML = ''; // Clear previous results

    library.forEach((book, index) => {
        const title = book.volumeInfo.title;
        const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x192.png?text=No+Cover';

        const bookCard = `
            <div class="book-card">
                <img src="${imageUrl}" alt="${title}">
                <h3>${title}</h3>
                <button class="remove-from-library" data-index="${index}">Remove from library</button>
            </div>
        `;

        libraryGrid.innerHTML += bookCard;
    });

    // Add event listeners to all 'remove-from-library' buttons
    document.querySelectorAll('.remove-from-library').forEach(button => {
        button.addEventListener('click', function() {
            removeFromLibrary(this.getAttribute('data-index'));
        });
    });
}

function removeFromLibrary(index) {
    let library = JSON.parse(localStorage.getItem('myLibrary')) || [];
    library.splice(index, 1); // Remove the book at the given index
    localStorage.setItem('myLibrary', JSON.stringify(library));
    displayLibrary(); // Update the library display
}


document.addEventListener('DOMContentLoaded', () => {
    displayLibrary(); // Display the stored books in the library
});
