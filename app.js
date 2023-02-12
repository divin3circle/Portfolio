const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); //btns container
const sectBtn = document.querySelectorAll('.control');//indvidual btns
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    //btn click to activate class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    
}


PageTransitions();


