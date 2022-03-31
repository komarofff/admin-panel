//open close mobile menu

mobileMenu()
window.addEventListener('resize', () => {
    mobileMenu()
})

function mobileMenu() {
    const windowSize = document.documentElement.clientWidth
    if (windowSize <= 992) {
        document.querySelector('.mobile-menu-start').removeEventListener('click', startHalfMenu)
        const mobileMenu = document.querySelector('.mobile-menu')
        mobileMenu.classList.remove('half-mobile-menu')
        mobileMenu.classList.remove('col-1')
        mobileMenu.classList.add('col-lg-2')
        mobileMenu.classList.add('col-xl-2')
        mobileMenu.classList.add('col-xxl-2')
        const mainSection = document.querySelector('#main-section')
        mainSection.classList.add('col-xxl-10')
        //mainSection.classList.add('col-xxl-11')
        //mainSection.classList.remove('grow-2')
        document.querySelector('.mobile-menu-start').addEventListener('click', startMobileMenu)
    }

    if (windowSize > 992) {
        if(document.querySelector('.mobile-menu').classList.contains('show-mobile-menu')){
            const mainSection = document.querySelector('#main-section')
            mainSection.classList.add('col-xxl-10')
            mainSection.classList.remove('col-xxl-11')
            //mainSection.classList.remove('grow-2')
        }
        setTimeout(()=>{
            document.querySelector('.mobile-menu-start').removeEventListener('click', startMobileMenu)
            document.querySelector('.mobile-menu').classList.remove('show-mobile-menu')
            document.querySelector('.black-background').classList.add('d-none')
        },200)


        document.querySelector('.mobile-menu-start').addEventListener('click', startHalfMenu)
    }
}

function halfMenu() {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('half-mobile-menu')
    mobileMenu.classList.toggle('col-xxl-2')
    mobileMenu.classList.toggle('col-1')
    mobileMenu.classList.toggle('col-lg-2')
    mobileMenu.classList.toggle('col-xl-2')

    const spans = mobileMenu.querySelectorAll('span')
    spans.forEach((el) => {
        el.classList.toggle('d-none')
    })
    const mainSection = document.querySelector('#main-section')
   // mainSection.classList.toggle('grow-2')
    //mainSection.classList.toggle('col-xxl-11')
    mainSection.classList.toggle('col-xxl-10')


}

function startMobileMenu(e) {
    e.stopImmediatePropagation()
    document.querySelector('.mobile-menu').classList.toggle('show-mobile-menu')
    document.querySelector('.black-background').classList.toggle('d-none')
}

function startHalfMenu(e) {
    e.stopImmediatePropagation()
    halfMenu()
}


