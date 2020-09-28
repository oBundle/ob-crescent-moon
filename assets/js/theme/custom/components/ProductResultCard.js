import React from 'react'

export default function ProductResultCard(props) {
  const { url, name, price, imgUrl } = props
  return (
    <div className="wizard-result-card">
      <a href={url}>
        <img srcSet={imgUrl} src="https://store-pqywb1ijst.mybigcommerce.com/content/loading.svg"/>
        <h6 className="ob-text-primary ob-heading-cta-xs text-center">{name}</h6>
        <p className="ob-text-secondary ob-paragraph-md text-center">${price}</p>
      </a>
    </div>
  )
}
