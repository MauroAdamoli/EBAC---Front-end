
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    console.log(titulos.first());

    $('.featured-item a').addClass('btn btn-success stretch-link');

     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#fff',
            'background': '#067106',
            'font-weight': '100',
        });

     });

     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
     
     
     
     







})

function comprar() {
    alert("Compra efetuada!");
    alert("Continue em nosso site para ver mais opções!")
    window.location.href = "index.html";
}