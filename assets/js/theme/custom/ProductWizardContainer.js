import React from 'react'
import MainPanel from "./components/MainPanel"
import TopBar from "./components/TopBar"
import Sidebar from "./components/Sidebar"

export default function ProductWizardContainer(props) {
  return (
    <div class="ob-container ob-wizard-container">
        <TopBar context={props.context}/>
        <Sidebar context={props.context}/>
        <MainPanel context={props.context}/>
    </div>
  )
}
