const api = process.env.URL_API || 'http://localhost:5000/users/Roles';

export const getRolesList = () => fetch(`${api}Roles`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		} else {
			console.log(data);
		}
	}).then(roles => roles.map(roles =>({
		ID : roles.id,
		description : roles.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});