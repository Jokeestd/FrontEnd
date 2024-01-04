
function celebrar() {

    const subir = document.querySelector('header');
    subir.scrollIntoView({ behavior: 'smooth' });

    const title = document.querySelector('h1');
    const time= 30;

    for (let i=0; i< time; i++) {
        setTimeout(() => {
            title.textContent = '¡Feliz 2024!';
            title.style.backgroundColor = colorRandom();
            title.style.color = colorRandom();
            title.style.fontSize = fuenteRandom();
        }, i*300);
    }
    
    //volver a titulo anterior
    setTimeout(() => {
        title.textContent = "Año Nuevo 2024";
        title.style.backgroundColor = '';
        title.style.color = '';
        title.style.fontSize = '';
    }, time*300);
}

function colorRandom() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function fuenteRandom() {
    return Math.floor(Math.random() * 30) + 25 + 'px';
}
