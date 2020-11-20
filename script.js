window.addEventListener('scroll', () => {
    var nav = document.querySelector('nav');
    nav.classList.remove('mt-3', window.scrollY > 0)
    nav.classList.toggle('sticky', window.scrollY > 0)
})


ScrollOut({
            targets: '.reveal, .imgreveal, .sideleft, .between, .sideright'
        })