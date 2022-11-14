let display = document.getElementById('result');

let buttons = Array.from(document.getElementsByTagName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            default:
                display.innerText += e.target.innerText;
                break;
            
        }

        switch(e.target.id) {
            case 'back':
                display.innerText = display.innerText.slice(0, -1);
                break;
        }
           
    });
});
