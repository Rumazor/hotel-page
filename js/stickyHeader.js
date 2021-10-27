$(document).ready(()=> {

let fixedHeader = $('#fixedHeader');

$(window).on('scroll', ()=>{

    // Altura de top de la seccion proyectos
    var proyectoOffsetTop = $('#proyectos').offset().top;
    // Calcula la Altura del Scroll en la Ventana
    var scrollTop = $(window).scrollTop();


    if(scrollTop >= proyectoOffsetTop) {
        fixedHeader.css('margin-top', 0) //Se mostrara el fixed header
    } else if (scrollTop <= proyectoOffsetTop/2) {
        fixedHeader.css('margin-top', '-68px') // Se ocultara el fixed header
    }

});









})