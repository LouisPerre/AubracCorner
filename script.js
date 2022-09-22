const DATE = new Date().getHours()
// const BOX = document.querySelector('.changeColor')
var htmlElement = document.documentElement;
var bodyElement = document.body;
const CHANGETIME = 11
const documentHeight = Math.max(
    htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
    bodyElement.scrollHeight, bodyElement.offsetHeight
)

// if (DATE >= CHANGETIME) {
//     BOX.classList.toggle("late")
// }

let previousScroll = 0
window.onscroll = function() {
    let currentScroll = window.scrollY
    // console.log(currentScroll)

    if (currentScroll > 0 && currentScroll < documentHeight - window.innerHeight ) {
        if (currentScroll > previousScroll) {
            window.setTimeout(hideNav, 400)
        } else if (currentScroll == previousScroll) {
            window.setTimeout(showNav, 400)
        } else {
            window.setTimeout(showNav, 400)
        }
        previousScroll = currentScroll
    }
}

function hideNav() {
    document.querySelector('#navigation-scroll').style.display = 'none'
    document.querySelector(".main-navigation-scroll").classList.remove("is-visible")
    document.querySelector(".main-navigation-scroll").classList.add("is-hidden")
}

function showNav() {
    document.querySelector(".main-navigation-scroll").classList.remove("is-hidden")
    document.querySelector(".main-navigation-scroll").classList.add("is-visible")
    document.querySelector('#navigation-scroll').style.display = 'block'
    document.querySelector(".main-navigation-scroll").classList.add("shadow")
}
