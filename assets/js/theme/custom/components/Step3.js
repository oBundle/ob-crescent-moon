import React, {useState, useEffect} from 'react'

import MainPanelUserChoiceBtn from "./MainPanelUserChoiceBtn"
import MainPanelStepBtns from './MainPanelStepBtns'


export default function Step3(props) {
  const {userChoices, setUserChoices, step, setStep } = props
  const [selectedChoice, setSelectedChoice] = useState('') 

  const btnChoices = ["Under 195 lbs", "Over 195 lbs"]
  const allUserChoiceBtns = btnChoices.map((name, index) => <MainPanelUserChoiceBtn key={index} name={name} setSelectedChoice={setSelectedChoice} selectedChoice={selectedChoice} />)

  return (
    <div className="ob-mainpanel-step-container">
      {allUserChoiceBtns}

      <div className="ob-wizard-mainpanel-tip">
        <img src="https://store-pqywb1ijst.mybigcommerce.com/content/ob-info-icon.svg" />
        <p className="ob-paragraph-sm ob-text-white">
          Snowshoe Tip: Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
        </p>
      </div>
      <MainPanelStepBtns 
        step={step} 
        setStep={setStep} 
        setUserChoices={setUserChoices} 
        userChoices={userChoices} 
        selectedChoice={selectedChoice}
      />
    </div>
  )
}