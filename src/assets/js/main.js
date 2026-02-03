(function ($) {
  'use strict';

  const $documentOn = $(document);
  const $windowOn = $(window);

  $(document).ready(function () {
    // ===================== Offcanvas Toggle =====================
    $('.offcanvas-toggle').on('click', function () {
      $('.ht-offcanvas').addClass('ht-offcanvas-open');
      $('.ht-offcanvas-overlay').addClass('ht-offcanvas-overlay-open');
    });

    $('.ht-offcanvas-toggle-close, .ht-offcanvas-overlay').on('click', function () {
      $('.ht-offcanvas').removeClass('ht-offcanvas-open');
      $('.ht-offcanvas-overlay').removeClass('ht-offcanvas-overlay-open');
    });

    // ===================== Search Bar Toggle =====================
    var $searchBar = $('.ht-header-search-bar');

    // Open search bar
    $('.search-toggle').on('click', function () {
      $searchBar.addClass('open');
      $('.ht-offcanvas-overlay').addClass('active');
    });

    // Close via close button or overlay
    $('.ht-search-close, .ht-offcanvas-overlay').on('click', function () {
      $searchBar.removeClass('open');
      $('.ht-offcanvas-overlay').removeClass('active');
    });

    // Close when clicking outside the search bar
    $(document).on('click', function (e) {
      if ($searchBar.hasClass('open')) {
        if (!$(e.target).closest('.ht-header-search-bar, .search-toggle').length) {
          $searchBar.removeClass('open');
          $('.ht-offcanvas-overlay').removeClass('active');
        }
      }
    });

    // ===================== Clone Main Menu to Offcanvas =====================
    var htMenuWrap = $('.ht-mobile-menu-active > ul').clone();
    var htSideMenu = $('.ht-offcanvas-menu nav');
    htSideMenu.append(htMenuWrap);

    // ===================== Add Close Buttons to Submenus =====================
    htSideMenu
      .find('.sub-menu')
      .parent()
      .append('<button class="ht-menu-close"><i class="fas fa-chevron-right"></i></button>');

    // ===================== Handle Submenu Toggle =====================
    var sideMenuList = $(
      '.ht-offcanvas-menu nav > ul li.has-dropdown > a, .ht-offcanvas-menu nav > ul li button.ht-menu-close'
    );

    sideMenuList.on('click', function (e) {
      e.preventDefault();

      var submenu = $(this).siblings('.sub-menu');

      if (!$(this).parent().hasClass('active')) {
        // Open submenu
        $(this).parent().addClass('active');
        submenu.slideDown(300);
      } else {
        // Close submenu
        submenu.slideUp(300);
        $(this).parent().removeClass('active');
      }
    });

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

    //>> Counterup Start <<//
    $('.count').counterUp({
      delay: 15,
      time: 4000,
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
