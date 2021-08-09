$(function() {
  $('.header__button-menu').click(function() {
    $('body').addClass('overflow-hidden');
    $('.header__mobile').fadeIn();
  });

  $('.header__mobile-close').click(function() {
    $('body').removeClass('overflow-hidden');
    $('.header__mobile').fadeOut();
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100){
      $('header').addClass('scrolled');        
      $('.menu').addClass('menu_scrolled'); 
  }else{
      $('header').removeClass("scrolled");   
      $('.menu').removeClass('menu_scrolled');  
    }
}); 