import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);

export function initSwiper() {
	const swiperItems = document.querySelectorAll("[data-swiper]");
	if (swiperItems) {
		swiperItems.forEach((swiperItem) => {
			const config = setConfig(swiperItem);
			setSwiper(swiperItem.getAttribute("data-swiper-id"), config);
		});
	}
}

function setSwiper(swiperID, config) {
	const swiper = new Swiper(
		document.querySelector(`.swiper-id-${swiperID}`),
		config
	);
}

function setConfig(swiperItem) {
	const getAutoplay = setAutoplay(swiperItem);
	const getPagination = setPagination(swiperItem);
	const getArrows = setArrows(swiperItem);
	const getSlidesPerView = setSlidesPerView(swiperItem);

	const config = {
		loop: swiperItem.getAttribute("data-swiper-loop"),
	};

	const mergeConfig = {
		...config,
		...getAutoplay,
		...getPagination,
		...getArrows,
		...getSlidesPerView,
	};

	return mergeConfig;
}

//TODO: Add for every attribute a condition to check if it is set or not and merge it into one config file
// https://stackoverflow.com/questions/73753190/change-settings-autoplay-effect-loop-of-swiper-js-settings-when-a-class-is-t/73891317#73891317?newreg=85ea82635d6f400090fe8279e79931e8

function setAutoplay(swiperItem) {
	let autoplayConfig = {};
	const autoplay = swiperItem.getAttribute("data-swiper-set-autoplay");
	if (autoplay) {
		return (autoplayConfig = {
			autoplay: {
				delay: swiperItem.getAttribute("data-swiper-autoplay"),
				disableOnInteraction: false,
			},
		});
	}
	return false;
}

function setPagination(swiperItem) {
	let paginationConfig = {};
	const pagination = swiperItem.getAttribute("data-swiper-pagination");
	if (pagination) {
		return (paginationConfig = {
			pagination: {
				el: `.swiper-pagination-id-${swiperItem.getAttribute(
					"data-swiper-id"
				)}`,
				clickable: true,
			},
		});
	}
	return false;
}

function setArrows(swiperItem) {
	let arrowsConfig = {};
	const arrows = swiperItem.getAttribute("data-swiper-arrows");
	if (arrows) {
		return (arrowsConfig = {
			navigation: {
				nextEl: `.swiper-button__next-id-${swiperItem.getAttribute(
					"data-swiper-id"
				)}`,
				prevEl: `.swiper-button__prev-id-${swiperItem.getAttribute(
					"data-swiper-id"
				)}`,
			},
		});
	}
	return false;
}

// TODO: Set slides per view, space between slides and breakpoints
function setSlidesPerView(swiperItem) {
	let slidesPerViewConfig = {};
	const slidesPerView = swiperItem.getAttribute(
		"data-swiper-slider-per-view"
	);

	if (slidesPerView) {
		return (slidesPerViewConfig = {
			slidesPerView: 1,
			spaceBetween: 16,
			breakpoints: {
				// when window width is >= 640px
				640: {
					slidesPerView: slidesPerView,
					spaceBetween: 96,
				},
			},
		});
	}
}

// function setSlidesPerView() {
// 	let slidesPerViewConfig = {};
// 	return (slidesPerViewConfig = {
// 		slidesPerView: 1,
// 		spaceBetween: 6,
// 		// Responsive breakpoints
// 		breakpoints: {
// 			// when window width is >= 320px
// 			// 320: {
// 			// slidesPerView: 1,
// 			// spaceBetween: 20
// 			// },
// 			// // when window width is >= 480px
// 			// 480: {
// 			// slidesPerView: 2,
// 			// spaceBetween: 6
// 			// },
// 			// when window width is >= 640px
// 			640: {
// 				slidesPerView: 3,
// 				spaceBetween: 6,
// 			},
// 		},
// 	});
// }
