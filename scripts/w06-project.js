document.getElementById('enter').addEventListener('click', performSearch);

document.getElementById('search-box').addEventListener('keyup', function(event) {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
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


function displayBooks(data) {
    const booksGrid = document.querySelector('.books-grid');
    booksGrid.innerHTML = ''; // Clear previous results

    data.items.forEach(book => {
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors : ['Unknown Author'];
        const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x192.png?text=No+Cover';
        const previewLink = book.volumeInfo.previewLink;

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
}

function performSearchByAuthor(author) {
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
