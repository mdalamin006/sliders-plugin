// JavaScript code 
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
// var swiper = new Swiper(".mySwiper", {
//     lazy: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });



// jQurey Code
$(document).ready(function () {
    // Slick Slider
    $('.slider').slick({
     
        slidesToShow: 3,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.slider').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.slider').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
}
});

//   OWl
$('.owl-carousel').owlCarousel({
    navigation : true, // Show next and prev buttons
 
      slideSpeed : 300,
      paginationSpeed : 400,
 
    
});
// Nivo 
$(window).load(function() {
    $('#slider').nivoSlider();
    });

});