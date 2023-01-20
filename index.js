let display = document.querySelector(".calculator-screen");

let firstNumber = '';
let secondNumber = '';

function operate(firstNumber, secondNumber,operator){
    switch (operator){
        case '+':
            return firstNumber+secondNumber;
        case '-': 
            return firstNumber-secondNumber;
        case '/':
            return firstNumber/secondNumber;
        case '*':
            return firstNumber*secondNumber;
    }
}

function onPlusClick(){
       
}

function screen(value){
    if(display.value.includes('.')){
        if(value != '.'){
            display.value += value;    
        }
        return
    }
    display.value += value;
}

function clean(){
    display.value = '';
}