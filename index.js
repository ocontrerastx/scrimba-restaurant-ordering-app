import { menuArray } from "./data.js"

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

document.addEventListener('click',function(e){
    if(e.target.dataset.addItem) {
        handleAddItemToCartClick(e.target.dataset.addItem)
    }
})

function handleAddItemToCartClick(itemId){
    console.log(itemId)
}
