import { toggleMenu, setupHamburgerMenu } from './sidebar.js';
import { performSearch, performSearchByAuthor, displayBooks } from './search.js';

// Centralized DOM selectors
const toggleMenuButton = document.querySelector('#toggleMenu');
const searchButton = document.getElementById('enter');
const searchBox = document.getElementById('search-box');
const yearElement = document.querySelector('#year');

// Named function for handling Enter key in search box
const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
};

// Set up event listeners
toggleMenuButton.addEventListener('click', toggleMenu);
document.addEventListener('DOMContentLoaded', setupHamburgerMenu);
searchButton.addEventListener('click', performSearch);
searchBox.addEventListener('keyup', handleEnterKeyPress);

// Set copyright year using modern JavaScript features
yearElement.textContent = new Date().getFullYear();
