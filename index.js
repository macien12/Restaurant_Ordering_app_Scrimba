import { menuArray } from './data.js'

const menuEl = document.getElementById('menuContainer')


const menuItem = menuArray.map (function (item) {
    return `<section class="menuEl">
    <div class="icon">
        ${item.emoji}
    </div>
    <div class="mid">
        <h4 class="itemName">${item.name}</h4>
        <p class="itemIng">${item.ingredients.join(', ')}</p>
        <h5 class="itemPrice">${item.price} $</h5>
    </div>
    <div class="end">
        <i class="fa-solid fa-plus circle"></i>
    </div>
    </section>`
}).join('')

menuEl.innerHTML += menuItem

