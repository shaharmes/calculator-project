let display = document.getElementById('result');
let operDisplay = document.getElementById('operScreen');
let buttons = Array.from(document.getElementsByTagName('button'));
let calcState = {
    operator: null,
    lastNumber: '',
    operatorFlag: false,
    firstNumber: '',
    secondOperator: false,
    fixedOp: null
};
function numberHandling(element) {
    if (calcState.operator) {
        calcState.lastNumber += element.innerText;
    }
    else if (!calcState.operatorFlag) {
        calcState.firstNumber += element.innerText;
    }
    display.innerText += element.innerText;
    calcState.operatorFlag = false;
}
function operLog() {
    operDisplay.innerText = operDisplay.innerText +
        display.innerText + "\n" + "=" + " " +
        eval(display.innerText) + "\n";
}
function operatorHandling(element) {
    calcState.operator = element.innerText;
    if (element.id === 'times') {
        calcState.operator = '*';
    }
    if (element.id === 'divide') {
        calcState.operator = '/';
    }
    display.innerText += calcState.operator;
    calcState.operatorFlag = true;
}
function checkIfLastElementIsOperator() {
    if (display.innerText[display.innerText.length - 1] === '*' ||
        display.innerText[display.innerText.length - 1] === '/' ||
        display.innerText[display.innerText.length - 1] === '+' ||
        display.innerText[display.innerText.length - 1] === '-') {
        return true;
    }
    else {
        return false;
    }
}
function operatorScientific(element) {
    if (calcState.secondOperator) {
        display.innerText = eval(display.innerText);
        calcState.secondOperator = false;
    }
    if (calcState.operator) {
        if (calcState.operator === '*' || calcState.operator === '/') {
            operLog();
            display.innerText = eval(display.innerText);
            calcState.secondOperator = false;
        }
        else {
            calcState.secondOperator = true;
            operatorHandling(element);
            calcState.fixedOp = element;
            return;
        }
    }
    operatorHandling(element);
}
function operatorSimple(element) {
    if (calcState.operator) {
        if (calcState.fixedOp.className === 'operator') {
        }
        else {
            operLog();
        }
    }
    display.innerText = eval(display.innerText);
    operatorHandling(element);
}
buttons.map(button => {
    button.addEventListener('click', (e) => {
        let element = e.target;
        switch (element.className) {
            case 'number':
                numberHandling(element);
                break;
            case 'operator':
                if (checkIfLastElementIsOperator()) {
                    display.innerText = display.innerText.slice(0, -1);
                    calcState.operatorFlag = false;
                    operatorHandling(element);
                    break;
                }
                if (scientificFlag) {
                    operatorScientific(element);
                }
                else {
                    operatorSimple(element);
                }
                break;
            case 'decimal':
                if (calcState.operator) {
                    if (calcState.lastNumber.indexOf('.') === -1) {
                        calcState.lastNumber += '.';
                        display.innerText += '.';
                    }
                    else {
                        display.innerText = "Error";
                    }
                }
                else {
                    if (calcState.firstNumber.indexOf('.') === -1) {
                        calcState.firstNumber += '.';
                        display.innerText += '.';
                    }
                    else {
                        display.innerText = "Error";
                    }
                }
                break;
        }
        calcState.fixedOp = element;
    });
});
