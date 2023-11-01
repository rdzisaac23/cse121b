/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2
}

function subtractNumbers(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    if (number2 === 0) {
        alert("Cannot divide by zero.");
        return 0;
    }
    return number1 / number2;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
    if (isMember) {
        subtotal *= .85
    }
    document.querySelector('#total').innerHTML = `Total: $${subtotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrayElement = document.getElementById('array');
arrayElement.innerHTML = numbers.join(', ');

/* Output Odds Only Array */
let oddNumbers = numbers.filter(number => number % 2 !== 0);
let oddsElement = document.getElementById('odds');
oddsElement.innerHTML = oddNumbers.join(', ');

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbers.filter(number => number % 2 === 0).join(', ');

/* Output Sum of Org. Array */
let sum = numbers.reduce((sum, number) => sum + number, 0);
let sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.innerHTML = sum;

/* Output Multiplied by 2 Array */
let multipliedNumbers = numbers.map(number => number * 2);
let multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multipliedNumbers.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedNumbers = multipliedNumbers.reduce((sum, number) => sum + number, 0);
let sumofMultipliedElement = document.getElementById('sumOfMultiplied');
sumofMultipliedElement.innerHTML = sumOfMultipliedNumbers;