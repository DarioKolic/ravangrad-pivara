// Navigation - Hide on Scroll

let lastScroll = 0;
let currentScroll = 0;
let navbar = document.querySelector('nav');

let shopCart = document.querySelector('.cart');
let asideShop = document.querySelector('.shop-aside');
let body = document.querySelector('body');
let asideBack = document.querySelector('a.back');

//Hide navbar

window.addEventListener('scroll', () => {
    currentScroll = window.pageYOffset;
    if(lastScroll > currentScroll){
        navbar.style.top = '0';
    }else{
        navbar.style.top = '-65.50px'
    }
    lastScroll = currentScroll;
});

// Shop aside functionality

let addBtn = document.querySelector('.add-to-item');
let subBtn = document.querySelector('.sub-to-item');

let inputQuantity = document.querySelector('.shop-aside-q');

let shopToggler = true;



shopCart.addEventListener('click', () => {


    if(shopToggler){
        asideShop.style.left = '70%';
        shopToggler = false;
    }else{
        asideShop.style.left = '100%';
        shopToggler = true;
    }
});

addBtn.addEventListener('mousedown', () => inputQuantity.value++);

subBtn.addEventListener('mousedown', () => inputQuantity.value--);

let shop = document.querySelector('.shop-wrapper');

console.log(shop);

let shopList = Array.from(shop.children);

console.log(shopList[2])