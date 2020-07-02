let enter = document.querySelector('.enter-popup');
let wrapper = document.querySelector('.enter-wrapper');
let enterImg = document.querySelector('#enter-img');

let enterBtn = document.querySelector('.btn-da');
let leaveBtn = document.querySelector('.btn-ne');

enterBtn.addEventListener('click', () => {
    
    enter.style.opacity = 1;
    setTimeout(() => {
    enterImg.style.transform = 'translateY(100px)';
        setTimeout(() => { enterImg.style.transform = 'translateY(-1100px)'}, 300)
        setTimeout(() => { 
            wrapper.style.display = 'none';
            setTimeout(() => {
                body.style.overflow = 'visible';
            
            }, 100);
        }, 1000);
    }, 100);
});
