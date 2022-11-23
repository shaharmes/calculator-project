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
    if (display.innerText[display.innerText.length - 1] === ' ' && calcState.operatorFlag === false) {
        display.innerText = display.innerText.slice(0, -1);
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
    display.innerText +=" " + calcState.operator;
    display.innerText +=new String(" ");
    calcState.operatorFlag = true;
}

function operatorScientific(element: HTMLElement) {

}

function operatorSimple(element: HTMLElement) {
    if (calcState.operatorFlag) {
        display.innerText = display.innerText.slice(0, -3);
        calcState.operatorFlag = false;
    }
    if (calcState.operator) {
        if (calcState.fixedOp.className === 'operator') {
        } else {
            operLog();
        }}
    display.innerText = eval(display.innerText);
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
                if (scientificFlag) {
                    operatorScientific(element);
                } else {
                    operatorSimple(element);
                }
                break;


            case 'decimal':
                if (calcState.operator) {
                    if (calcState.lastNumber.indexOf('.') === -1) {
                        calcState.lastNumber += '.';
                        display.innerText += '.';
                    } else {
                        display.innerText = "Error"
                }
                } else {
                    if (calcState.firstNumber.indexOf('.') === -1) {
                        calcState.firstNumber += '.';
                        display.innerText += '.';
                    } else {
                        display.innerText = "Error"
                    }
                }
                break;
                
            }
            calcState.fixedOp = element;
    });
});