// Navigation - Hide on Scroll

let lastScroll = 0;
let currentScroll = 0;
let navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    currentScroll = window.pageYOffset;
    if(lastScroll > currentScroll){
        navbar.style.top = '0';
    }else{
        navbar.style.top = '-65.50px'
    }
    lastScroll = currentScroll;
});

let lastSliderScroll = 110;
let currentSliderScroll = 0;

let slider = document.querySelector('div.slider-wrapper');

slider.addEventListener('scroll', () => {
    currentSliderScroll = slider.scrollWidth;

})
