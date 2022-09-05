const Cart = {
    product: {
        name: 'Fall Limited Edition Sneakers',
        picture: 'image-product-1-thumbnail.jpg',
        price: 125.00,
    },

    cartContent: [],

    init: function() {
        
        this.cacheSelectors()
        this.bindEvents()
        this.getStoraged()
        this.checkCart()

    },

    cacheSelectors: function() {
        this.cart = document.querySelector('#cartContent')
        this.openCartButton = document.querySelector('#iconCart')
        
        this.iconMinus = document.querySelector('#iconMinus')
        this.buttonAddToCart = document.querySelector('#buttonAddToCart')
        this.iconPlus = document.querySelector('#iconPlus')
        this.buttonDelete = document.getElementById('deleteIcon')
        this.itemQuantity = document.querySelector('#itemQuantity').innerText
    },

    bindEvents: function() {
        const Self = this

        this.openCartButton.onclick = () =>  Self.Events.handleOpenCart(this.cart)

        let element = false
        window.n = 0

        this.iconMinus.onclick = () => Self.Events.changeQuantity(element == true)
        this.iconPlus.onclick = () => Self.Events.changeQuantity(element == false)

        this.buttonAddToCart.onclick = () => Self.Events.handleAddToCart()

        if(this.buttonDelete) {
            this.buttonDelete.onclick = () => Self.Events.handleDeleteItems()
        }
    },

    getStoraged: function() {
        const productsInCart = localStorage.getItem('items')

        Cart.cartContent = JSON.parse(productsInCart)
    },

    checkCart: function() {

        if(Cart.cartContent === null || Cart.cartContent.length === 0) {
            this.cart.innerHTML = `
            <h2>Cart</h2>
            <span class="messageCart">Your cart is empty.</span>
            `
            
        } else {
            this.calculateValue()
        }

        this.cacheSelectors()
        this.bindEvents()

    },

    calculateValue: function() {

        if(Cart.cartContent) {
            let itemQuantityInCart = Cart.cartContent.length - 1
            let item = Cart.cartContent[1]
            let result = itemQuantityInCart * item.price

            this.cart.innerHTML = `
                    <h2>Cart</h2>
                    <div class="productSummary">
                    <img src="/images/image-product-1-thumbnail.jpg" alt="item Cart" class="productCartImage">
                    <div class="title">
                    <p>${item.name}</p>
                    <span>${item.price.toLocaleString('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})} x ${itemQuantityInCart} 
                    <strong>${result.toLocaleString('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</strong></span>
                    </div>
                    <img src="/images/icon-delete.svg" alt="delete item" class="deleteIcon" id="deleteIcon">
                    </div>
                    <button class="buttonCheckout">Checkout</button>
                `
        }
        
    },

    Events: {
        handleOpenCart: function(cart) {
            cart.className == 'hiddenCart' ? cart.classList.add('cartContent') : cart.classList.remove('cartContent')
        },

        changeQuantity: function(element) {
            
            if(element == true) {
                n++
                itemQuantity.innerText = n
            } else {
                n--
                if (n < 0) {
                    n++
                } else {
                    itemQuantity.innerText = n
                }
            }
            
        },

        handleAddToCart: function() {
            let quantity = parseInt(itemQuantity.innerText)
            let key = 'items'
            

            if(quantity == 0) {
                alert('There is no quantity selected')
            } else {
                if(localStorage.getItem('items') === null ) {           
                    localStorage.setItem(
                        key,
                        JSON.stringify([
                            JSON.parse(localStorage.getItem('items')),
                            Cart.product
                        ]))
                        for(let i = 0; i <= quantity -2; i++){
                            localStorage.setItem(
                                key,
                                JSON.stringify([
                                    ...JSON.parse(localStorage.getItem('items')),
                                    Cart.product
                                ])
                            )
                        }
                } else {
                    for(let i = 0; i <= quantity -1; i++){
                        localStorage.setItem(
                            key,
                            JSON.stringify([
                                ...JSON.parse(localStorage.getItem('items')),
                                Cart.product
                            ])
                        )
                    }
                }
                
            }

            Cart.cartContent = JSON.parse(localStorage.getItem('items'))

            n = 0
            quantity = 0
            itemQuantity.innerText = quantity
            
            Cart.getStoraged()
            Cart.checkCart()
        },

        handleDeleteItems: function() {
            localStorage.removeItem('items')
            Cart.getStoraged()
            Cart.checkCart()   
        }
    },
}

Cart.init()