import { menuArray } from "./data.js"

let orderArray = []
const modal = document.getElementById('payment-modal')
const paymentForm = document.getElementById('payment-form')

document.addEventListener('click',function(e){
    if(e.target.dataset.addItem) {
        handleAddItemToCartClick(e.target.dataset.addItem)
    }
    else if(e.target.dataset.removeItem) {
        handleRemoveItemFromCartClick(e.target.dataset.removeItem)
    }
    else if(e.target.id === 'complete-order') {
        handleCompleteOrderClick()
    }

})

paymentForm.addEventListener('submit',function(e) {
    e.preventDefault()
    handlePayButtonClick(e)   
})

function handleAddItemToCartClick(itemId){
    orderArray.push(menuArray.filter(menuItem => menuItem.id == itemId)[0])
    renderOrderSection()
}

function handleRemoveItemFromCartClick(itemId){
    orderArray.splice(itemId, 1)
    orderArray.length != 0 ? renderOrderSection(orderArray) : document.getElementById('order').innerHTML = ''
}

function handleCompleteOrderClick(){
    modal.style.display = 'block'
}

function handlePayButtonClick(e){
    const formData = new FormData(e.target)
    const name = formData.get('name')
    modal.style.display = 'none'
    orderArray = []
    paymentForm.reset()
    getOrderConfirmationHTML(name)
}

function getMenuHTML(menuArray) {
    const menuHTML = menuArray.map(item =>
        `<div class="menu-item">
            <p class="menu-item-img">${item.emoji}</p>
            <div class="menu-item-description">
                <p class="menu-item-name">${item.name}</p>
                <p class="menu-item-ingredients">${item.ingredients}</p>
                <p class="menu-item-price">$${item.price}</p>
            </div>
            <button class="add-menu-item" data-add-item="${item.id}">+</button>
        </div>`
    ).join('')
    return menuHTML
}

function renderMenu(){
    document.getElementById('menu').innerHTML = getMenuHTML(menuArray)
}

renderMenu()

function getOrderHTML(orderArray) {
    const orderHTML = orderArray.map((item, index) =>
        `<div class="order-item">
            <p class="order-item-name">${item.name}</p>
            <span class="remove-area"><button class="remove-order-item" data-remove-item="${index}">remove</button></span>
            <p class="order-item-price">$${item.price}</p>
        </div>`
    ).join('')
    return orderHTML
}

function getOrderTotalHTML(orderArray) {
     const orderTotalPrice = orderArray.reduce((total, currentItem) => total + currentItem.price, 0)

     const orderTotal = 
        `<div class="order-total">
            <p class="order-total-label">Total price:</p>
            <p class="order-total-price">$${orderTotalPrice}</p>
        </div>
        <button id="complete-order" class="primary-btn">Complete Order</button>`
     return orderTotal
}

function renderOrderSection(){
    const orderSection = document.getElementById('order')
    const orderTitle = `<h1>Your order</h1>`

    orderSection.innerHTML = 
        orderTitle 
        + getOrderHTML(orderArray) 
        + getOrderTotalHTML(orderArray)
}

function getOrderConfirmationHTML(name){
    document.getElementById('order').innerHTML = 
        `<p class="order-confirmation">
            Thanks, ${name}! Your order is on its way!
        </p>`
}