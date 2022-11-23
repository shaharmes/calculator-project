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
    display.innerText += " " + calcState.operator;
    display.innerText += new String(" ");
    ;
    calcState.operatorFlag = true;
}
buttons.map(button => {
    button.addEventListener('click', (e) => {
        let element = e.target;
        switch (element.className) {
            case 'number':
                if (calcState.operator) {
                    calcState.lastNumber += element.innerText;
                }
                else if (!calcState.operatorFlag) {
                    calcState.firstNumber += element.innerText;
                }
                if (display.innerText[display.innerText.length - 1] === ' ' && calcState.operatorFlag === false) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                display.innerText += element.innerText;
                calcState.operatorFlag = false;
                break;
            case 'operator':
                if (calcState.operatorFlag) {
                    if (scientificFlag) {
                        display.innerText = display.innerText.slice(0, -3);
                        calcState.operatorFlag = false;
                        operatorHandling(element);
                        break;
                    }
                    else {
                        display.innerText = display.innerText.slice(0, -2);
                        calcState.operatorFlag = false;
                    }
                }
                if (calcState.operator) {
                    if (scientificFlag) {
                        if (calcState.secondOperator) {
                            calcState.secondOperator = false;
                            operLog();
                            display.innerText = eval(display.innerText);
                        }
                        else if (calcState.operator === '*' || calcState.operator === '/') {
                            operLog();
                            display.innerText = eval(display.innerText);
                            calcState.secondOperator = false;
                        }
                        else {
                            calcState.secondOperator = true;
                            operatorHandling(element);
                        }
                    }
                    else {
                        if (calcState.fixedOp.className === 'operator') {
                        }
                        else {
                            operLog();
                        }
                        display.innerText = eval(display.innerText);
                    }
                }
                display.innerText = eval(display.innerText);
                operatorHandling(element);
                break;
            case 'equal-sign':
                if (calcState.operatorFlag) {
                    display.innerText = display.innerText.slice(0, -2);
                    calcState.operatorFlag = false;
                }
                operLog();
                display.innerText = eval(display.innerText);
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
