import React from "react";

import "./Display"

function Display({vetor}){
	return (
		<table className="table" align="center">
			<thead>
				<tr>
					<th> 
						Saldo: R$ 
						<input type="text" class="saldo" maxlength="1" id="id_0" disabled/>
					</th>	
					<th>Saldo no período: R$ 
						<input type="text" class="saldo" maxlength="1" id="id_0" disabled/>
					</th>
				</tr>
				<tr>
					<th>Data</th>
					<th>Valentia</th>
					<th>Tipo</th>
					<th>Nome operador transacionado</th>
				</tr>
			</thead>
			<tbody>
				{
					vetor.map((obj, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{obj.date}</td>
						<td>{obj.value}</td>
						<td>{obj.type}</td>
						<td>{obj.operator}</td>
					</tr>
					))
				}
			</tbody>
		</table>
	)
}

export default Display