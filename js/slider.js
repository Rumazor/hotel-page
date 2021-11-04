$(document).ready(()=>{

var slider = $('#slider');
var btnAnterior = $('#btnAnterior');
var btnSiguiente = $('#btnSiguiente');

// Pasare el slider al primer lugar

$('#slider .slide:last').insertBefore('#slider .slide:first');

//Margen negativo para que el primer slide se muestre

slider.css('margin-left', '-27%');

// Funcion para que el slide se mueva a la derecha

function moverDerecha() {
    if (!slider.is(':animated')) {
        slider.animate({
            marginLeft: '-82.7%'
        }, 700, function(){
            $('#slider .slide:first').insertAfter('#slider .slide:last');
            slider.css('margin-left', '-30.7%')
            resetInterval()
        }); 
    }
}

btnSiguiente.on('click', moverDerecha);


function moverIzquierda() {
    if (!slider.is(':animated')) {
        $('#slider .slide:last').insertBefore('#slider .slide:first');
    slider.css('margin-left', '-82.7%');
    slider.animate({
        marginLeft: '-30.7%'
    }, 700, function(){
        resetInterval();
    });
    }
}


btnAnterior.on('click', moverIzquierda);



var intervalo = setInterval(moverDerecha, 3000);


function resetInterval(){
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha, 3000);
}

});

