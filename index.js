let display = document.querySelector(".calculator-screen");

let firstNumber, secondNumber, operation;

function onEqualClick(){
    secondNumber = parseFloat(display.value);
    switch(operation){
        case '+': display.value = firstNumber+secondNumber;
            break;
        case '-': display.value = firstNumber-secondNumber;
            break;
        case '*': display.value = firstNumber*secondNumber;
            break;
        case '/': display.value = firstNumber/secondNumber;
    }
}

function onPlusClick(){
    firstNumber = parseFloat(display.value);
    operation = '+';
    display.value = '';
}

function onMinusClick(){
    firstNumber = parseFloat(display.value);
    operation = '-';
    display.value = '';
}

function onMultiplyClick(){
    firstNumber = parseFloat(display.value);
    display.value = '';
    operation = '*';
}

function onDivideClick(){
    firstNumber = parseFloat(display.value);
    operation = '/';
    display.value = '';
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