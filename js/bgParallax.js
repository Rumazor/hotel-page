$(document).ready(function(){


    $(window).on('scroll', function(){

        var contacto = $('#contacto');

        if($(window).scrollTop() >= contacto.offset().top - contacto.outerHeight()){

            var posicion = -($(window).scrollTop() - contacto.offset().top)*.10
            
            contacto.css('background-position', '0 '+posicion+'px');
        }

    })

});