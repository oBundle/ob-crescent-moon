import React from 'react'
import ReactDOM from 'react-dom'
import PageManager from '../page-manager'
import ProductWizardContainer from "./ProductWizardContainer"

export default class ReactDemo extends PageManager {
    onReady() {
        // const container = $('#wizard-root')[0]
        ReactDOM.render(<ProductWizardContainer context={this.context}/>, document.querySelector('#wizard-root'))
    }
}