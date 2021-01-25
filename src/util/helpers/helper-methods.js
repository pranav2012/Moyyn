const url ="http://138.197.189.222";

export const sendRequest = async ( endpoint = '' , method = 'GET', body) => {
	const response = await fetch(`${url}${endpoint}`, {
      mode:'cors',
		method,
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	})
	const data = await response.json();

	return data;
}

export const GetData = async ( endpoint = '' , method = 'GET') => {
	const response = await fetch(`${url}${endpoint}`, {
      mode:'cors',
	  method,
	  headers: { "Content-Type": "application/json" },
	})
	let data = await response.json();
	data = JSON.parse(data);
	return data;
}
