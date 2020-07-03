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

// Beer Destinations

let destForm = document.querySelector('#dest-form');

//Add Destination




