const button = document.querySelector('.main-content > .btn')
button.addEventListener('click', () => showModal('.modal-outer'))



function showModal(modalClassName) {
	const modal = document.querySelector(modalClassName)
	modal.classList.remove('hidden')
	closeModal(modal)
}

function closeModal(modal) {
	modal.addEventListener('click', (e) => {
		if(e.target.className === 'modal-outer' || e.target.className === 'exit') {
			modal.classList.add('hidden')
		}
	})
}