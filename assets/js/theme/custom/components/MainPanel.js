import React, {useState, useEffect} from 'react'
import Papa from 'papaparse';

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'


export default function MainPanel(props) {
  const { context, setStep } = props
  const [csvData, setcsvData] = useState({ csvData: [] });
 

  const getCSV = () => {
    Papa.parse(`https://store-pqywb1ijst.mybigcommerce.com/content/snowshoe-wizard-flow-sheet.csv`, {
      download: true,
      complete: function(results) {
        setcsvData(results.data);
        console.log(results.data)
      }
    });
  }

  useEffect(() => {
    getCSV()
  }, []);

  console.log(csvData)

  return (
    <div>
      {csvData[0]}
    </div>
  )
}
