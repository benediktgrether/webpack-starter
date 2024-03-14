import "../scss/main.scss";
import "../scss/critical.scss";
import { initSwiper } from "./components/widget-swiper";
import { initNavigationOnScroll } from "./components/navigation-on-scroll";
import { initAccordion } from "./components/accordion";
import { customPostFilterInit } from "./components/custom-post-filter";

// import { scroll } from "./components/scroll";
window.addEventListener("load", function () {
	console.log("page Loaded");
	initNavigationOnScroll();
	initSwiper();
	initAccordion();
	customPostFilterInit();
});
// scroll();