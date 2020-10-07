import React, {useState, useEffect} from 'react'

import MainPanelUserChoiceBtn from "./MainPanelUserChoiceBtn"
import MainPanelStepBtns from './MainPanelStepBtns'
import ResultGrid from "./ResultGrid"


export default function Step6(props) {
  const {userChoices, setUserChoices, step, setStep, context, csvData } = props
  const [selectedChoice, setSelectedChoice] = useState('') 

  const btnChoices = [""]

  return (
    <div className="ob-mainpanel-step-container">
      <div class="ob-cta-container-lg ob-mb-0-auto ob-pb-25 ob-pb-0-mobile">
        <h2 class="ob-text-primary ob-heading-cta-md text-center">
          Here are your results...
        </h2>
      </div>

      <div className="wizard-choice-btn-container">
      <ResultGrid userChoices={userChoices} context={context} csvData={csvData} />
      </div>

      <div className="ob-wizard-mainpanel-tip ob-mt-12">
        
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