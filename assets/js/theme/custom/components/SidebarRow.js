import React from 'react'

export default function SidebarRow(props) {
  const { iconUrl, number, name } = props
  const grayCheckBoxUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/check-icon-gray.svg'
  const redCheckBoxUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/check-icon-red.svg'
  return (
    <div className="ob-wizard-sidebar-row">
      <img src={iconUrl} />
      <p className="ob-text-primary ob-paragraph-md wizard-row-number">{number}.</p>
      <p className="ob-text-primary ob-paragraph-md wizard-row-name">{name}</p>
      <img src={grayCheckBoxUrl} className="wizard-row-checkbox"/>
    </div>
  )
}
