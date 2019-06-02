$(function(){

  $('.member-about').hide();

  $('.member-moto').click(function(){
    $(this).next().slideToggle({duration: 300});
  });

  $('.link').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top - 95)
    }, 500);
    return false;
  });

});
