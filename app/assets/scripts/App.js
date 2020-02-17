import '../styles/style.css'
import mobileMenu from './modules/mobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/sticky-header';

let stickyHeader = new StickyHeader();
let MobileMenu = new mobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if (typeof modal == 'undefined') {
            import('./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log('There was a problemo'))
        } else {
            modal.openThenModal()
        }
    })
})

if(module.hot) {
    module.hot.accept()
};

