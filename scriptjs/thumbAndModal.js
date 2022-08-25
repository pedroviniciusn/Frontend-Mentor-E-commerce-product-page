const ThumbAndModal = {
    init: function() {

        this.cacheSelectors()
        this.bindEvents()

    },

    cacheSelectors: function() {
        this.productPhotos =  document.querySelector('#productPhotos')
        this.thumb = document.querySelector('#thumb')

        this.modal = document.querySelector('#modal')
        this.thumbModal = document.querySelector('#thumbModal')

        this.productPhotosModal = document.querySelector('#productPhotosModal')
        this.closeModalButton = document.querySelector('#closeModalButton')
    },
    
    bindEvents: function() {
        const Self = this

        //Thumb

        Array.from(thumb.children).forEach(function(img) {
            img.onclick = () => Self.Events.handleImageClick(img)
            img.addEventListener('click', function() {
                Array.from(thumb.children).forEach(img => img.classList.remove('active'))
                this.classList.add('active')
            })
        })

        //Modal

        productPhotos.children[0].onclick = () => Self.Events.handleOpenModal()
        closeModalButton.onclick = () => Self.Events.handleCloseModal()

        Array.from(thumbModal.children).forEach( function(img) {
            img.onclick = () => Self.Events.handleImageModalClick(img)
            img.addEventListener('click', function() {
                Array.from(thumbModal.children).forEach(img => img.classList.remove('activeModal'))
                this.classList.add('activeModal')
            })
        })
        
    },

   

    Events: {
        handleImageClick: function(img) {

            let imgProduct = productPhotos.children[0]
            
            switch (img.id) {
                case 'imageId1': 
                imgProduct.src = `/images/image-product-1.jpg`
                break;

                case 'imageId2': 
                imgProduct.src = `/images/image-product-2.jpg`
                break;

                case 'imageId3': 
                imgProduct.src = `/images/image-product-3.jpg`
                break;

                case 'imageId4': 
                imgProduct.src = `/images/image-product-4.jpg`
                break;
            }
              
        },

        handleImageModalClick: function(img) {
            let imgProductModal = productPhotosModal.children[0]
            
            switch (img.id) {
                case 'imageModalId1': 
                imgProductModal.src = `/images/image-product-1.jpg`
                break;

                case 'imageModalId2': 
                imgProductModal.src = `/images/image-product-2.jpg`
                break;

                case 'imageModalId3': 
                imgProductModal.src = `/images/image-product-3.jpg`
                break;

                case 'imageModalId4': 
                imgProductModal.src = `/images/image-product-4.jpg`
                break;
            }
        },

        handleOpenModal: function() {
            modal.classList.remove('hidden')
        },

        handleCloseModal: function() {
            modal.classList.add('hidden')
        },
    }
}

ThumbAndModal.init()
 