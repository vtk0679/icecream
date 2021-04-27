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
        modal: document.querySelector('[data-modal-team]'),
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
