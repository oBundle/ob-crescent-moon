import React, {useState, useEffect} from 'react'

import MainPanelUserChoiceBtn from "./MainPanelUserChoiceBtn"
import MainPanelStepBtns from './MainPanelStepBtns'


export default function Step5(props) {
  const {userChoices, setUserChoices, step, setStep } = props
  const [selectedChoice, setSelectedChoice] = useState('') 

  const btnChoices = ["Male", "Female"]
  const allUserChoiceBtns = btnChoices.map((name, index) => <MainPanelUserChoiceBtn key={index} name={name} setSelectedChoice={setSelectedChoice} selectedChoice={selectedChoice} />)

  return (
    <div className="ob-mainpanel-step-container">
      <div class="ob-cta-container-lg ob-mb-0-auto ob-pb-25">
        <h2 class="ob-text-white ob-heading-cta-md text-center">
          What's your gender?
        </h2>
      </div>

      <div className="wizard-choice-btn-container">
      {allUserChoiceBtns}
      </div>

      <div className="ob-wizard-mainpanel-tip ob-mt-12">
        <img src="https://store-pqywb1ijst.mybigcommerce.com/content/ob-info-icon.svg" />
        <p className="ob-paragraph-sm ob-text-white">
          Snowshoe Tip: Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
        </p>
      </div>
      <div className='ob-wizard-mainpanel-bottom'>
        <MainPanelStepBtns 
          step={step} 
          setStep={setStep} 
          setUserChoices={setUserChoices} 
          userChoices={userChoices} 
          selectedChoice={selectedChoice}
        />
      </div>
    </div>
  )
}