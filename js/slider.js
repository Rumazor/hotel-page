$(document).ready(()=>{

var slider = $('#slider');
var btnAnterior = $('#btnAnterior');
var btnSiguiente = $('#btnSiguiente');

// Pasare el slider al primer lugar

$('#slider .slide:last').insertBefore('#slider .slide:first');

//Margen negativo para que el primer slide se muestre

slider.css('margin-left', '-29%');

// Funcion para que el slide se mueva a la derecha

function moverDerecha() {
    slider.animate({
        marginLeft: '-84.7%'
    }, 700, function(){
        $('#slider .slide:first').insertAfter('#slider .slide:last');
        slider.css('margin-left', '-32.7%')
    });
}

btnSiguiente.on('click', moverDerecha);






});