const button = document.querySelector('.reveal-btn');
const text  = document.querySelector('.text');
const container = document.querySelector('.container');


function hide(){
    
    //if hide class already exists...
    if(text.classList.contains('hide')){
        text.classList.remove('hide')
        button.innerText = 'Hide!';

    }else{
        text.classList.add('hide');
        button.innerText = 'Show!';
    }
}

button.addEventListener('click', hide);