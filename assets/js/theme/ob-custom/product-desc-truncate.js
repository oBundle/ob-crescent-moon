export default function(context) {
  // $(".ob-product-detail-desc").hide()
  $(".ob-product-detail-desc").children().hide()
  $(".ob-product-detail-desc").children().first().show()

  //text truncate for accordion desc tab
  if( $('#panel1a').children().length > 2) {
    $("#panel1a").children().hide()
    //show first 2 paragraphs
    $("#panel1a").children().slice(0,2).show()
    $("#panel1a").append("<a href='#panel1a' id='accordion-read-more' class='ob-text-red'>Read more...</a>")
    $('#accordion-read-more').on('click', () => {
      $('#panel1a').children().show()
      $('#accordion-read-more').hide()
    })
  }

  let descMsg
  context.product.custom_fields.forEach(field => {
    if(field.name === "short-description") {
      descMsg = field.value
    }
  })
  console.log(descMsg)
  $('.ob-product-detail-desc').append(descMsg)
  //add color to product info on select
  $(document).on('mousedown touchstart', '.form-option-variant--color', (event) => {
    console.log("color variant click")
    let $label = $('#swatchGroup').find("small")
    let title = $(event.currentTarget).attr('title')
    $label.text(title)
  })

}
