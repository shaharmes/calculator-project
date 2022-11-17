let display = document.getElementById('result');

let buttons = Array.from(document.getElementsByTagName('button'));


let operator = null;
let lastNumber = '';
let operatorFlag = false;
let demoResult = null;


buttons.map(button => {
    button.addEventListener('click', (e) => {

        switch(e.target.className) {
            case 'number':
                if (operator) {
                    lastNumber += e.target.innerText;
                }
                if (display.innerText[display.innerText.length - 1] === ' ' && operatorFlag === false) {
                    display.innerText = display.innerText.slice(0, -1);
                }

                display.innerText += e.target.innerText;
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
                
                operator = e.target.innerText;
                if (e.target.id === 'times') {
                    operator = '*';
                }
                if (e.target.id === 'divide') {
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
                    display.innerText += '.';
                    break;
                
            }
    });
});
