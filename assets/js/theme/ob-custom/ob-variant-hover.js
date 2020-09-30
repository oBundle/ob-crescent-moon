export default function(context) {
  console.log('variant run')
  let { products } = context.category
  //loops over products in cat to get data we need (hex code and img url)
  let productVariantObjs = products.map(product => {
    let updatedProductObj = { id: product.id, url: product.url, variants: [] }
    product.custom_fields && product.custom_fields.forEach(field => {
      if (field.name.includes("color_variant")) {
        updatedProductObj.variants.push(JSON.parse(field.value))
      }
    })
    return updatedProductObj
  })

  productVariantObjs.forEach(product => {
    let $imgContainerDiv = $(`.card-img-container[data-product-id='${product.id}']`)
    let $swatchHoverRow = $(`.ob-swatch-hover-container[data-product-id='${product.id}']`)
    let originalImgUrl = $imgContainerDiv.children().first().attr('srcset')
    console.log('swatch hover', $swatchHoverRow)
    product.variants.forEach(variant => {
      console.log(`${product.url}?variant=${variant.color}`)

      let $swatchDiv = $(`<a class="ob-cat-product-card-swatch" data-img-url=${variant.imgUrl} style="background-color: #${variant.color}" href='${product.url}?variant=${variant.color}'></a>`)
      $swatchDiv.mouseenter(() => $imgContainerDiv.children().first().attr('srcset', variant.imgUrl))
      $swatchDiv.mouseleave(() => $imgContainerDiv.children().first().attr('srcset', originalImgUrl))
      $swatchHoverRow.append($swatchDiv)
    })
    
  })
}

