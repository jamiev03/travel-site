class mobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.events()
        // document.querySelector('.site-header__menu-icon').addEventListener('click', function() {
        //     alert('this is work yes?')
        // })
    }
    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        console.log('Potatoes are fun!');
    }
}

export default mobileMenu;