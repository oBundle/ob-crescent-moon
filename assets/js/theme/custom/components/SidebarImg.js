import React from 'react'

export default function SidebarImg(props) {
  const shoeImgUrl = `https://cdn11.bigcommerce.com/s-pqywb1ijst/product_images/uploaded_images/snowshoe-graphic-inverted-01.png`
  const {step} = props
  return (
    <div className={`ob-sidebar-shoe-container ob-sidebar-shoe-container-step-${step} ob-desktop`}>
      <img src={shoeImgUrl} className="ob-wizard-sidebar-shoe" />
    </div>
  )
}
