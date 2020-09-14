export default function() {
  $('.ob-carousel-vertical-prev').on('click', () => {
    const $slickPrev = $('.ob-carousel-vertical-prev').parent().find('.slick-prev')
    return $slickPrev.click()
  })

  $('.ob-carousel-vertical-next').on('click', () => {
    const $slickNext = $('.ob-carousel-vertical-next').parent().find('.slick-next')
    return $slickNext.click()
  })
}