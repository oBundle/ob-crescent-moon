export default function(context) {
  // target ob cat subnav links
  const $subnavLinks = $(".ob-cat-subnav-link")
  //target product grid
  let $productGrid = $("li.product")

  //subnav link click handler
  $subnavLinks.on("click", (event) => {
    event.preventDefault()
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

  })
}