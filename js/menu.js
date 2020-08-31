const expand = document.querySelector('.expand');
const navExpand = document.querySelector('.toExpand');
const navHeight = navExpand.clientHeight;
let toggler = false;

navExpand.setAttribute('data-expand', 'false');

expand.addEventListener('click', (e) => {
    if(!toggler){
        navExpand.style.height = '0px';
        toggler = true;
    }else{
        navExpand.style.height = `${navHeight}px`
        toggler = false;
    }
})

if(navExpand.getAttribute('data-expand') !== 'true'){
    navExpand.style.height = '0px';
    toggler = true;
}else{
    navExpand.style.height = `${navHeight}px`;
    toggler = false;
}