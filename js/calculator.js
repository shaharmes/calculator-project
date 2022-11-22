let display = document.getElementById('result');
let operDisplay = document.getElementById('operScreen');
let buttons = Array.from(document.getElementsByTagName('button'));
let operator = null;
let lastNumber = '';
let operatorFlag = false;
let firstNumber = '';
let secondOperator = false;
operDisplay.innerText = '';
function operLog() {
    operDisplay.innerText = operDisplay.innerText + display.innerText + "\n" + "=" + " " + eval(display.innerText) + "\n";
}
buttons.map(button => {
    button.addEventListener('click', (e) => {
        let element = e.target;
        function operatorHandling() {
            operator = element.innerText;
            if (element.id === 'times') {
                operator = '*';
            }
            if (element.id === 'divide') {
                operator = '/';
            }
            display.innerText += " " + operator;
            display.innerText += new String(" ");
            ;
            operatorFlag = true;
        }
        switch (element.className) {
            case 'number':
                if (operator) {
                    lastNumber += element.innerText;
                }
                else if (!operatorFlag) {
                    firstNumber += element.innerText;
                }
                if (display.innerText[display.innerText.length - 1] === ' ' && operatorFlag === false) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                display.innerText += element.innerText;
                operatorFlag = false;
                break;
            case 'operator':
                if (operatorFlag) {
                    if (scientificFlag) {
                        display.innerText = display.innerText.slice(0, -3);
                        operatorFlag = false;
                        operatorHandling();
                        break;
                    }
                    else {
                        display.innerText = display.innerText.slice(0, -2);
                        operatorFlag = false;
                    }
                }
                if (operator) {
                    console.log('second operator', secondOperator);
                    if (scientificFlag) {
                        if (secondOperator) {
                            secondOperator = false;
                            operLog();
                            display.innerText = eval(display.innerText);
                        }
                        else if (operator === '*' || operator === '/') {
                            operLog();
                            display.innerText = eval(display.innerText);
                            secondOperator = false;
                        }
                        else {
                            secondOperator = true;
                            operatorHandling();
                        }
                    }
                    else {
                        operLog();
                        display.innerText = eval(display.innerText);
                    }
                }
                display.innerText = eval(display.innerText);
                operatorHandling();
                break;
            case 'equal-sign':
                if (operatorFlag) {
                    display.innerText = display.innerText.slice(0, -2);
                    operatorFlag = false;
                }
                operLog();
                display.innerText = eval(display.innerText);
                break;
            case 'decimal':
                if (operator) {
                    if (lastNumber.indexOf('.') === -1) {
                        lastNumber += '.';
                        display.innerText += '.';
                    }
                    else {
                        display.innerText = "Error";
                    }
                }
                else {
                    if (firstNumber.indexOf('.') === -1) {
                        firstNumber += '.';
                        display.innerText += '.';
                    }
                    else {
                        display.innerText = "Error";
                    }
                }
                break;
        }
    });
});
