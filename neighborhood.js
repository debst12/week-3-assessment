food = ['Stans Drive-In at 248 W Center St, Salem, UT 84653','Main Street Pizza at 466 North, UT-198, Salem, UT 84653','Oriental Garden at 412 UT-198, Salem, UT 84653','Soda Retreat at 195 W, UT-198, Salem, UT 84653','Burger King at 390 UT-198, Salem, UT 84653','Subway at 442 N State Rd, UT-198, Salem, UT 84653','Champs Chicken at 84 UT-198, Salem, UT 84653']

const btn = document.querySelector('#btn')

const randomRestaurant = () => {
    alert(`Go to ${food[(Math.random() * food.length | 0)]} for some yummy food!`)
    console.log('Success!')
}

btn.addEventListener('click',randomRestaurant)