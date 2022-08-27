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

        this.productPhotoModal = document.querySelector('#productPhotoModal')
        this.closeModalButton = document.querySelector('#closeModalButton')
        
    },
    
    bindEvents: function() {
        const Self = this


        //Thumb

        Array.from(thumb.children).forEach(function(img) {
            img.onclick = () => Self.Events.handleImageClick(img, thumb);
        })

        //Modal

        productPhotos.children[0].onclick = () => Self.Events.handleOpenModal()
        closeModalButton.onclick = () => Self.Events.handleCloseModal()

        Array.from(thumbModal.children).forEach(function(img) {
            img.onclick = () => Self.Events.handleImageModalClick(img, thumbModal);
        })
        
    },

   

    Events: {
        handleImageClick: function(img, thumb) {

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
            
            ThumbAndModal.Events.changeClassThumb(img, thumb)
              
        },

        handleImageModalClick: function(img, thumbModal) {

            let photoProductModal = productPhotoModal
            
            switch (img.id) {
                case 'imageModalId1': 
                photoProductModal.src = `/images/image-product-1.jpg`
                break;

                case 'imageModalId2': 
                photoProductModal.src = `/images/image-product-2.jpg`
                break;

                case 'imageModalId3': 
                photoProductModal.src = `/images/image-product-3.jpg`
                break;

                case 'imageModalId4': 
                photoProductModal.src = `/images/image-product-4.jpg`
                break;
            }

            ThumbAndModal.Events.changeClassThumbModal(img, thumbModal)
        },

        handleOpenModal: function() {
            modal.classList.remove('hidden')
        },

        handleCloseModal: function() {
            modal.classList.add('hidden')
        },

        changeClassThumb: function(img, thumb) {
            Array.from(thumb.children).forEach(img => img.classList.remove('active'))
                img.classList.add('active')
        },

        changeClassThumbModal: function(img,thumbModal) {
            Array.from(thumbModal.children).forEach(img => img.classList.remove('activeModal'))
                img.classList.add('activeModal')
        },
    }
}

ThumbAndModal.init()
 