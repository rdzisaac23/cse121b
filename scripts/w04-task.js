/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Isaac Rodriguez",
    photo : "images/IMG_2708.jpg",
    favoriteFoods : [
        'Mole',
        'Pizza',
        'Pasta',
        'Burgers'
    ],
    hobbies: [
        'Movies',
        'Basketball',
        'Running',
        'Filmaking',
        'Video Editing'
    ],
    placesLived : []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Mexico City',
        length: '30 Years'
    },
    {
        place : 'Canada',
        length : '4 Years'
    },
    {
        place : 'Monterrey',
        length : '2 Years'
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector(`#name`).textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
let hobbieList = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    hobbieList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedTable = document.getElementById('places-lived');
myProfile.placesLived.forEach(placeLived => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = placeLived.place;

    let ddElement = document.createElement('dd');
    ddElement.textContent = placeLived.length;

    placesLivedTable.appendChild(dtElement);
    placesLivedTable.appendChild(ddElement);
});

