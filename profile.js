const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')

const alertColor = () => {
    alert('My Favorite Color is Blue!')
}

const alertPlace = () => {
    alert('My favorite place is Luna, New Mexico.')
}

const alertRitual = () => {
    alert('My favorite ritual is to touch the ping pong ball to the table every time before I serve.')
}

color.addEventListener('click',alertColor)
place.addEventListener('click',alertPlace)
ritual.addEventListener('click',alertRitual)