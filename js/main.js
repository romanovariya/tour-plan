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
        onlyInViewport: false,
      },
  });
  var reviewSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
  });
  $('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpeg'});

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function() {
    console.log("clicked on menu");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });