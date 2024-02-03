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
let changeSign = document.querySelector(".change-sign");
let addOperator = document.querySelector(".add");
let subtractOperator =  document.querySelector(".subtract");
let multiplyOperator = document.querySelector(".multiply");
let divideOperator = document.querySelector(".divide");
let equals = document.querySelector(".equals");
let dot = document.querySelector(".dot");

function add(a, b) {
    return Math.round((a+b) * 100) / 100;
}

function subtract(a, b) {
    return Math.round((a-b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a*b) * 100) / 100;
}

function divide(a, b) {
    return Math.round((a/b) * 100) / 100;
}

function operate(firstNumber, operator, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
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

function isTheResultPossible(result) {
    if (result == Infinity || result == -Infinity || result == NaN) {
        display.replaceChildren();
        let displayResult = document.createTextNode("Certainly not");
        display.appendChild(displayResult);
        firstNumber = "";
        secondNumber = "";
        currentOperator = "";
        isThereOperator = false;
        isSecondNumber = false;
        return false;
    } else {
        return true;
    }
}

let firstNumber = "";
let currentOperator = "";
let secondNumber = "";
let isThereOperator = false;
let beginning = document.createTextNode("0");
display.appendChild(beginning);


function operatorSelected(operator) { 
    if (firstNumber !== "") {
        if (secondNumber != "") {
            result = operate(firstNumber, currentOperator, secondNumber);
            if (isTheResultPossible(result)) {
                firstNumber = result;
                currentOperator = operator;
                display.replaceChildren();
                let displayResult = document.createTextNode(result);
                display.appendChild(displayResult);
                secondNumber = "";
                firstNumberDot = false;
                secondNumberDot = false;
            } 
        } else {
            isThereOperator = true;
            currentOperator = operator;
            isSecondNumber = true;
        }
    } 
}

function addNumber(number) {
    if (result == Infinity || result == -Infinity || result == NaN){
        result = "";
        display.replaceChildren;
    }

    if (isThereOperator == true && secondNumber == "") {
        display.replaceChildren();
    }

    if (currentOperator == "" && firstNumber == result) {
        display.replaceChildren();
        firstNumber = "";
        secondNumber = "";
        isSecondNumber = false;
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
    if (secondNumber != "") {
        result = operate(firstNumber, currentOperator, secondNumber);
        if (isTheResultPossible(result)) {
            display.replaceChildren();
            let displayResult = document.createTextNode(result);
            display.appendChild(displayResult);
            firstNumber = result;
            secondNumber = "";
            isThereOperator = false;
            currentOperator = "";
            firstNumberDot = false;
            secondNumberDot = false;
        } 
    }
})

clearAll.addEventListener("click", function(){
    display.replaceChildren();
    result = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    isSecondNumber = false;
    isThereOperator = false;
    firstNumberDot = false;
    secondNumberDot = false;
    display.appendChild(beginning);
})

changeSign.addEventListener("click", function(){
    if(isThereOperator == true) {
        secondNumber = secondNumber*(-1);
        display.replaceChildren();
        let signChanged = document.createTextNode(secondNumber);
        display.appendChild(signChanged);
    } else if (result != "") {
        if (firstNumber == result) {
            firstNumber = firstNumber*(-1);
        }
        result = result*(-1);
        display.replaceChildren();
        let signChanged = document.createTextNode(result);
        display.appendChild(signChanged);
    } else {
        firstNumber = firstNumber*(-1);
        display.replaceChildren();
        let signChanged = document.createTextNode(firstNumber);
        display.appendChild(signChanged);
    }
})

let firstNumberDot = false;
let secondNumberDot = false;
dot.addEventListener("click", function(){
    if (firstNumberDot == false && isSecondNumber == false) {
        checkNumberPosition(".");
        let displayDot = document.createTextNode(".");
        display.appendChild(displayDot);
        firstNumberDot = true;
    } else if (secondNumberDot == false && isSecondNumber == true && secondNumber !== "") {
        checkNumberPosition(".");
        let displayDot = document.createTextNode(".");
        display.appendChild(displayDot);
        secondNumberDot = true;
    }
})

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

//Operators
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