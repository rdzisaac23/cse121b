/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple =>{
        let articleElement = document.createElement('article');

        // Create an HTML <h3> element and add the temple's templeName property
        let h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        // Create an HTML <img> element and set the src and alt attributes
        let imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Append the <h3> element and the <img> element to the <article> element
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append the <article> element to the global templesElement
        templesElement.appendChild(articleElement);
    })
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        templeList = await response.json();
        displayTemples(templeList);

    } catch (error) {
        console.error('Error fetching temple data:', error);
        // Handle any errors that occur during the fetch
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};


/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter option:', filter);
            break;
    }
};

getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener('change', () => {
    sortBy(templeList);
});

