import axios from "axios"

function handlerGet() {
	const url = "http://localhost:8080/transaction/operator";
	const header = {
		'Access-Control-Request-Headers': 'Content-Type'
	}
	axios.get(url, { header }, {
		operator: "Beltrano"

	}) 
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log("Ops...algo deu errado.");
	});
}

export { handlerGet };