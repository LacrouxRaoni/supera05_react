import React from "react";

import "./SelectDisplay"
import "./../service/Action"
import { handlerGet } from "../service/Action";

function SelectDisplay({keyboardEvent, clickEvent}){
	return (
		<div id="selectDisplay">
			<table className="table" align="center">
				<thead>
					<tr>
						<th>
							<label For="txt1">Data inicio</label>
						</th>
						<th>
							<label For="txt2">Data fim</label>
						</th>
						<th>
							<label For="txt3">Nome operador transacionado</label>
						</th>
					</tr>
					<tr>
						<th>
							<input type="text" onChange={keyboardEvent} name="begin" id="txt1" ></input>
						</th>
						<th>
							<input type="text" onChange={keyboardEvent} name="end" id="txt2" ></input>
						</th>
						<th>
							<input type="text" onChange={keyboardEvent} name="operator" id="txt3" ></input>
						</th>
						<th>
	 						<input type="button" onClick={handlerGet} id="btn" value="Pesquisar"></input>
						</th>
					</tr>
				</thead>
			</table>
		</div>
	)
}

export default SelectDisplay
