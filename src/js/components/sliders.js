const certif = document.querySelector('.certificates__swiper');
const wrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');

let swiperCertif = undefined;


const mobileSlider = () => {
	if (window.innerWidth <= 992 && swiperCertif == undefined) {
		swiperCertif = new Swiper(certif, {
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 100,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
		});

	}
	else if (window.innerWidth > 992 && swiperCertif != undefined) {
		swiperCertif.destroy();
		swiperCertif = undefined;
	}
};
window.addEventListener('load', mobileSlider);
window.addEventListener('resize', mobileSlider);