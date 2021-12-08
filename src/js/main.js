const container = document.querySelector('.stages__container');
const header = document.querySelector('.header').clientHeight;
const stages = document.querySelectorAll('.section-stage');
const progress = document.querySelectorAll('.stages__item');

document.querySelectorAll('.stages [href^="#"], .main-block [href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		let hash = this.getAttribute('href');
		let target = document.querySelector(hash);
		let headerOffset = header;
		let elementPosition = target.offsetTop;
		let offsetPosition = elementPosition - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	});
});


window.addEventListener('scroll', () => {
	stages.forEach((stage, i) => {
		let perc = (header - stage.getBoundingClientRect().top + 10) / stage.clientHeight * 100;
		progress[i].style.setProperty('--progress', perc);
		if (getComputedStyle(progress[i]).getPropertyValue('--progress') > 0) {
			progress[i].classList.add('stages__item_active');
		}
		else {
			progress[i].classList.remove('stages__item_active');
		}
	});
});