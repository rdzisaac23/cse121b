// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const aside = document.querySelector('aside');
    const main = document.querySelector('main');

    hamburger.addEventListener('click', function() {
        // Check if aside is open
        const isAsideOpen = aside.style.right === '0px';

        if (isAsideOpen) {
            // Close the sidebar
            aside.style.right = '-250px';
            main.style.marginTop = '0';
        } else {
            // Open the sidebar
            aside.style.right = '0';
            main.style.marginTop = '250px'; // Adjust based on the height of the aside
        }
    });
});
