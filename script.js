const DATE = new Date().getHours()
// const BOX = document.querySelector('.changeColor')
var htmlElement = document.documentElement;
var bodyElement = document.body;
const CHANGETIME = 12
const documentHeight = Math.max(
    htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
    bodyElement.scrollHeight, bodyElement.offsetHeight
)
const burgerMenu = document.getElementsByTagName('header')
const imageLight = "./img/lightModeButton.png"
const imageDark = "./img/darModeButton.png"
const imgToChange = document.getElementById('imgButton')
const buttonToChangeImage = document.getElementById("buttonDark")

buttonToChangeImage.addEventListener('click', () => {
    changeStyle()
})

if (DATE >= CHANGETIME) {
    changeStyle()
}

function changeStyle() {
    if (imgToChange.style.backgroundColor === 'transparent') {
        imgToChange.src = imageLight
        imgToChange.style.backgroundColor = "#303030"
    } else {
        imgToChange.src = imageDark
        imgToChange.style.backgroundColor = "transparent" 
    }
}

let previousScroll = 0
window.onscroll = function() {
    let currentScroll = window.scrollY
    // console.log(currentScroll)

    if (currentScroll > 0 && currentScroll < documentHeight - window.innerHeight ) {
        if (currentScroll > previousScroll) {
            window.setTimeout(hideNav, 300)
        } else if (currentScroll == previousScroll) {
            window.setTimeout(showNav, 300)
        } else {
            window.setTimeout(showNav, 300)
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

// Slide Animations
let slideElements = Array.from(document.querySelectorAll('.slide'))
console.log(slideElements);

window.addEventListener('scroll', scanElement)
function scanElement() {
    slideElements.forEach(element => {
        if (isVisible(element)) {
            element.classList.add('shown3');
            element.classList.remove('hidden');
        } else {
            element.classList.remove('shown3');
            element.classList.add('hidden');
        };
    });
};
function isVisible(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -50;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}

// Darkmode
if (window.screen.width <= 900) {
    document.getElementById('menuBurgerListener').addEventListener('click', () => {
        document.getElementById("header").classList.toggle('active')
    })
}


// Menu Slider
function dayMenu() {
    document.getElementById("day-menu").style.display = "none";
    document.getElementById("formula").style.display = "none";
    document.getElementById("lunch-title").style.display = "none";
    document.getElementById("left-arrow").style.display = "flex";
    document.getElementById("right-arrow").style.display = "none";
    document.getElementById("night-menu").style.display = "flex";
}

function nightMenu() {
    document.getElementById("day-menu").style.display = "flex";
    document.getElementById("formula").style.display = "flex";
    document.getElementById("lunch-title").style.display = "block";
    document.getElementById("left-arrow").style.display = "none";
    document.getElementById("right-arrow").style.display = "flex";
    document.getElementById("night-menu").style.display = "none";
}