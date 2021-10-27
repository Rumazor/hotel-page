$(document).ready(()=>{


let banner = $('#banner');

//Altura dinamica para el banner
function alturaBanner(){
    var vpaltura = $(window).height();
    banner.css('height', vpaltura);
}
alturaBanner();

// Respetara el tamaño del banner independientemente de la altura de la ventana
$(window).resize(alturaBanner);

})