function alertInfo() {
    alert('Shahar Meshulam\nVersion: 1.0.2\nInformation: Scientific calculator');
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function lightBulb() {
    let element = document.body;
    element.classList.toggle("light-mode");
 }

let scientificFlag = false;

function scientificMode() {
    let element = document.body;
    element.classList.toggle('scientific-mode');
    if (scientificFlag) {
        scientificFlag = false;
    } else {
        scientificFlag = true;
    }
    allClear();
}

function allClear() {
    calcState.operator = null;
    calcState.lastNumber = '';
    calcState.operatorFlag = false;
    calcState.firstNumber = '';
    calcState.secondOperator = false;
    display.innerText = '';
    operDisplay.innerText = '';
    calcState.fixedOp = null;
}


function historyMode() {
    let element = document.body;
    element.classList.toggle('history-mode');
}

function displayButtonInfo (button) {
    if (button.value === 'info') {
       return alertInfo();
    }
    if (button.value === 'light') {
        return lightBulb();
    }

    if (button.value === 'all-clear') {
        return allClear();
    }

    if (button.value === 'nthRoot') {
        return scientificMode();
    }

    if (button.value === "history") {
        return historyMode();
    }

    if (button.value === 'back'){
        if (checkIfLastElementIsOperator()) {
            calcState.operatorFlag = false;
        }
        display.innerText = display.innerText.slice(0, -1);
        return;
    }

 }


let buttons_app = document.getElementsByTagName('button');
for (let i = 0, len = buttons_app.length; i < len; i++) {
    buttons_app[i].onclick = function (){
        displayButtonInfo (this);
    }
}

function changeSettings(){
    if (window.location.search){
        const params = new URLSearchParams(window.location.search);
        let screenMode = params.get('mode');
        let backgroundColor = params.get('color');
        let fontFamily = params.get('font');
        console.log(darkMode);
        console.log(backgroundColor);
        console.log(fontFamily);
        if (screenMode === 'dark') {
            darkMode();
        }
        if (backgroundColor) {
            document.body.style.backgroundColor = backgroundColor;
        }
        if (fontFamily) {
            document.body.style.fontFamily = fontFamily;
        }
    }
  }
  addEventListener('DOMContentLoaded',() => {
    changeSettings();
  });

