/* ==================== mobile menu ==================== */ 
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

/* ==================== scrolled header ==================== */ 
$(window).scroll(function() {
  if ($(this).scrollTop() > 100){
      $('header').addClass('scrolled');        
      $('.menu').addClass('menu_scrolled'); 
  }else{
      $('header').removeClass("scrolled");   
      $('.menu').removeClass('menu_scrolled');  
    }
}); 

$('.header_bg-color').addClass('original').clone().insertAfter('header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}


/* ==================== libs ==================== */ 
$("input[type=tel]").mask("+7(999)999-99-99");
$(".fancybox").fancybox();


/* ==================== to up scroller ==================== */ 
$(document).ready(function(){   
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('#scroller').fadeIn();
      } else {
          $('#scroller').fadeOut();
      }
  });
  $('#scroller').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 400);
      return false;
  });
});

/* ==================== tabs ==================== */
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

/* ==================== slick slider ==================== */
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

$('.catalog-slider__body').slick({
  arrows: true,
  slidesToShow: 3,
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



/* ==================== accordeon ==================== */

$(document).ready(function() {
  $('#accordion .accordion__wrap .accordion__head').on('click', function(){
    $(this).closest('#accordion').find('.accordion__body').not($(this).next()).slideUp(500);
    $(this).closest('#accordion').find('.accordion__head i').not($(this).find('i')).removeClass('rotate');
    $(this).siblings('.accordion__body').slideToggle(500);
    $(this).find('i').toggleClass('rotate');
  });
});
