const container = document.querySelector("#container");
const equals = document.getElementById("equal");
const clears = document.getElementById("clear");
const display = document.querySelector(".display");
const decimal = document.getElementById("decimal");
const backspace = document.getElementById("delete");

let displayOps = "";
let firstNum = "";
let secondNum = "";
let isDecimal = false;

document.querySelectorAll(".num").forEach(item => {
    item.addEventListener('click', event => {

        display.textContent += item.textContent;
        
        if (displayOps === "") {
            firstNum = display.textContent;
            
        } else {
            secondNum += item.textContent;
        }
        
        
    })
});

window.addEventListener("keydown", function(e) {

    
    if (!isNaN(e.key)) {
        display.textContent += e.key;

        if (displayOps === "") {
            firstNum = display.textContent;
            
        } else {
            secondNum += e.key;
        }
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {

        display.textContent += (" " + e.key + " ");
        isDecimal = false;
        if (displayOps === "") {
            displayOps = e.key;
            
        } else {
            firstNum = Math.round(operate(displayOps, Number(firstNum), Number(secondNum)) * 100 ) / 100;
            secondNum = "";
            displayOps = e.key;
            display.textContent = firstNum + " " + e.key + " ";
        }
    } else if (e.key === '.') {
        if (isDecimal) {
            return;
        } else {
            display.textContent += ".";
            isDecimal = true;
        }
    } else if (e.key === 'Enter') {
        let result = Math.round(operate(displayOps, Number(firstNum), Number(secondNum)) * 100 ) / 100;
    
        display.textContent = result;
        firstNum = result;
   
        displayOps = "";
        secondNum = "";
    } else if (e.key === 'Backspace') {
        let displayLength = display.textContent.length - 1;
        display.textContent = display.textContent.substring(0, displayLength);

        if (displayOps === "") {
            let firstNumLength = firstNum.length - 1;
            firstNum = firstNum.substring(0, firstNumLength);
        } else {
            let secNumLength = secondNum.length - 1;
            secondNum = secondNum.substring(0, secNumLength);
    }
}


});

backspace.addEventListener("click", function() {

    let displayLength = display.textContent.length - 1;
    display.textContent = display.textContent.substring(0, displayLength);

    if (displayOps === "") {
        let firstNumLength = firstNum.length - 1;
        firstNum = firstNum.substring(0, firstNumLength);
    } else {
        let secNumLength = secondNum.length - 1;
        secondNum = secondNum.substring(0, secNumLength);
    }
});

decimal.addEventListener("click", function(){

    if (isDecimal) {
        return;
    } else {
        display.textContent += ".";
        isDecimal = true;
    }
});

equals.addEventListener("click", function() {


    let result = Math.round(operate(displayOps, Number(firstNum), Number(secondNum)) * 100 ) / 100;
    
    display.textContent = result;
    firstNum = result;
   
    displayOps = "";
    secondNum = "";
});

clears.addEventListener("click", function() {


    displayOps = "";
    display.textContent = "";
    firstNum = "";
    secondNum = "";
});

document.querySelectorAll(".ops").forEach(item => {
    item.addEventListener("click", event => {
        
        display.textContent += (" " + item.textContent + " ");
        isDecimal = false;
        if (displayOps === "") {
            displayOps = item.textContent;
            
        } else {
            firstNum = Math.round(operate(displayOps, Number(firstNum), Number(secondNum)) * 100 ) / 100;
            secondNum = "";
            displayOps = item.textContent
            display.textContent = firstNum + " " + item.textContent + " ";
        }

    })
});

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    
    return x * y;
}

function divide (x, y) {
    if (y === 0) {
        return "dividing by 0? really?";
        
    }
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