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
    <div className="ob-wizard-step-btns-row">
      {step !== 1 &&
        <button 
        className="ob-cta-link ob-btn-transparent ob-text-primary"
        onClick={handlePrevClick}
        >
          <img src="https://store-pqywb1ijst.mybigcommerce.com/content/ob-arrow-right.svg" className="ob-arrow-left-red"/> Previous
        </button>
      }
      
      {step !== 6 && 
        <button 
          className={`ob-btn ob-btn-bg-red ob-text-white`}
          onClick={handleNextClick}
          disabled={selectedChoice ? false : true}
        >
          Next <img src="https://store-pqywb1ijst.mybigcommerce.com/content/arrow-right-white.svg" className="ob-arrow-right-white"/>
        </button>
      }
    </div>
      
  )
}
