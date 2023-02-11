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

    //sections active class
    allSections.addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if(id){
                //remove selected from the other btn
                sectBtns.forEach((btn) =>{
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                //hide other section
                sections.forEach((section) =>{
                    section.classList.remove('active');
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })        
}


PageTransitions();

