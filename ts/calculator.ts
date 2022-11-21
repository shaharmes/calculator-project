let display = document.getElementById('result');

let buttons = Array.from(document.getElementsByTagName('button'));


let operator = null;
let lastNumber = '';
let operatorFlag = false;
let firstNumber = '';


buttons.map(button => {
    button.addEventListener('click', (e) => {
        let element = e.target as HTMLElement;
        switch(element.className) {
            case 'number':
                if (operator) {
                    lastNumber += element.innerText;
                } else if (!operatorFlag) {
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
                    display.innerText = display.innerText.slice(0, -3);
                    operatorFlag = false;
                }

                if (operator) {
                    display.innerText = eval(display.innerText);
                }
                
                operator = element.innerText;
                if (element.id === 'times') {
                    operator = '*';
                }
                if (element.id === 'divide') {
                    operator = '/';
                }
                display.innerText +=" " + operator;
                display.innerText +=new String(" ");;
                operatorFlag = true;

                break;

            case 'equal-sign':
                if (operatorFlag) {
                    display.innerText = display.innerText.slice(0, -2);
                    operatorFlag = false;
                }
                display.innerText = eval(display.innerText);
                break;

            case 'decimal':
                if (operator) {
                    if (lastNumber.indexOf('.') === -1) {
                        lastNumber += '.';
                        display.innerText += '.';
                    } else {
                        display.innerText = "Error"
                }
                } else {
                    if (firstNumber.indexOf('.') === -1) {
                        firstNumber += '.';
                        display.innerText += '.';
                    } else {
                        display.innerText = "Error"
                    }
                }
                break;
                
            }
    });
});