const sum = require('./module/sum.js')

function pageLoaded() {
    const btnHeader = document.querySelector(".header__btn"),
        btnRightSide = document.querySelector(".rightside-menu__close"),
        rightSideMenu = document.querySelector(".rightside-menu")

    const closeRightSideMenu = () => {
        rightSideMenu.classList.remove('rightside-menu--close')
    }

    const openRightSideMenu = () => {
        rightSideMenu.classList.add('rightside-menu--close')

    }

    btnHeader.addEventListener("click", closeRightSideMenu)
    btnRightSide.addEventListener("click", openRightSideMenu)
}

document.addEventListener("DOMContentLoaded", pageLoaded)