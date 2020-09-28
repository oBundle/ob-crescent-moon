import React from 'react'

export default function ProductResultCard(props) {
  const { url, name, price, imgUrl } = props
  return (
    <div className="wizard-result-card">
      <a href={url}>
        <img src={imgUrl} />
        <h6 className="ob-text-primary ob-heading-cta-xs text-center">{name}</h6>
        <p className="ob-text-secondary ob-paragraph-md">{price}</p>
      </a>
    </div>
  )
}
