const navCollection = document.getElementById('nav_collection');
const navClose = document.getElementById('nav_close');
const navMenu = document.getElementById('nav_menu');

let if_nav_open = false;

navMenu.addEventListener('click' , () =>{
    if (!if_nav_open) {
        navCollection.style.transform='translateX(0)';
        if_nav_open = true;
    } else{
        navCollection.style.transform='';
        if_nav_open = false;
    }
})

navClose.addEventListener('click' , () =>{
    if (!if_nav_open) {
        navCollection.style.transform='translateX(0)';
        if_nav_open = true;
    } else{
        navCollection.style.transform='';
        if_nav_open = false;
    }
})


// preloader

const loader_wrapper = document.getElementById('loader_wrapper');

window.addEventListener('load' , () => {
    loader_wrapper.remove();
})
