import React from 'react'

export default function MainPanelUserChoiceBtn(props) {
  const {name, setSelectedChoice, selectedChoice} = props
  const clickHandler = () => {
    setSelectedChoice(name)
  }

  let choiceIsSelected = false
  if(selectedChoice === name) {
    choiceIsSelected = true
  }
  return (
    <button className={`wizard-mainpanel-user-choice-btn ob-text-primary ${choiceIsSelected && 'choiceIsSelected'}`} onClick={clickHandler}>
        {name}
    </button>
  )
}
