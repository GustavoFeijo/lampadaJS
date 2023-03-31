const turnon = document.getElementById ('turnon');
const turnoff = document.getElementById ('turnoff');
const lamp = document.getElementById ('lamp');

function broken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampon () {
    if (!broken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampoff () {
    if (!broken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampbroken () {
    lamp.src = './img/quebrada.jpg';
}


turnon.addEventListener('click', lampon );

turnoff.addEventListener ('click', lampoff);

lamp.addEventListener('mouseover', lampon);

lamp.addEventListener('mouseleave', lampoff);

lamp.addEventListener('dblclick', lampbroken);