import React, {useState, useEffect} from 'react'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'

import MainPanelStepBtns from './MainPanelStepBtns'


export default function MainPanel(props) {
  const { step, setStep, csvData, userChoices, setUserChoices, context } = props

  return (
    <div className="ob-wizard-mainpanel-container">
      <p className="text-center ob-text-white ob-paragraph-md">{step < 6 ? `${step}/5` : "You're all set!"}</p>
      {step === 1 && <Step1 step={step} setStep={setStep} userChoices={userChoices} setUserChoices={setUserChoices}/>}
      {step === 2 && <Step2 step={step} setStep={setStep} userChoices={userChoices} setUserChoices={setUserChoices}/>}
      {step === 3 && <Step3 step={step} setStep={setStep} userChoices={userChoices} setUserChoices={setUserChoices}/>}
      {step === 4 && <Step4 step={step} setStep={setStep} userChoices={userChoices} setUserChoices={setUserChoices}/>}
      {step === 5 && <Step5 step={step} setStep={setStep} userChoices={userChoices} setUserChoices={setUserChoices} />}
      {step === 6 && <Step6 step={step} setStep={setStep} context={context} csvData={csvData} userChoices={userChoices} setUserChoices={setUserChoices} />}
    </div>
  )
}
