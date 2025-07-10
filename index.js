import { menuArray } from "./data.js"

const orderArray = []

document.addEventListener('click',function(e){
    if(e.target.dataset.addItem) {
        handleAddItemToCartClick(e.target.dataset.addItem)
    }
})

function handleAddItemToCartClick(itemId){
    orderArray.push(menuArray.filter(menuItem => menuItem.id == itemId)[0])
    renderOrderSection(orderArray)
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
    const orderHTML = orderArray.map(item =>
        `<div class="order-item">
            <p class="order-item-name">${item.name}</p>
            <p class="remove-menu-item">remove</p>
            <p class="order-item-price">$${item.price}</p>
        </div>`
    ).join('')
    return orderHTML
}

function getOrderTotalHTML(orderArray) {
     return orderArray.reduce((total, currentItem) => total + currentItem.price, 0)
}

function renderOrderSection(){
    const orderSection = document.getElementById('order')
    const orderTitle = `<h1>Your order</h1>`

    orderSection.innerHTML = 
        orderTitle 
        + getOrderHTML(orderArray) 
        + `<div class="order-total">
                <p class="order-total-label">Total price:</p>
                <p class="order-total-price">$${getOrderTotalHTML(orderArray)}</p>
            </div>
            <button id="complete-order">Complete Order</button>`
}