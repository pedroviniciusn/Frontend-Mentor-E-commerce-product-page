const Cart = {
    init: function() {
        
        this.cacheSelectors()
        this.bindEvents()

    },

    cacheSelectors: function() {
        this.openCartButton = document.querySelector('#iconCart')
        this.cart = document.querySelector('#cartContent')
        
    },

    bindEvents: function() {
        const Self = this

        this.openCartButton.onclick = () =>  Self.Events.handleOpenCart(this.cart)
    },

    Events: {
        handleOpenCart: function(cart) {
            console.log(cart.classList)
            cart.className == 'hiddenCart' ? cart.classList.add('cartContent') : cart.classList.remove('cartContent')
        }
    },
}

Cart.init()