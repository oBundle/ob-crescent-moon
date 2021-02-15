import React from 'react'

export default function ProductResultCard(props) {
  const { url, name, price, imgUrl, id, bestFitIds } = props
  let isBestFit = false

  if(bestFitIds.includes(id)) {
    isBestFit = true
  }

  return (
    <div className="wizard-result-card">
      {isBestFit && 
        <div className="ob-best-fit-tag">
          <img src="https://store-pqywb1ijst.mybigcommerce.com/content/ob-best-fit-icon.svg"/>
          <p className="ob-text-white ob-paragraph-md">Best Fit</p>
        </div>
      }
      <a href={url}>
        <img srcSet={imgUrl} src="https://store-pqywb1ijst.mybigcommerce.com/content/loading.svg"/>
        <h6 className="ob-text-primary ob-heading-cta-xs text-center">{name}</h6>
        <p className="ob-text-secondary ob-paragraph-md text-center">${price}</p>
      </a>
    </div>
  )
}
