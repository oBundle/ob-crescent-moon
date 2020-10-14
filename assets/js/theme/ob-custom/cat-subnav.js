export default function(context) {
  // target ob cat subnav links
  const $subnavLinks = $(".ob-cat-subnav-link")
  //target product grid
  let $productGrid = $("li.product")

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
    //target subnavlink title (which is the cat or subcat)
    const subnavCat = $(event.currentTarget).attr('title');

    //loop over product grid
    $productGrid.each((index, product) => {
      //target data-product-cats (string with all cats / subcats this product is in)
      const categories = $(product).attr('data-product-cats')
      //if subnav link's title is not in data-product/cats as substr

      if (!categories.includes(subnavCat)) {
        //hide the product card
        $(product).hide()
      //else, show this product card
      } else {
        $(product).fadeIn()
      }
    })

    //click handler if on mobile
    if ($(event.currentTarget).parent().hasClass("ob-cat-subnav--mobile")) {
      //move clicked item to top of list
      $(event.currentTarget).parent().prepend(event.currentTarget)
      $(event.currentTarget).siblings().slideUp()
      $(event.currentTarget).show()
      $(".ob-toggle-subcat").addClass('ob-is-closed')
    }

  })
  $(".ob-toggle-subcat").on('click', (event) => {
    if ( $(event.currentTarget).hasClass('ob-is-closed') ) {
      $(".ob-cat-subnav--mobile").children().slideDown()
      $(event.currentTarget).removeClass('ob-is-closed')
    } else {
      $(".ob-cat-subnav--mobile").children().first().siblings().slideUp()
      $(event.currentTarget).addClass('ob-is-closed')
    }
    
  })
}