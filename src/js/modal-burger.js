(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-burger-open]'),
        closeModalBtn: document.querySelector('[data-modal-burger-close]'),
        modal: document.querySelector('[data-modal-burger]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }
})();