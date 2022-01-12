
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
   $('.featured-item:nth(1)').
      hide(1000, function(){
      // este é o callback
      alert($(this).find('h4').text() + ' esgotado')
   })
   .show(10000, function(){
      alert($(this).find('h4').text() + ' em estoque')
   })

   // Animações
   const duracao = 1000 // equivalente a 1 segundo
   $('.featured-item:nth(0)')
      .hide(duracao)
      .show(duracao)
      .fadeOut(duracao)
      .fadeIn(duracao)

   $('#form-submit').on('click', function(e){

      e.preventDefault()
      
      if( $('#email').val() != ''){
         
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

      let myModal = new bootstrap.Modal($('#modelId'))

      myModal.show()
   })

   function validate( elem ){
      if( elem.val() == '') {

         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } else {
         $(this).submit()  
      }

   })

   $('body').on('blur', '#nome', function(){
      validate($(this))
      $(this.value.match('^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$'))
   })

   $('body').on('blur', '#email', function(){
      validate($(this))
      $(this.value.match('^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$'))
   })


   $('body').on('focus', '#date', function(){
      $(this).datepicker()
   })

   $('body').on('blur', '#date', function(){
      validate($(this))
      $(this).mask('00/00/0000');
   }) 

   $('body').on('blur', '#time', function(){
      validate($(this))
      $(this).mask('00:00');
      $(this.value.match('^\d{2}\:\d{2}$'))
   })

   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000');
      $(this.value.match('^\d{5}\-\d{3}$'))
   })

   $('body').on('blur', '#phone', function(){
      validate($(this))
      $(this).mask('(00) 00000-0000');
      $(this.value.match('^\d{2}\\d{5}\-\d{4}$'))
   })

   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $(this).mask('000.000.000-00');
      $(this.value.match('^\d{3}\.\d{3}\.\d{3}\-\d{2}$'))
   })
     
     







})

