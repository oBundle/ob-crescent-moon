import React, {useState, useEffect} from 'react'

import MainPanelUserChoiceBtn from "./MainPanelUserChoiceBtn"
import MainPanelStepBtns from './MainPanelStepBtns'


export default function Step4(props) {
  const {userChoices, setUserChoices, step, setStep, context } = props
  const [selectedChoice, setSelectedChoice] = useState('') 

  const btnChoices = ["Greater than 10.5", "Smaller than 10.5"]
  const allUserChoiceBtns = btnChoices.map((name, index) => <MainPanelUserChoiceBtn key={index} name={name} setSelectedChoice={setSelectedChoice} selectedChoice={selectedChoice} />)

  return (
    <div className="ob-mainpanel-step-container">
      <div class="ob-cta-container-lg ob-mb-0-auto ob-pb-25 ob-pb-0-mobile">
        <h2 class="ob-text-white ob-heading-cta-md text-center">
          What's your foot size?
        </h2>
      </div>

      <div className="wizard-choice-btn-container">
      {allUserChoiceBtns}
      </div>

      <div className="ob-wizard-mainpanel-tip ob-mt-12">
        <img src="https://store-pqywb1ijst.mybigcommerce.com/content/ob-info-icon.svg" />
        <p className="ob-paragraph-sm ob-text-white">
          <span class="ob-visby-bold ob-text-white">Snowshoe Tip:</span> {context.theme_settings.wizard_tip_4} 

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