import '../styles/style.css';
import 'lazysizes';
import mobileMenu from './modules/mobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/sticky-header';

// React related code goes here
import React from 'react';
import ReactDOM from 'react-dom';


function MyAmazingComponent() {
    return (
        <div>
            <h1 className="section-title section-title--blue">This is the React component</h1>
            <p>Using react in an already made project is not hard at all!</p>
        </div>
    )
}

ReactDOM.render(<MyAmazingComponent />, document.querySelector('#my-react-example'))




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

