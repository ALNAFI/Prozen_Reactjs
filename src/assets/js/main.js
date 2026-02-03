(function ($) {
  'use strict';

  const $documentOn = $(document);
  const $windowOn = $(window);

  $(document).ready(function () {
    //>> Body Overlay Js Start <<//
    $('.body-overlay').on('click', function () {
      $('.offcanvas__area').removeClass('offcanvas-opened');
      $('.df-search-area').removeClass('opened');
      $('.body-overlay').removeClass('opened');
    });

    //>> Video Popup Start <<//
    $('.img-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });

    $('.video-popup').magnificPopup({
      type: 'iframe',
      callbacks: {},
    });


    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    if ($.fn.niceSelect) {
      $('select').niceSelect();
    }


    $documentOn.on('click', '#back-top', function () {
      $('html, body').animate({ scrollTop: 0 }, 1);
      return false;
    });
  }); // End Document Ready Function
})(jQuery); // End jQuery
