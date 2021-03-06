import React from 'react'

export default function SidebarRow(props) {
  const { iconUrl, number, name, step } = props

  const grayCheckBoxUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/check-icon-gray.svg'
  const redCheckBoxUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/check-icon-red.svg'

  let stepIsComplete = false
  if (step > number) {
    stepIsComplete = true
  }

  let isCurrentStep = false
  if (step === number) {
    isCurrentStep = true
  }

  return (
    <div className={`ob-wizard-sidebar-row ${stepIsComplete ? 'wizard-row-complete' : 'wizard-row-incomplete'} ${isCurrentStep && 'wizard-row-current'}`}
    >
      <img src={iconUrl} />
      <p className="ob-text-primary ob-paragraph-md wizard-row-number ob-desktop">{number}.</p>
      <p className="ob-text-primary ob-paragraph-md wizard-row-name">{name}</p>
      <img src={stepIsComplete ? redCheckBoxUrl : grayCheckBoxUrl} className="wizard-row-checkbox"/>
    </div>
  )
}
