let display = document.querySelector("#display")

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");

let clearAll = document.querySelector(".clear-all");
let del = document.querySelector(".delete");
let addOperator = document.querySelector(".add");
let subtractOperator =  document.querySelector(".subtract");
let multiplyOperator = document.querySelector(".multiply");
let divideOperator = document.querySelector(".divide");
let equals = document.querySelector(".equals");
let dot = document.querySelector(".dot");

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

let firstNumber = "";
let currentOperator = "";
let secondNumber = "";

function operate(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator == "x") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        return divide(firstNumber, secondNumber);
    }
}

let isThereOperator = false;
let currentResult = "";

function operatorSelected(operator) { 
    if (firstNumber != "") {
        if (secondNumber != "") {
            currentResult = operate(firstNumber, currentOperator, secondNumber);
            firstNumber = currentResult;
            currentOperator = operator;
            display.replaceChildren();
            let displayResult = document.createTextNode(currentResult);
            display.appendChild(displayResult);
            secondNumber = "";
        } else {
            isThereOperator = true;
            currentOperator = operator;
            isSecondNumber = true;
        }
    } 
}

function addNumber(number) {
    if (isThereOperator == true) {
        display.replaceChildren();
    }
    let nextNumber = document.createTextNode(number);
    display.appendChild(nextNumber);
}

let isSecondNumber = false;

function checkNumberPosition(number) {
    if (isSecondNumber == true) {
        secondNumber += number;
    } else {
        firstNumber += number;
    }
}

let result = "";

equals.addEventListener("click", function(){
    if (firstNumber != 0 && secondNumber != 0) {
    operationDone = true;

    result = operate(firstNumber, currentOperator, secondNumber);
    display.replaceChildren();
    let displayResult = document.createTextNode(result);
    display.appendChild(displayResult);
    firstNumber = result;
    secondNumber = "";
    }
})

let operationDone = false;

//Numbers
one.addEventListener("click", function(){
    addNumber("1");
    checkNumberPosition("1");
})

two.addEventListener("click", function(){
    addNumber("2");
    checkNumberPosition("2");
})

three.addEventListener("click", function(){
    addNumber("3");
    checkNumberPosition("3");
})

four.addEventListener("click", function(){
    addNumber("4");
    checkNumberPosition("4");
})

five.addEventListener("click", function(){
    addNumber("5");
    checkNumberPosition("5");
})

six.addEventListener("click", function(){
    addNumber("6");
    checkNumberPosition("6");
})

seven.addEventListener("click", function(){
    addNumber("7");
    checkNumberPosition("7");
})

eight.addEventListener("click", function(){
    addNumber("8");
    checkNumberPosition("8");
})

nine.addEventListener("click", function(){
    addNumber("9");
    checkNumberPosition("9");
})

zero.addEventListener("click", function(){
    addNumber("0");
    checkNumberPosition("0");
})

//Operators and deletion
addOperator.addEventListener("click", function(){
    operatorSelected("+");
})

subtractOperator.addEventListener("click", function(){
    operatorSelected("-");
})

multiplyOperator.addEventListener("click", function(){
    operatorSelected("x");
})

divideOperator.addEventListener("click", function(){
    operatorSelected("/");
})
