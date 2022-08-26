
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