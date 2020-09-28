import React from 'react'

export default function SidebarImg(props) {
  const shoeImgUrl = `https://cdn11.bigcommerce.com/s-pqywb1ijst/product_images/uploaded_images/wizard-shoe.png`
  const {step} = props
  return (
    <div className={`ob-sidebar-shoe-container ob-sidebar-shoe-container-step-${step}`}>
      <img src={shoeImgUrl} className="ob-wizard-sidebar-shoe" />
    </div>
  )
}
