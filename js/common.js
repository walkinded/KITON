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


$(document).ready(function($) {
  $('.tab_content').hide();
  $('.tab_content:first').show();
  $('.tabs li:first').addClass('active');
  $('.tabs li').click(function(event) {
    event.preventDefault();
    $('.tab_content').slick('refresh');
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});

$('.tab_content').slick({
  arrows: true,
  slidesToShow: 4,
  rows: 1,
  speed: 1000,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1601,
      settings: {
        arrows: true,
        slidesToShow: 3,
        // speed: 1000,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        slidesToShow: 2,
        // speed: 1000,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        // speed: 1000,
        arrows: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        // speed: 1000,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        // speed: 1000,
        arrows: false,
        dots: true,
      }
    }
    
  ]
});