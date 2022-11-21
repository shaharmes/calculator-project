function alertInfo() {
    alert('Shahar Meshulam\nVersion: 1.0.2\nInformation: Scientific calculator');
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

function allClear() {
    display.innerText = '';
    operator = null;
    lastNumber = '';
    operatorFlag = false;
    firstNumber = '';
}


function historyMode() {
    let element = document.body;
    element.classList.toggle('history-mode');
    document.getElementById('operation').style.display = 'none';
}

function displayButtonInfo (button) {
    if (button.value === 'info') {
       return alertInfo();
    }
    if (button.value === 'light') {
        return darkMode();
    }

    if (button.value === 'all-clear') {
        return allClear();
    }

    if (button.value === "history") {
        return historyMode();
    }

    if (button.value === 'back'){
        if (display.innerText[display.innerText.length - 1] === ' ') {
                operatorFlag = false;
               return display.innerText = display.innerText.slice(0, -2);
        } else if (display.innerText[display.innerText.length - 1] === '*' ||
            display.innerText[display.innerText.length - 1] === '/' ||
            display.innerText[display.innerText.length - 1] === '+' ||
            display.innerText[display.innerText.length - 1] === '-') {
                operatorFlag = false;
               return display.innerText = display.innerText.slice(0, -1);
        }
        display.innerText = display.innerText.slice(0, -1);
        return;
    }

    // alert(button.value);
 }


let buttons_app = document.getElementsByTagName('button');
for (let i = 0, len = buttons_app.length; i < len; i++) {
    buttons_app[i].onclick = function (){
        displayButtonInfo (this);
    }
}
