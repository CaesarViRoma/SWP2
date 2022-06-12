const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal, button.id)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal, content_id) {
    if (modal == null) return
    if (content_id == "modal1") {
        modal.innerHTML = `
      <div class="modal-header">
        <div class="title">Запись на службу</div>
      </div>
      <div class="modal-body">
      Если вы хотите помочь капитану Рексу и его бойцам в Войне клонов против Альянса сепаратистов, вы можете записаться на службу Великой армии Галактической Республики, прибыв по адресу: Галактическая Республика, планета Корусант, город Корусант, пункты добровольческой службы 15-17.
    
    `
    }
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}