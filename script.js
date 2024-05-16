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
