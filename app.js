let display = document.getElementById('screen');

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button =>{
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                display.innerHTML = 'Error'
                }
                break;
            case '+/-':
                display.innerText = display.innerText *-1;
                break;
            //case 'x':
            //    display.innerText *= e.target.innerText;
            //   break;
            default:
                display.innerText += e.target.innerText;
            
        }
    })
})