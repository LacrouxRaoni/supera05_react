import React from "react";

import "./App.css"

import "./SelectDisplay"
import "./Display"
import Display from "./Display";
import SelectDisplay from "./SelectDisplay";
import { useState } from "react";
import { useEffect } from "react";

function App(){

	const dataRequestor = {
		accId : 0,
		operator : "",
		begin : "",
		end :""
	}

	const [objDataRequestor, setObjDataRequestor] = useState(dataRequestor)
	const[relatorio, setRelatorio] = useState([]);

	const getBody = (e) => {
		setObjDataRequestor({...objDataRequestor, [e.target.name]:e.target.value})
	}


	useEffect(()=>{
		fetch("http://localhost:8080/")
		.then(acc => acc.json())
		.then(accConverted => setRelatorio(accConverted));
	}, []);



	return (
		<div id="body">
			<SelectDisplay keyboardEvent={getBody} ></SelectDisplay>
			<Display vetor={relatorio}></Display>
		</div>
	)
}

export default App;