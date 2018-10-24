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

const getAllInstituteList = () => fetch(`${api}institutes`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(institutes => institutes.map(institutes =>({
		ID : institutes.id,
		code : institutes.code,
		name : institutes.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});



const getAllCoordinationList = () => fetch(`${api}coordinations`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(coordinations => coordinations.map(coordinations =>({
		ID : coordinations.id,
		code : coordinations.code,
		name : coordinations.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	

	const getCoordination = () => fetch(`${api}coordination`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(coordination => coordination.map(coordination =>({
		ID : coordination.id,
		code : coordination.code,
		name : coordination.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	

	const getAllDepartamentBySchoolList = () => fetch(`${api}school/departaments`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(school/departaments => school/departaments.map(school/departaments =>({
		ID : school/departaments.id,
		code : school/departaments.code,
		name : school/departaments.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	

	const getAllDepartamentByInstituteList = () => fetch(`${api}institute/departaments`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(institute/departaments => institute/departaments.map(institute/departaments =>({
		ID : institute/departaments.id,
		code : institute/departaments.code,
		name : institute/departaments.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	
		const getAllChairList = () => fetch(`${api}school/departament/chairs`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(school/departament/chairs => school/departament/chairs.map(school/departament/chairs =>({
		ID : school/departament/chairs.id,
		code : school/departament/chairs.code,
		name : school/departament/chairs.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	
	
		const getSchool = () => fetch(`${api}school`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(school => school.map(school =>({
		ID : school.id,
		code : school.code,
		name : school.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});


	
		const getSchool = () => fetch(`${api}school`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(school => school.map(school =>({
		ID : school.id,
		code : school.code,
		name : school.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	
	
	
		const getInstitute = () => fetch(`${api}institute`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(institute => institute.map(institute =>({
		ID : institute.id,
		code : institute.code,
		name : institute.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});



		
		const getDepartamentBySchool = () => fetch(`${api}school/departament`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(school/departament => school/departament.map(school/departament =>({
		ID : school/departament.id,
		code : school/departament.code,
		name : school/departament.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});



		
		const getAllDepartamentByInstituteList = () => fetch(`${api}institute/departaments`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(institute/departaments => institute/departaments.map(institute/departaments =>({
		ID : institute/departaments.id,
		code : institute/departaments.code,
		name : institute/departaments.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});



		const getChair = () => fetch(`${api}school/departament/chair`, 
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		}
	}).then(school/departament/chair => school/departament/chair.map(school/departament/chair =>({
		ID : school/departament/chair.id,
		code : school/departament/chair.code,
		name : school/departament/chair.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

