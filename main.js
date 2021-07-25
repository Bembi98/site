const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu-list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.classList.add('menu_active');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
       nav.classList.remove('menu_active');
    }
});


const menuLeftBtn = document.querySelector('.menu-left-bottom');
const navleft = document.querySelector('.menu-left-btn-list');
const menuLb = document.querySelector('.menu-lb');
let menuOpenL = false;
menuLeftBtn.addEventListener('click', () => {
    if(!menuOpenL) {
        menuLeftBtn.classList.add('open');
        menuOpenL = true;
        navleft.classList.add('menu_active');
        menuLb.classList.add('menu-lb-active');
    } else {
        menuLeftBtn.classList.remove('open');
        menuOpenL = false;
        navleft.classList.remove('menu_active');
        menuLb.classList.remove('menu-lb-active');
    }
});
const menuRightBtn = document.querySelector('.menu-right-bottom');
const navright = document.querySelector('.menu-right-btn-list');
let menuOpenR = false;
menuRightBtn.addEventListener('click', () => {
    if(!menuOpenR) {
        menuRightBtn.classList.add('open');
        menuOpenR = true;
        navright.classList.add('menu_active');
    } else {
        menuRightBtn.classList.remove('open');
        menuOpenR = false;
        navright.classList.remove('menu_active');
    }
});
// .menu-lb {
//     width: 50px;
//     height: 3px;
//     background: #fff;
//     border-radius: 5px;
//     box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
//     transition: all .5s ease-in-out;
// }
//
// .menu-lb::before,
// .menu-lb::after {
//     content: '';
//     position: absolute;
//     width: 50px;
//     height: 3px;
//     background: #fff;
//     border-radius: 5px;
//     box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
//     transition: all .5s ease-in-out;
// }
//
// .menu-lb::before {
//     transform: translateY(-16px);
// }
//
// .menu-lb::after {
//     transform: translateY(16px);
// }
//
// .menu-left-bottom.open .menu-btn__burger {
//     transform: translateX(-50px);
//     background: transparent;
//     box-shadow: none;
// }
//
// .menu-left-bottom.open .menu-btn__burger::before {
//     transform: rotate(45deg) translate(35px, -35px);
// }
//
// .menu-left-bottom .menu-btn__burger::after {
//     transform: rotate(-45deg) translate(35px, 35px);
// }