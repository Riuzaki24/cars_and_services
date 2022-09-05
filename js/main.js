$(function () {

  $("#rateYo").rateYo({
    rating: 3.6
  });

  var mixer = mixitup('.ourblog__list');

  $('.ourblog__filter-btn').on('click', function () {
    $('.ourblog__filter-btn').removeClass('ourblog__filter-btn--active')
    $(this).addClass('ourblog__filter-btn--active')
  })

$('.reviews__slider-wrapper').slick({

  arrows: false,
  slidesToShow:2,
  infinite: true,
  draggable: false,
  slidesToScrool:1,
  waitForAnimate: false,
  dots: true,
  appendDots: $('.reviews__dots'),
  responsive:
  [
    {
      breakpoint:1140,
      settings: {
        slidesToShow:1,
      },
    },

    {
      breakpoint:800,
      settings: {
        arrows:false,
        draggable: true,
        slidesToShow:1,
      },
    },
  ]
})
$('.reviews__slider-prev').on('click', function (e) {
  e.preventDefault()
  $('.reviews__slider-wrapper').slick('slickPrev')
})
$('.reviews__slider-next').on('click', function (e) {
  e.preventDefault()
  $('.reviews__slider-wrapper').slick('slickNext')
})

// $('.questions__acc-link').on('click', function (e) {
//   e.preventDefault()
//   $(this).toggleClass('questions__acc-block--active')
//   $(this).children('.questions__acc-text').slideToggle()
// })

$('.questions__acc-link').on('click', function (e) {
  e.preventDefault()
  // 
  // $(this).toggleClass('questions__acc-block--active')
  // $(this).children('.questions__acc-text').slideDown()
  if ($(this).hasClass('questions__acc-block--active')) {
    $(this).removeClass('questions__acc-block--active')
    $(this).children('.questions__acc-text').slideUp()
  } else{
    $('.questions__acc-link').removeClass('questions__acc-block--active')
    $('.questions__acc-text').slideUp()
    $(this).addClass('questions__acc-block--active')
    $(this).children('.questions__acc-text').slideDown()
  }
})


setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === true) {
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
}, 0 ); 

$('.burger, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
  $('.burger').toggleClass('burger--close')
})


})


