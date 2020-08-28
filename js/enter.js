let backBtn = document.querySelector('#btn-no');
let animBtn = document.querySelector('#btn-yes');

let wrapperAnim = document.querySelector('.enter-wrapper');
let verifyAnim = document.querySelector('.enter-verify');
let imgAnimOpacity = document.querySelector('#img-bg');
let letAnim = document.querySelector('#img-let');

backBtn.addEventListener('click', () => {
    window.history.back();
});

animBtn.addEventListener('click', () => {

    setTimeout(() => {
        location = 'main.html';
    }, 1500);

    verifyAnim.style.opacity = 0;
    imgAnimOpacity.style.opacity = 0;
    letAnim.style.top = '50%';
    letAnim.style.width = '90%';

});

