$(document).ready(()=>{

    //Mostrar  y ocultar boton "Volver Arriba"
let btnVolverArriba = $('#btnVolverArriba');

$(window).on('scroll', ()=>{

    // Altura de top de la seccion proyectos
    var proyectoOffsetTop = $('#proyectos').offset().top;
    // Calcula la Altura del Scroll en la Ventana
    var scrollTop = $(window).scrollTop();


    if(scrollTop >= proyectoOffsetTop) {
        btnVolverArriba.css('margin-right', 0) //Se mostrara el fixed header
    } else if (scrollTop <= proyectoOffsetTop/2) {
        btnVolverArriba.css('margin-right', '-60px') // Se ocultara el fixed header
    }

});

})
