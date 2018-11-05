const api = process.env.URL_API || 'http://localhost:5000/formData/';

export const getAllMovementTypeslist = () => fetch(`${api}MovementTypes`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(MovementTypes => MovementTypes.map(MovementTypes =>({
		ID : MovementTypes.id,
	
		name : MovementTypes.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});
