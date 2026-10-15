import { menuArray } from './data.js'

const menuEl = document.getElementById('menuContainer')

const buttonPlusEl = document.getElementsByClassName('buttonPlus')

document.addEventListener('click', function(e) {
    const buttonPlus = e.target.closest('[data-plus]')
    if(buttonPlus){
        handleAddingItems(buttonPlus.dataset.plus)
    }
})


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
        <button class="buttonPlus" ><i class="fa-solid fa-plus circle" data-plus="${item.id}"></i></button>
    </div>
    </section>
    
    
    `
}).join('')

menuEl.innerHTML += menuItem

function handleAddingItems(orderID){
    const handleObj = menuArray.filter(function(item) {
        return item.id === orderID
    })[0]
    

    if (orderID) {
            document.getElementById('menuOrder').classList.remove('hidden')
    }
}