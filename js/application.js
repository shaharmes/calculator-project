function alertInfo() {
    alert('Shahar Meshulam\nVersion: 1.0.2\nInformation: Scientific calculator');
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

 let displayApp = document.getElementById('result');


function displayButtonInfo (button) {
    if (button.value === 'info') {
       return alertInfo();
    }
    if (button.value === 'light') {
        return darkMode();
    }

    if (button.value === 'all-clear') {
        operator = null;
        lastNumber = '';
        operatorFlag = false;
        return displayApp.innerText = '';

    }

    if (button.value === 'back'){
        return displayApp.innerText = displayApp.innerText.slice(0, -1);
    }

    // alert(button.value);
 }


let buttons_app = document.getElementsByTagName('button');
for (let i = 0, len = buttons_app.length; i < len; i++) {
    buttons_app[i].onclick = function (){
        displayButtonInfo (this);
    }
}




