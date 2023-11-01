/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Isaac E. Rodriguez";
let currentYear = 2023;
let profilePicture = 'images/IMG_2708.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.querySelector('#home picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', fullName);

/* Step 5 - Array */
let favoriteFoods = ["Mole", "Sushi", "Pasta", "Hamburger"];
foodElement.innerHTML = favoriteFoods;
let newFood = ["Chicken curry"];
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;





