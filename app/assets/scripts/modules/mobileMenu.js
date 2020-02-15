class mobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__menu-content')
        this.events()
        // document.querySelector('.site-header__menu-icon').addEventListener('click', function() {
        //     alert('this is work yes?')
        // })
    }
    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('site-header__menu-content--is-visible')
    }
}

export default mobileMenu;