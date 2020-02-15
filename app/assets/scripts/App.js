import '../styles/style.css'
import mobileMenu from './modules/mobileMenu';

let MobileMenu = new mobileMenu();

if(module.hot) {
    module.hot.accept()
};

