import React from 'react'
import SidebarRow from './SidebarRow'
import SidebarImg from './SidebarImg'

export default function Sidebar(props) {
  const { step } = props

  //icon urls
  const mtnsUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/sidebar-mtns.svg'
  const speedUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/sidebar-speed.svg'
  const weightUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/sidebar-weight.svg'
  const genderUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/sidebar-gender.svg'
  const sizeUrl = 'https://store-pqywb1ijst.mybigcommerce.com/content/sidebar-size.svg'

  //snowshoe progress img
  const shoeImgUrl = 'https://cdn11.bigcommerce.com/s-pqywb1ijst/product_images/uploaded_images/wizard-shoe.png'

  return (
    <div class="ob-wizard-sidebar-container">
      <SidebarImg shoeImgUrl={shoeImgUrl} step={step}/>
      <div class="wizard-sidebar-rows-container ob-mt-25">
      <SidebarRow number={1} iconUrl={mtnsUrl} name={'Terrain'} step={step}/>
      <SidebarRow number={2} iconUrl={speedUrl} name={'Speed'} step={step}/>
      <SidebarRow number={3} iconUrl={weightUrl} name={'Weight'} step={step}/>
      <SidebarRow number={4} iconUrl={sizeUrl} name={'Size'} step={step}/>
      <SidebarRow number={5} iconUrl={genderUrl} name={'Gender'} step={step}/>
      </div>
    </div>
  )
}
