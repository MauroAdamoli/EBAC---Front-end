
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    console.log(titulos.first());

    $('.featured-item a').addClass('btn btn-success stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    $('.featured-item:last h4').append('<span class="badge bg-secondary">Última peça</span>')
     
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
