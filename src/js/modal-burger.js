(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-burger-open]'),
        closeModalBtn: document.querySelector('[data-modal-burger-close]'),
        closeModalBtnHome: document.querySelector('[data-modal-burger-home]'),
        closeModalBtnAbout: document.querySelector('[data-modal-burger-about]'),
        closeModalBtnHow: document.querySelector('[data-modal-burger-how]'),
        closeModalBtnProducts: document.querySelector('[data-modal-burger-products]'),
        closeModalBtnContact: document.querySelector('[data-modal-burger-contact]'),
        modal: document.querySelector('[data-modal-burger]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtnHome.addEventListener('click', toggleModal);
    refs.closeModalBtnAbout.addEventListener('click', toggleModal);
    refs.closeModalBtnHow.addEventListener('click', toggleModal);
    refs.closeModalBtnProducts.addEventListener('click', toggleModal);
    refs.closeModalBtnContact.addEventListener('click', toggleModal);
    
    function toggleModal() {
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }
})();