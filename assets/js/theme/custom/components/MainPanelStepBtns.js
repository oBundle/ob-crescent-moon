import React from 'react'

export default function MainPanelStepBtns(props) {
  const {step, setStep, setUserChoices, userChoices, selectedChoice} = props
  
  const handlePrevClick = () => {
    let prevUserChoices = userChoices
    prevUserChoices.pop()
    setUserChoices(prevUserChoices)
    setStep(step - 1)
  }

  const handleNextClick = () => {
    if (selectedChoice) {
      setUserChoices(prevState => [...prevState, selectedChoice])
      setStep(step + 1)
    }  
  }
  return (
    <div class="ob-wizard-step-btns-row">
      {step !== 1 &&
        <button 
        class="ob-cta-link ob-text-white"
        onClick={handlePrevClick}
        >
          <img src="https://store-pqywb1ijst.mybigcommerce.com/content/ob-arrow-right.svg" className="ob-arrow-left-red"/> Previous
        </button>
      }
      <button 
        class="ob-btn ob-btn-bg-red ob-text-white"
        onClick={handleNextClick}
      >
        Next <img src="https://store-pqywb1ijst.mybigcommerce.com/content/ob-arrow-right.svg" className="ob-arrow-right-white"/>
      </button>
    </div>
  )
}
