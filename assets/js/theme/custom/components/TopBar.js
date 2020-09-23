import React from 'react'

export default function TopBar() {
  return (
    <div className="ob-product-wizard-topbar">
      <a className="ob-cta-link ob-text-primary" onClick="history.back(-1)">
        <img src="https://store-pqywb1ijst.mybigcommerce.com/content/ob-arrow-right.svg" className="ob-arrow-left-red"/> Return
      </a>
      <h6 className="ob-heading-cta-xs ob-text-primary">
      Crescent Moon Snowshoe Finder</h6>
    </div>
  )
}
