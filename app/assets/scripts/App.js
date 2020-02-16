import '../styles/style.css'
import mobileMenu from './modules/mobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';

let MobileMenu = new mobileMenu();
let revealOnScroll = new RevealOnScroll();

if(module.hot) {
    module.hot.accept()
};

