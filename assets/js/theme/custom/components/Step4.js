import React, {useState, useEffect} from 'react'

import MainPanelUserChoiceBtn from "./MainPanelUserChoiceBtn"
import MainPanelStepBtns from './MainPanelStepBtns'


export default function Step4(props) {
  const {userChoices, setUserChoices, step, setStep } = props
  const [selectedChoice, setSelectedChoice] = useState('') 

  return (
    <div class="ob-mainpanel-step-container">
      <button className="wizard-mainpanel-user-choice-btn ob-text-primary" onClick={() => setSelectedChoice('Smaller than 10.5 lbs')}>
        Smaller than 10.5
      </button>
      <button className="wizard-mainpanel-user-choice-btn ob-text-primary" onClick={() => setSelectedChoice('Greater than 10.5 lbs')}>
        Larger than 10.5
      </button>

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