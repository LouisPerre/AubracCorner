const DATE = new Date().getHours()
const BOX = document.querySelector('.changeColor')
const CHANGETIME = 11

if (DATE >= CHANGETIME) {
    BOX.classList.toggle("late")
}
