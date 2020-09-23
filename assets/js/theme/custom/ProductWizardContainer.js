import React, { useState, useEffect } from 'react'
import MainPanel from "./components/MainPanel"
import TopBar from "./components/TopBar"
import Sidebar from "./components/Sidebar"

export default function ProductWizardContainer(props) {
  const [state, setState] = useState({
    currentStep: 1,
  });

  const setStep = (currentStep=null) => {
    let step = state.currentStep;

    if (currentStep) {
      step = currentStep;
    }

    setState({
      currentStep: step,
    });
  }


  useEffect(() => {
    
  }, []);


  return (
    <div className="ob-container ob-wizard-container">
        <TopBar context={props.context}/>
        <div className="ob-product-wizard-mid-row ob-mt-25">
          <Sidebar context={props.context} step={state.step}/>
          <MainPanel context={props.context} setStep={setStep}/>
        </div>
    </div>
  )
}
