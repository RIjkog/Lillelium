const modalBtns = document.querySelectorAll('.button-modal');
const modalClose = document.querySelector('.modal__close');
const modalContainer = document.querySelector('.modal__container');
const modal = document.querySelector('.modal');

modalBtns.forEach(function (btn) {
	btn.addEventListener('click', () => {
		if (!burger.classList.contains('burger_active')) {
			document.body.classList.toggle('lock');
		}
		modal.classList.toggle('modal_active');

	})
});

modalClose.addEventListener('click', () => {
	if (!burger.classList.contains('burger_active')) {
		document.body.classList.remove('lock');
	}
	modal.classList.remove('modal_active');
});

modal.addEventListener('click', (e) => {
	if (e.target == modalContainer) {
		if (!burger.classList.contains('burger_active')) {
			document.body.classList.remove('lock');
		}
		modal.classList.remove('modal_active');
	}
});