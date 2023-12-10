// Centralized DOM selectors
const menu = document.querySelector('#menu');
const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('aside');
const mainContent = document.querySelector('main');

export const toggleMenu = () => {
    menu.classList.toggle('open');
};

const toggleAside = () => {
    // Check if aside is open
    const isAsideOpen = aside.style.right === '0px';

    if (isAsideOpen) {
        // Close the sidebar
        aside.style.right = '-250px';
        mainContent.style.marginTop = '0';
    } else {
        // Open the sidebar
        aside.style.right = '0';
        mainContent.style.marginTop = '250px'; // Adjust based on the height of the aside
    }
};

export const setupHamburgerMenu = () => {
    hamburger.addEventListener('click', toggleAside);
};