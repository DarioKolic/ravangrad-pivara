let imgURL = '';
let name = '';


// Navigation - Hide on Scroll

let lastScroll = 0;
let currentScroll = 0;
const navbar = document.querySelector('nav');

const shopCart = document.querySelector('.cart');
const asideShop = document.querySelector('.shop-aside');
const body = document.querySelector('body');
const asideBack = document.querySelector('a.back');


//Hide navbar

window.addEventListener('scroll', () => {
    currentScroll = window.pageYOffset;
    if(lastScroll > currentScroll){
        navbar.style.top = '0';
        asideShop.style.top = '60px';
    }else{
        navbar.style.top = '-65.50px'
        asideShop.style.top = '0px';
    }
    lastScroll = currentScroll;
});

// ********** SHOP ********** 

// Shop aside functionality


const shopItems = [{

}]




const addBtn = document.querySelector('.add-to-item');
const subBtn = document.querySelector('.sub-to-item');
const para = document.querySelector('.shop-aside p');
const orderBtn = document.querySelectorAll('.order');
const quantityTemp = document.querySelector('.quantity')

const inputQuantity = document.querySelector('.shop-aside-q');

let storeAddInfo = '';

let shopToggler = true;


orderBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        const orderParent = item.parentElement;
        const orderChildArr = orderParent.children;
        storeAddInfo = orderChildArr[0];
        console.log(storeAddInfo.textContent);

        if(shopToggler){
            asideShop.style.left = "70%";
            shopToggler = false;
        }
        let test = document.createElement('H1');
        test.innerHTML = storeAddInfo.textContent;
        asideShop.append(test);
        asideShop.append(quantity);

    });
})

shopCart.addEventListener('click', () => {
    if(shopToggler){
        asideShop.style.left = "70%";
        shopToggler = false;
    }else{
        asideShop.style.left = "100%";
        shopToggler = true;
    }
});



// addBtn.addEventListener('mousedown', () => inputQuantity.value++);

// subBtn.addEventListener('mousedown', () => inputQuantity.value--);


