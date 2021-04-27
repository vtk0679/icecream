(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-map-open]'),
    closeModalBtn: document.querySelector('[data-modal-map-close]'),
    modal: document.querySelector('[data-modal-map]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
    const refs = {
        openModalBtns: document.querySelectorAll('[data-modal-franchise-open]'),
        closeModalBtn: document.querySelector('[data-modal-franchise-close]'),
        modal: document.querySelector('[data-modal-franchise]'),
    };

    refs.openModalBtns.forEach((button) => {
        button.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }
})();

(() => {
    const refs = {
        openModalBtns: document.querySelectorAll('[data-modal-team-open]'),
        closeModalBtn: document.querySelector('[data-modal-team-close]'),
        closeModalBtnAll: document.querySelector('[data-close-all]'),
        closeModalBtnContact: document.querySelector('[data-close-contact]'),
        closeModalBtnAbout: document.querySelector('[data-close-about]'),
        closeModalBtnHome: document.querySelector('[data-close-home]'),
        closeModalBtnProducts: document.querySelector('[data-close-products]'),
        closeModalBtnHow: document.querySelector('[data-close-how]'),
        closeModalBtnGallery: document.querySelector('[data-close-gallery]'),
        closeModalBtnAdvantages: document.querySelector('[data-close-advantages]'),
        closeModalBtnFooter: document.querySelector('[data-close-footer]'),
        modal: document.querySelector('[data-modal-team]'),
    };

    refs.openModalBtns.forEach((button) => {
        button.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtnAll.addEventListener('click', toggleModal);
    refs.closeModalBtnContact.addEventListener('click', toggleModal);
    refs.closeModalBtnAbout.addEventListener('click', toggleModal);
    refs.closeModalBtnHome.addEventListener('click', toggleModal);
    refs.closeModalBtnProducts.addEventListener('click', toggleModal);
    refs.closeModalBtnHow.addEventListener('click', toggleModal);
    refs.closeModalBtnGallery.addEventListener('click', toggleModal);
    refs.closeModalBtnAdvantages.addEventListener('click', toggleModal);
    refs.closeModalBtnFooter.addEventListener('click', toggleModal);

    function toggleModal() {
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }
})();
