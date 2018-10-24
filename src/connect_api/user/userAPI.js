const api = process.env.URL_API || 'http://localhost:5000/users/';

export const getAllRolesList = () => fetch(`${api}Roles`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' }
 })
	.then(res => res.json())
	.then(roles => roles.map(roles => ({
		ID : roles.id,
		ROL : roles.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

export const postuser = (data) => {
	const result = data;
	console.log('result: ', result);
}
export const getAllSecurityQuestionsList = () => fetch(`${api}SecurityQuestions`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(SecurityQuestions => SecurityQuestions.map(SecurityQuestions =>({
		ID : SecurityQuestions.id,
		Pregunta : SecurityQuestions.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

export const getAllUbicationsList = () =>	fetch(`${api}Ubications`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(Ubications => Ubications.map(Ubications =>({
		ID : Ubications.id,
		Ubicacion : Ubications.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

export const getAllUserRoleList = () => fetch(`${api}Roles/UserRole`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(UserRole => UserRole.map(UserRole =>({
		ID : UserRole.id,
		name : UserRole.name,
		description : UserRole.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});
