let display = document.getElementById('result');

let operDisplay = document.getElementById('operScreen');

let buttons = Array.from(document.getElementsByTagName('button'));


type calcHandler = {
    operator: string;
    lastNumber: string;
    operatorFlag: boolean;
    firstNumber: string;
    secondOperator: boolean;
    fixedOp: any;
}

let calcState: calcHandler = {
    operator: null,
    lastNumber: '',
    operatorFlag: false,
    firstNumber: '',
    secondOperator: false,
    fixedOp: null
}

function numberHandling(element: HTMLElement) {
    if (calcState.operator) {                       
        calcState.lastNumber += element.innerText;
    } else if (!calcState.operatorFlag) {
        calcState.firstNumber += element.innerText;
    }
   
    display.innerText += element.innerText;
    calcState.operatorFlag = false;
}

function operLog () {
    operDisplay.innerText = operDisplay.innerText + 
                            display.innerText + "\n" + "=" + " " +
                            eval(display.innerText) + "\n";
}

function operatorHandling(element: HTMLElement) {
    calcState.operator = element.innerText;
    if (element.id === 'times') {
        calcState.operator = '*';
    }
    if (element.id === 'divide') {
        calcState.operator = '/';
    }
    if(checkUndefined()) {
        if (calcState.operator !== '-') {
            errDisplay();
            return;
        }
    }
    display.innerText +=calcState.operator;
    calcState.operatorFlag = true;
}

function postEval() {
    calcState.firstNumber = display.innerText;
    calcState.lastNumber = '';
}

function checkIfLastElementIsOperator() {
    if (display.innerText[display.innerText.length - 1] === '*' ||
            display.innerText[display.innerText.length - 1] === '/' ||
            display.innerText[display.innerText.length - 1] === '+' ||
            display.innerText[display.innerText.length - 1] === '-') {
                return true;
        } else {
            return false;
        }
}

function errDisplay() {
    setTimeout(() => { 
        display.innerText = 'Error, Clear in 2 seconds';
        setTimeout(() => {
            display.innerText = '';
        }, 2000);
    }, 0);
}

function checkUndefined() {
    if (display.innerText === 'undefined') {
        display.innerText = '';
        return true;
    } else {
        return false;
    }
}

function operatorScientific(element: HTMLElement) {

    if (!display.innerText) {
            if (element.innerText !== '-') {
                errDisplay();
                return;
            }
        }

    if(calcState.secondOperator) {
        operLog();
        display.innerText = eval(display.innerText);
        postEval();
        calcState.secondOperator = false;
    } else if (calcState.operator) {
        if (calcState.operator === '*' || calcState.operator === '/') {
            operLog();
            display.innerText = eval(display.innerText);
            postEval();
            calcState.secondOperator = false;
        } else {
            calcState.secondOperator = true;
            operatorHandling(element);
            calcState.fixedOp = element;
            return;
        }   
    }

    operatorHandling(element);
}


function operatorSimple(element: HTMLElement) {
    if (calcState.operator) {
        if (calcState.fixedOp.className === 'operator') {
        } else {
            operLog();
        }}
    display.innerText = eval(display.innerText);
    postEval();
    operatorHandling(element);
}


buttons.map(button => {
    button.addEventListener('click', (e) => {
        let element = e.target as HTMLElement;
        switch(element.className) {
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
                } else {
                    operatorSimple(element);
                }
                
                break;

            case 'equal-sign':
                if (checkIfLastElementIsOperator()) {
                    display.innerText = display.innerText.slice(0, -1);
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
                    } else {
                        errDisplay();
                }
                } else {
                    if (calcState.firstNumber.indexOf('.') === -1) {
                        calcState.firstNumber += '.';
                        display.innerText += '.';
                    } else {
                        errDisplay();
                    }
                }
                break;
                
            }
            calcState.fixedOp = element;
    });
});