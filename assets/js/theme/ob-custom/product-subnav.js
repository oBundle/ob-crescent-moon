export default function(context) {
  // target ob cat subnav links
  const $subnavLinks = $(".ob-cat-subnav-link")
  //target product grid
  let $productDescGrid = $(".ob-subnav-content-item")

  //add classes onload
  $subnavLinks.first().addClass('ob-cat-subnav-link--active')
  $subnavLinks.first().toggleClass('ob-text-secondary ob-text-primary')

  //subnav link click handler
  $subnavLinks.on("click", (event) => {
    event.preventDefault()
    //add active class to clicked link
    $(event.currentTarget)
      .removeClass('ob-text-secondary')
      .addClass('ob-cat-subnav-link--active ob-text-primary')
    //add active class to clicked link
    $(event.currentTarget).siblings()
      .removeClass('ob-cat-subnav-link--active ob-text-primary')
      .addClass('ob-text-secondary')
    //target subnavlink title
    const subnavName = $(event.currentTarget).attr('title');
    console.log(subnavName)
    console.log($('.ob-subnav-content-item'))
    $('.ob-subnav-content-item').removeClass('ob-show')
    $(`div#${subnavName}`).addClass('ob-show');
    
  })
}