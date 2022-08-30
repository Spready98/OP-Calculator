const container = document.querySelector("#container");
const equals = document.getElementById("equal");
const clears = document.getElementById("clear");
const display = document.querySelector(".display");

let displayOps = "";
let firstNum = "";
let secondNum = "";

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

equals.addEventListener("click", function() {


    let result = operate(displayOps, Number(firstNum), Number(secondNum));

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

        if (displayOps === "") {
            displayOps = item.textContent;
            
        } else {
            firstNum = operate(displayOps, Number(firstNum), Number(secondNum));
            secondNum = "";
            displayOps = item.textContent
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