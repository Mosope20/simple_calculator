(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.button');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.equal');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
}
)