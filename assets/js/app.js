// $(".slick-slider").slick({
//   slidesToShow: 1,
//   infinite: true,
//   slidesToScroll: 1,
//   autoplay: true,
//   fade: true,
//   autoplaySpeed: 2000,
//   prevArrow: $(".r_arrow"),
//   nextArrow: $(".l_arrow"),
// });
$(".text_slider").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  dots: false,
  prevArrow: $(".left_arrow"),
  nextArrow: $(".right_arrow"),
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#dynamic").addClass("newClass");
  } else {
    $("#dynamic").removeClass("newClass");
  }
});
