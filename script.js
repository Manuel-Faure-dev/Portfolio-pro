// Gestion du scrollTop
function scrollToTop() {
    document.body.scrollTop = 0 // Pour les navigateurs Chrome, Firefox, IE et Opera
    document.documentElement.scrollTop = 0 // Pour Safari
    console.log('test click ')
}

// Gestion du Dropdown

$('.dropdown-ul').hide()

let toggleMenu = true

$('.toggle-menu-span').on('click', function (e) {
    if (toggleMenu) {
        $('.dropdown-ul').show()
        $('.main').css('marginTop', '130px')
        $('.main').css('transition', '700ms ease-in-out')
        toggleMenu = false
        console.log('toggle menu', toggleMenu)
    } else {
        $('.dropdown-ul').hide()
        $('.main').css('marginTop', '0px')
        toggleMenu = true
        console.log('toggle menu', toggleMenu)
    }
})

$('.dropdown-ul a').on('click', function () {
    $('.dropdown-ul').hide()
    toggleMenu = true
    $('.main').css('marginTop', '0px')
    $('.dropdown-ul').hide()
    $('.toggle-menu-span').show()
    //console.log('toggle menu', toggleMenu)
})

// Gestion de la NavBar disparaît / apparaît au mouvement / au click navbBar-link

var prevScrollpos = scrollY
window.onscroll = function () {
    var currentScrollPos = scrollY
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.top = '0'
    } else {
        document.getElementById('header').style.top = '-82px'
    }
    prevScrollpos = currentScrollPos
}

// Ajoute une hauteur de 5em au click link navBar
const navBarLinks = document.querySelectorAll('.nav-item')

navBarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        //event.preventDefault() // Empêcher le comportement de clic par défaut

        const targetId = link.getAttribute('href').substring(1) // Récupérer l'identifiant de l'ancre
        const targetElement = document.getElementById(targetId) // Récupérer l'élément cible

        if (targetElement) {
            const offset =
                5 *
                parseFloat(getComputedStyle(document.documentElement).fontSize) // Calculer le décalage en pixels
            const offsetTop =
                targetElement.getBoundingClientRect().top + scrollY - offset
            window.scrollTo({ top: offsetTop, behavior: 'smooth' }) // Faire défiler la fenêtre jusqu'à l'ancre avec un décalage de 5em
        }
    })
})

// Gestion du submit contact form / reset du form au chargement de la page
const contactForm = document.querySelector('.decor')

window.addEventListener('load', () => {
    const inputs = contactForm.querySelectorAll(
        'input[type="text"], input[type="email"], textarea'
    )
    inputs.forEach((input) => (input.value = ''))
})
