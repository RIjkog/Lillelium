const burger = document.querySelector('.burger');
const closeBtn = document.querySelectorAll('.burger-close');
const nav = document.querySelector('.header__adaptive');

if (burger) {
	closeBtn.forEach(n => n.addEventListener('click', () => {
		document.body.classList.toggle('lock');
		burger.classList.toggle('burger_active');
		nav.classList.toggle('header__adaptive_active');
	}));
};

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(n => n.addEventListener('click', () => {
	burger.classList.remove('burger_active');
	nav.classList.remove('header__adaptive_active');
}));
