const api = process.env.URL_API || 'http://localhost:5000/users/';





const getAllRolesList =	fetch(`${api}Roles`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/2json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		} else {
			return data 
		}
	})
	.then(roles => roles.map(roles =>({
		ID : roles.id,
		description : roles.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});



  	const getAllSecurityAnswerFilterQuestionList = fetch(`${api}SecurityAnswer/SecurityAnswerFilterQuestion`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/2json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		} else {
			return data 
		}
	})
	.then(SecurityAnswer/SecurityAnswerFilterQuestion => SecurityAnswer/SecurityAnswerFilterQuestion.map(SecurityAnswer/SecurityAnswerFilterQuestion =>({
		ID : SecurityAnswer/SecurityAnswerFilterQuestion.id,
		name : SecurityAnswer/SecurityAnswerFilterQuestion.name,
		description : SecurityAnswer/SecurityAnswerFilterQuestion.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});




  	 	const getAllSecurityQuestionsList =	fetch(`${api}SecurityAnswer`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/2json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		} else {
			return data 
		}
	})
	.then(SecurityAnswer => SecurityAnswer.map(SecurityAnswer =>({
		ID : SecurityAnswer.id,
		name : SecurityAnswer.name,
		description : SecurityAnswer.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});


  	 	const getAllSecurityQuestionsList =	fetch(`${api}SecurityQuestions`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/2json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		} else {
			return data 
		}
	})
	.then(SecurityQuestions => SecurityQuestions.map(SecurityQuestions =>({
		ID : SecurityQuestions.id,
		description : SecurityQuestions.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});



  	 	 	const getAllUbicationsList =	fetch(`${api}Ubications`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/2json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		} else {
			return data 
		}
	})
	.then(Ubications => Ubications.map(Ubications =>({
		ID : Ubications.id,
		description : Ubications.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});


  	 	 	const getAllUserRoleList =	fetch(`${api}Roles/UserRole`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/2json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		} else {
			return data 
		}
	})
	.then(Roles/UserRole => Roles/UserRole.map(Roles/UserRole =>({
		ID : Roles/UserRole.id,
		name : Roles/UserRole.name,
		description : Roles/UserRole.description
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});