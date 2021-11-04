
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    console.log(titulos.first());

    $('.featured-item a').addClass('btn btn-success stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary"> Novo</span>')
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

   // Callback
   /*$('.featured-item:nth(1)').
      hide(2000, function(){
      // este é o callback
      alert($(this).find('h4').text() + ' esgotado')
   })
   .show(2000, function(){
      alert($(this).find('h4').text() + 'em estoque')
   })*/

   // Animações
   const duracao = 1000 // equivalente a 1 segundo
   $('.featured-item:nth(0)')
      .hide(duracao)
      .show(duracao)
      .fadeOut(duracao)
      .fadeIn(duracao)
      .toggle(duracao)
      .toggle(duracao)

   $('#form-submit').on('click', function(e){

      e.preventDefault()
      
      if($('#email').val() != ''){
         
         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, duracao, function(){
            alert($(this).val())
         })
      }

   });

   // Ouvinte de eventos .nav-modal-open
   $('.nav-modal-open').on('click', function(e){
      
      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.myModal($('#modelId'))

      myModal.show()
   })
     
     
     







})
