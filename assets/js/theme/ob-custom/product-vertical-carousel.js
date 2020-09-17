export default function() {

  $('.productView-thumbnails').slick({
    infinite: true,
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    verticalSwiping: true,
  });

  $('.productView-thumbnails-mobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
  });
        
  $('.ob-carousel-vertical-prev').on('click', () => {
    const $slickPrev = $('.ob-carousel-vertical-prev').parent().find('.slick-prev')
    return $slickPrev.click()
  })

  $('.ob-carousel-vertical-next').on('click', () => {
    const $slickNext = $('.ob-carousel-vertical-next').parent().find('.slick-next')
    return $slickNext.click()
  })
}