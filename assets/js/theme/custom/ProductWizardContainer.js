import React, { useState, useEffect } from "react";
import Papa from "papaparse";


import MainPanel from "./components/MainPanel";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";

export default function ProductWizardContainer(props) {
	const [step, setStep] = useState(1);
	const [csvData, setcsvData] = useState({ csvData: [] });
	const [userChoices, setUserChoices] = useState([]);

	const { context } = props;
	//fetch and parse csv file from webdav
	const getCSV = () => {
		Papa.parse(
			`https://store-pqywb1ijst.mybigcommerce.com/content/snowshoe-wizard-flow-sheet-updated.csv`,
			{
				download: true,
				complete: function (results) {
					setcsvData(results.data);
					console.log(results.data);
				},
			},
		);
	};



	//fetch csv and parse (async)
	useEffect(() => {
    getCSV();
	}, []);

	console.log("userChoiceArr", userChoices);

	return (
		<div className="ob-container ob-wizard-container ob-pt-0-mobile">
			<TopBar context={props.context} />
			<div className="ob-product-wizard-mid-row ob-mt-25 ob-mt-0-mobile">
				<Sidebar context={props.context} step={step} />
				<MainPanel
					context={context}
					setStep={setStep}
					step={step}
					csvData={csvData}
					userChoices={userChoices}
					setUserChoices={setUserChoices}
				/>
			</div>
		</div>
	);
}
