const api = process.env.URL_API || 'http://localhost:5000/employee/';

export const getAllGenderList = () => fetch(`${api}Genders`,
{
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.then(gender => gender.map(gender =>({
	ID : gender.id,
	Gender : gender.gender
})))
.catch((error) => {
	console.log('The error is:', error.message);
});

export const getAllCategoryTypesList = () => fetch(`${api}CategoryTypes`,
{
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.then(CategoryTypes => CategoryTypes.map(CategoryTypes =>({
	ID : CategoryTypes.id,
	name : CategoryTypes.category_type
	})))
.catch((error) => {
	console.log('The error is:', error.message);
});

export const getAllDedicationTypesList = () => fetch(`${api}DedicationTypes`,
{
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.then(DedicationTypes => DedicationTypes.map(DedicationTypes =>({
	ID : DedicationTypes.id,
	dedi : DedicationTypes.dedication_type
	})))
.catch((error) => {
	console.log('The error is:', error.message);
});

export const getAllExecuntingUnitListFilter = (codeFilter) => fetch(`${api}ExecuntingUnitFilter`,
{
	method: 'POST',
 	headers: {
 		'Content-Type': 'application/json',
		'Accept': 'application/json'
 	},
 	body : JSON.stringify({
		param_code_filter : codeFilter
	})
 })
.then(res => res.json())
.then(ExecuntingUnitlist => ExecuntingUnitlist.map(Exec =>({
	ID : Exec.id,
	des : Exec.execunting_unit
	})))
.catch((error) => {
	console.log('The error is:', error.message);
});

export const getAllNacionalitiesList = () => fetch(`${api}Nacionalities`,
{
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.then(Nacionalities => Nacionalities.map(Nacionalities =>({
	ID : Nacionalities.id,
	Name : Nacionalities.nacionality
	})))
.catch((error) => {
	console.log('The error is:', error.message);
});

export const getAllDocumentationList = () => fetch(`${api}Documentations`,
{
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.then(documentation => documentation.map(doc =>({
	ID : doc.id,
	Name : doc.documentation
	})))
.catch((error) => {
	console.log('The error is:', error.message);
});

export const getAllIngressList = () => fetch(`${api}Ingress`,
{
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.then(Ingress => Ingress.map(Ingress =>({
	id : Ingress.id,
	Ingress : Ingress.ingres
	})))
.catch((error) => {
	console.log('The error is:', error.message);
});

export const getAllIncomeTypeList = () => fetch(`${api}IncomeTypes`,
{
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.then(IncomeType => IncomeType.map(IncomeType =>({
	ID : IncomeType.id,
	income : IncomeType.income_type
	})))
.catch((error) => {
	console.log('The error is:', error.message);
});


export const getAllStatesList = () => fetch(`${api}states`,
{
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.then(states => states.map(states =>({
ID : states.id,
states : states.state
})))
.catch((error) => {
console.log('The error is:', error.message);
});

export const getAllMunicipalitiesList = (stateID) => fetch(`${api}states/municipalities`,
{
method: 'post',
headers: {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
},
body : JSON.stringify({
	param_state_id : stateID
})
})
.then(res => res.json())
.then(municipalities => municipalities.map(municipalities =>({
ID : municipalities.id,
muni : municipalities.municipality
})))
.catch((error) => {
console.log('The error is:', error.message);
});

export const getAllParishList = (municipalityID) => fetch(`${api}states/municipality/parish`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		param_municipality_id : municipalityID
	})
})
.then(res => res.json())
.then(chairs => chairs.map(chair =>({
	ID : chair.id,
	parish : chair.parish
})))
.catch((error) => {
	console.log('The error is:', error.message);
	});

export const getAllIdacCodesFilterVacantDateNotNullList = (execUnitIds) => fetch(`${api}IdacCodes/FilterVacantDateNotNullExec`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		param_exec_unit_ids : execUnitIds
	})
})
.then(res => res.json())
.then(idac => idac.map(idac =>({
	ID : idac.id,
	Codigo : idac.code,
	UnidejecID : idac.execunting_unit_id,
	UnidejecDesc : idac.execunting_unit
})))
.catch((error) => {
	console.log('The error is:', error.message);
});


export const getSalaryDedicationCategoryType = (dedicationID, categoryID) => fetch(`${api}Salary/CategoryType/DedicationType`,
	{
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body : JSON.stringify({
			param_dedication_id : dedicationID,
			param_category_id: categoryID
		})
	})
	.then(res => res.json())
	.catch((error) => {
		console.log('The error is:', error.message);
	});
