$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
  });
  var reviewSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });
  $('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg'});

  var menuButton = $(".menu-button");
  menuButton.on("click", function() {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() { 
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
   }
   function closeModal(event) {
    event.preventDefault(); 
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
   }

   $(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
  //обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name must be at least 2 letterls long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Your phone number is required",
          minlength: "Your phone number must be at least 11 symbols long",
        },
      },
    });
  });
  $(".subscribe").validate({
      errorClass: "news__invalid",
      messages: {
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
      },
    });
  AOS.init();
  $(".map__img").hover(function(){
    $(".map__img").css("display", "none");
    $(".map__frame").css("display", "block");
  })

  $(".map__frame").mouseout(function(){
    $(".map__frame").css("display", "none");
    $(".map__img").css("display", "block");
  })

});