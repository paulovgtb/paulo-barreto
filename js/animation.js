const saibaMais = document.getElementById('saiba-mais');
const setaHome = document.getElementById('seta-home');

saibaMais.addEventListener('mouseover', () => {
    setaHome.classList.add('desce-sobe');
});

saibaMais.addEventListener('mouseout', () => {
    setaHome.classList.remove('desce-sobe');
});