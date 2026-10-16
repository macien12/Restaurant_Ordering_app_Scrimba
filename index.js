import { menuArray } from './data.js'

const menuEl = document.getElementById('menuContainer')

const orderedEl = document.getElementById('orderedItems')

const totalPriceEl = document.getElementById('totalPrice')

const modal = document.getElementById('modal')

const orderCompletedEl = document.getElementById('orderCompleted')

const paymentForm = document.getElementById('paymentForm')

const payerName = document.getElementById('payer-name')

const discountMessage = document.getElementById('discountMessage')

const ratingSection = document.getElementById('ratingSection')

const reviewConfirmationEl = document.getElementById('submit-Section')

let selectedRating = 0

document.addEventListener('click', function(e) {
    const buttonPlus = e.target.closest('[data-plus]')
    if(buttonPlus){
        handleAddingItems(buttonPlus.dataset.plus)
    } else if  (e.target.dataset.remove) {
        handleRemoveClick(e.target.dataset.remove)
    } else if (e.target.dataset.order) {
        handleModal()
    } else if (e.target.dataset.rate) {
        handleRateUs()
    } else if (e.target.dataset.rating) {
        handleStarRating(e.target.dataset.rating)
    } else if (e.target.dataset.submit) {
        handleSubmit()
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
        <h5 class="itemPrice">${item.price} PLN</h5>
    </div>
    <div class="end">
        <button class="buttonPlus" data-plus="${item.id}" ><i class="fa-solid fa-plus circle" ></i></button>
    </div>
    </section>
    `
}).join('')

menuEl.innerHTML += menuItem

const basketArr = []

function renderBasket() {
    const basketItem = basketArr.map (function (item) {
    return `
            <div class="itemPosition">
                <div class="itemDetails">
                    <span class="orderedName">${item.name}</span>
                    <button class="removeBtn" data-remove="${item.id}">
                        remove
                    </button>
                </div>

                <span class="orderedPrice">PLN ${item.price}</span>
            </div>
    `}).join('')

    orderedEl.innerHTML = basketItem


}

function updateTotalPrice() {
    const basketTotal = basketArr.reduce((total, currentElement) =>
    total + currentElement.price, 0)

    const hasKompot = basketArr.some(item => item.name === "Kompot")

    const hasPierogi = basketArr.some(item => item.name === "Pierogi")

    const hasSchabowy = basketArr.some(item => item.name === "Schabowy")

    const hasDiscount = hasKompot && (hasPierogi || hasSchabowy)

    const finalPrice = hasDiscount ? 
    basketTotal * 0.85 : 
    basketTotal

    totalPriceEl.textContent = finalPrice.toFixed(2)

    // Discount message

    if (hasDiscount) {
        discountMessage.classList.remove('hidden')
    } else {
        discountMessage.classList.add('hidden')
    }
}

function handleAddingItems(orderID){
    
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

function handleRemoveClick(itemId) {
    const selectedItem = basketArr.findIndex(item => item.id === Number(itemId))

    if (selectedItem !== -1) {
        basketArr.splice(selectedItem, 1)
        updateTotalPrice()
        renderBasket()
    }

    if (basketArr.length === 0) {
        document.getElementById('menuOrder').classList.add('hidden')
}
}

function handleModal(){
    modal.classList.add("show")
}

function handlePayment(){
    modal.classList.remove("show")
    orderCompletedEl.classList.remove("hidden")
    document.getElementById('menuOrder').classList.add('hidden')

}


paymentForm.addEventListener('submit', function(e) {
    e.preventDefault()

    handlePayment()
    handleNamePayment()
    handleRateUs()
})

function handleNamePayment() {
    payerName.textContent = document.getElementById('name').value
}

function handleRateUs() {
    ratingSection.classList.remove('hidden')

}

function handleStarRating(rating) {
    selectedRating = Number(rating)

    const stars = document.querySelectorAll('[data-rating]')

    stars.forEach(function(star) {
        const starNumber = Number(star.dataset.rating)

        if (starNumber <= selectedRating) {
            star.style.color = "#E9AC25"
            star.classList.remove('fa-regular')
            star.classList.add('fa-solid')
            
        } else {
            star.style.color = "black"
            star.classList.remove('fa-solid')
            star.classList.add('fa-regular')
        }
    })
}

function handleSubmit() {
    reviewConfirmationEl.classList.remove('hidden')
    ratingSection.classList.add('hidden')
    orderCompletedEl.classList.add('hidden')
}

