const api = process.env.URL_API || 'http://localhost:5000/faculty/';

const getSchoolList = () => fetch(`${api}schools`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(schools => schools.map(schools =>({
		ID : schools.id,
		code : schools.code,
		name : schools.school
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});


	