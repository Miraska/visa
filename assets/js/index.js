
$(function() {


  // Header fixed
  let header = $("#header");
  let intro = $("#intro");
  let introH;
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let nav__icons = $("#nav__icons");
  let call__button = $("#call__button");
  let navToggle = $("#navToggle");
  let burger__item = $("#burger__item");
  let nav__link1 = $("#nav__link1");
  let nav__link2 = $("#nav__link2");
  let nav__link3 = $("#nav__link3");
  let nav__link4 = $("#nav__link4");
  let body = $("#body");


  $(window).on("scroll load resize", function() {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    }
    else {
      header.removeClass("fixed");
    }
  });
  console.log("Worked!");
  




  // Smoth Scroll
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");
    nav__icons.removeClass("show");
    call__button.removeClass("show");

    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 700);
  });



  // Nav Toggle
  navToggle.on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("show");
    nav__icons.toggleClass("show");
    call__button.toggleClass("show");
    burger__item.toggleClass('active');
    navToggle.toggleClass('active');
    body.toggleClass("lock");
  });

  // Nav Link
  nav__link1.on("click", function(event) {
    burger__item.removeClass('active');
    navToggle.removeClass('active');
    body.removeClass("lock");
  });

  nav__link2.on("click", function(event) {
    burger__item.removeClass('active');
    navToggle.removeClass('active');
    body.removeClass("lock");
  });

  nav__link3.on("click", function(event) {
    burger__item.removeClass('active');
    navToggle.removeClass('active');
    body.removeClass("lock");
  });

  nav__link4.on("click", function(event) {
    burger__item.removeClass('active');
    navToggle.removeClass('active');
    body.removeClass("lock");
  });


 


}); 


