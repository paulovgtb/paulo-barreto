const saibaMais = document.getElementById('saiba-mais');
const setaHome = document.getElementById('seta-home');

saibaMais.addEventListener('mouseover', () => {
    setaHome.classList.add('desce-sobe');
});

saibaMais.addEventListener('mouseout', () => {
    setaHome.classList.remove('desce-sobe');
});

const navItems = document.querySelectorAll('.barra-navegacao .nav-links');
const saibaMaisLink = document.querySelector('.saiba-mais-links');

function scrollToIdOnClick() {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget);
    scrollToPosition(to);
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('Href');
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
    window.scroll ({
        top: to,
        behavior: "smooth",
    })
}

navItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

saibaMaisLink.addEventListener('click', scrollToIdOnClick);