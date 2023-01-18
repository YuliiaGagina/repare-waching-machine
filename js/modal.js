
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"  ),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    formEl: document.querySelector('.form'),
    backdropEl: document.querySelector('.backdrop'),
  };

  refs.backdropEl.addEventListener('click', (e)=>{
    if(e.target === e.currentTarget){
      refs.modal.classList.add("is-hidden");
    }
  })

  refs.openModalBtn.forEach(elem =>{
    elem.addEventListener("click", toggleModal)
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal(e) {
    
    refs.modal.classList.toggle("is-hidden");
  }
})();