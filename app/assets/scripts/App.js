import '../styles/style.css'
import mobileMenu from './modules/mobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';

let MobileMenu = new mobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

if(module.hot) {
    module.hot.accept()
};

