'use strict';


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

document.body.addEventListener(`click`,function(e){
    const burger = e.target.closest(`.menu__icon`);
    if(!burger) return;

    const burgerMenu = burger.closest(`.header__menu`);
    burger.classList.toggle(`active`);
    burgerMenu.classList.toggle(`active`);
    document.body.classList.toggle('_lock');

})
