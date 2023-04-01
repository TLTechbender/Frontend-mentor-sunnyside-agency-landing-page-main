// 'use strict'

const showMenu =document.querySelector('.fa-bars');
const menuItems = document.querySelector('.menu-Items');
const items = document.querySelectorAll('.item')

showMenu.addEventListener('click', ()=> {
    menuItems.classList.add('show-items');
}
);

items.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menuItems.classList.remove('show-items');
    })
});




