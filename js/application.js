function alertInfo() {
    alert('Shahar Meshulam\nVersion: 1.0.2\nInformation: Scientific calculator');
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

function displayButtonInfo (button) {
    if (button.value === 'info') {
       return alertInfo();
    }
    if (button.value === 'light') {
        return darkMode();
    }

    alert(button.value);
 }


let buttons = document.getElementsByTagName('button');
for (let i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function (){
        displayButtonInfo (this);
    }
}




