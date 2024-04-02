function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src  = 'assets/img/list.svg';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = 'assets/img/close.svg';
    }
}


// Função para rolar suavemente para a seção correspondente
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
