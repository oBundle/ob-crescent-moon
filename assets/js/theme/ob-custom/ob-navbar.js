export default function(context) {
  console.log('nav script run', context)
  //click on hover bind
  $('.has-subMenu.ob-top-level-navlink').on('mouseover', (e) => {
    $(e.currentTarget).click()
    $('.ob-dark-overlay').fadeIn()
  })

  $('.navPage-subMenu').on('mouseleave', (e) => {
    $(e.currentTarget).removeClass('is-open')
    $('body').trigger('click')

    $('.ob-dark-overlay').fadeOut()
  })

  $('.navPage-subMenu').on('mouseleave', (e) => {
    if ($('.navPages-action.is-open').length < 1) {
      $('.ob-dark-overlay').fadeOut()
    }
  })
  
  //target DOM nodes 
  let $header = $(".header");
  let $nav = $(".navUser")
  let lastScrollTop = 0

  //if the page type is default (home), add transparent classes
  if (context.page_type === "default") {
    $header.addClass("ob-transparent");
    $nav.addClass("ob-transparent");
  }


  $(window).on('scroll', (function () {
    //if the page type is default (home), add transparent classes
    if (context.page_type === "default") {
      $header.removeClass('ob-transparent');
      $nav.removeClass('ob-transparent');
    }
    $header.addClass('ob-header-shadow');

    if($(window).scrollTop() === 0) {
      if (context.page_type === "default") {
        $header.addClass("ob-transparent");
        $nav.addClass("ob-transparent");
      }
      $header.removeClass('ob-header-shadow');
    }
    
    let st = $(window).scrollTop() 
    lastScrollTop = st  // For Mobile or negative scrolling
  }));

}

  
