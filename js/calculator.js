let display = document.getElementById('result');

let buttons = Array.from(document.getElementsByTagName('button'));

let operator = null;
let lastNumber = '';
let operatorFlag = false;

function evil(fn) {
    return new Function ('return ' + fn)();
}

buttons.map(button => {
    button.addEventListener('click', (e) => {

        switch(e.target.className) {
            case 'number':
                if (operator) {
                    lastNumber += e.target.innerText;
                }
                display.innerText += e.target.innerText;
                operatorFlag = false;
                break;

            case 'operator':

                if (operatorFlag) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                
                operator = e.target.innerText;
                if (e.target.id === 'times') {
                    operator = '*';
                }
                if (e.target.id === 'divide') {
                    operator = '/';
                }
                display.innerText += operator;
                operatorFlag = true;

                break;

            case 'equal-sign':
                if (operatorFlag) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                display.innerText = eval(display.innerText);
                break;

            case 'decimal':
                display.innerText += '.';
                break;
            }
           
    });
});
