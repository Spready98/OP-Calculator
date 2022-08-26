const container = document.querySelector("#container");
// const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".ops");
const equals = document.getElementById("equal");
const clears = document.getElementById("clear");
const display = document.querySelector(".display");

let displayNum = "";
let displayOps = "";

document.querySelectorAll(".num").forEach(item => {
    item.addEventListener('click', event => {

        display.textContent += item.textContent;
        
        displayNum = display.textContent;
        
    })
});

clears.addEventListener("click", function() {

    displayNum = "";
    displayOps = "";
    display.textContent = "";
});

document.querySelectorAll(".ops").forEach(item => {
    item.addEventListener("click", event => {

        display.textContent += (" " + item.textContent + " ");
        displayOps = item.textContent;
        displayNum = display.textContent;

    })
});

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x- y;
}

function multiply (x, y) {
    
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function operate (ops, x , y) {

    let result; 

    if (ops === '+') {
        result = add(x,y);
    } else if (ops === '-') {
        result = subtract(x,y);
    } else if (ops === '*') {
        result = multiply(x,y);
    } else if (ops === '/') {
        result = divide(x,y);
    }

    return result;
}