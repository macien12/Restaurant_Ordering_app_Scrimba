import { menuArray } from './data.js'

const menuEl = document.getElementById('menuContainer')

const buttonPlusEl = document.getElementsByClassName('buttonPlus')

const orderedEl = document.getElementById('orderedItems')

const totalPriceEl = document.getElementById('totalPrice')

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
        <button class="buttonPlus" data-plus="${item.id}" ><i class="fa-solid fa-plus circle" ></i></button>
    </div>
    </section>
    
    
    `
}).join('')

menuEl.innerHTML += menuItem

const basketArr = []

function renderBasket(item) {
    const basketItem = basketArr.map (function (item) {
    return `<div class="itemPosition"><p>${item.name} <button class="removeBtn" data-remove="${item.id}">remove</button></p> ${item.price}$</div>`}).join('')

    orderedEl.innerHTML = basketItem
}

function updateTotalPrice(price) {
    const basketTotal = basketArr.reduce((total, currentElement) =>
    total + currentElement.price, 0)
    totalPriceEl.textContent = basketTotal
}

function handleAddingItems(orderID){
    const basketItems = document.getElementById('orderedItems')
    
    const selectedItem = menuArray.find(function(item) {
        return item.id === Number(orderID)
    })
    
    basketArr.push(selectedItem)

    renderBasket()
    updateTotalPrice()

    if (selectedItem) {
            document.getElementById('menuOrder').classList.remove('hidden')
    }
}



