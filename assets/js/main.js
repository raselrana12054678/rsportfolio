(function($) {
    "use-strict"

    // preloader js start 
    var windowOn = $(window);
    windowOn.on('load', function() {
      $("#loading").delay(3000).fadeOut(500);
      $("#loading").fadeOut(5000);
    })

    // sticky header start
    windowOn.on('scroll', function() {
      var scroll = windowOn.scrollTop();
      if (scroll < 100){  
          $('#rs-header-sticky').removeClass("header-sticky");
        }
        else{
          $('#rs-header-sticky').addClass("header-sticky");
        }
      });
    // offcanvas menu js  
    $(".rs-offcanvas-toggle").on('click', function(){
      $(".rs-offcanvas").addClass("rs-offcanvas-open");
      $(".rs-offcanvas-overlay").addClass("rs-offcanvas-overlay-open");
    });
    $(".rs-offcanvas-close-toggle,.rs-offcanvas-overlay").on('click', function(){
      $(".rs-offcanvas").removeClass("rs-offcanvas-open");
      $(".rs-offcanvas-overlay").removeClass("rs-offcanvas-overlay-open");
    });

    //<=== mobile menu ===>
      var rsMenuWrap = $('.rs-mobile-menu-active > ul').clone();
    var rsSideMenu = $('.rs-offcanvas-menu nav');
    rsSideMenu.append(rsMenuWrap);
    if ($(rsSideMenu).find('.sub-menu, .rs-mega-menu').length != 0) {
      $(rsSideMenu).find('.sub-menu, .rs-mega-menu').parent().append('<button class="rs-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.rs-offcanvas-menu nav > ul > li button.rs-menu-close, .rs-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
      console.log(e);
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu, .rs-mega-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu, .rs-mega-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    });

    //<===  data-bg-image ===>
    $("[data-background]").each(function (){
        $(this).css("background-image", "url("+ $(this).attr("data-background") +  ")");
    });
    //<===  data-bg-image ===>
    $("[data-bg-color]").each(function (){
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    //<=== magnific popup ===>
    $('.popup-image').magnificPopup({
      type: 'image'
      // other options
    });
    $('.popup-video').magnificPopup({
      type: 'iframe'
      // other options
    });

    // testimonial js
    var swiper = new Swiper(".mySwiper-active", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".rstestimonial__swiper-button-next",
          prevEl: ".rstestimonial__swiper-button-prev",
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
        },
      });

      var $grid = $('.grid').isotope({
        // options
      } );
      // filter items on button click
      $('.rsproject__filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue })
      });

      $('.rsproject__filter button').on( 'click', function (event) {
        $(this).addClass('active');
       $(this).siblings('.active').removeClass('active');
       event.preventDefault();
      });

      // wow js start 
      new WOW().init();


})(jQuery);

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    })
});