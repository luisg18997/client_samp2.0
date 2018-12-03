const api = process.env.URL_API || 'http://localhost:5000/faculty/';

export const getSchoolList = () => fetch(`${api}schools`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(schools => schools.map(schools =>({
		ID : schools.id,
		code : schools.code,
		name : schools.school
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

export const getAllInstituteList = () => fetch(`${api}institutes`,
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



export const getAllCoordinationList = () => fetch(`${api}coordinations`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(coordinations => coordinations.map(coordinations =>({
		ID : coordinations.id,
		code : coordinations.code,
		name : coordinations.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	export const getCoordination = () => fetch(`${api}coordination`,
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(coordination => coordination.map(coordination =>({
		ID : coordination.id,
		code : coordination.code,
		name : coordination.name,
		codeFilter : coordination.code.substr(0, 4)
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	export const getAllDepartamentBySchoolList = (schoolID) => fetch(`${api}school/departaments`,
	{
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body : JSON.stringify({
			param_school_id : schoolID
		})
	})
	.then(res => res.json())
	.then(departaments => departaments.map(departaments =>({
		ID : departaments.id,
		code : departaments.code,
		name : departaments.departament,
		codeFilter : departaments.code.substr(0, 6)
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});
/*
	export const getAllDepartamentByInstituteList = () => fetch(`${api}institute/departaments`,
	{ method: 'post', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(departaments => departaments.map(departaments =>({
		ID : departaments.id,
		code : departaments.code,
		name : departaments.name
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

*/
		export const getAllChairList = (departamentID) => fetch(`${api}school/departament/chairs`,
	{
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body : JSON.stringify({
			param_departament_id : departamentID
		})
	})
	.then(res => res.json())
	.then(chairs => chairs.map(chairs =>({
		ID : chairs.id,
		code : chairs.code,
		name : chairs.chair
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

	export const getSchool = (schoolID) => fetch(`${api}school`,
	{ method: 'post',
	headers: {
		'Content-Type': 'application/json'
	},
	body : JSON.stringify({
		param_school_id : schoolID
	})
})
	.then(res => res.json())
	.then(schools => schools.map(schools =>({
		ID : schools.id,
		code : schools.code,
		name : schools.school,
		codeFilter : schools.code.substr(0, 4)
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});
/*
	export	const getInstitute = () => fetch(`${api}institute`,
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




	export	const getDepartamentBySchool = () => fetch(`${api}school/departament`,
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




	export	const getAllDepartamentByInstituteList = () => fetch(`${api}institute/departaments`,
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



	export	const getChair = () => fetch(`${api}school/departament/chair`,
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
*/
