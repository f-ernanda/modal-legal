const modal = document.querySelector('.modal-outer')
const button = document.querySelector('.main-content > .btn')

button.addEventListener('click', () => {
	modal.classList.remove('hidden')
})