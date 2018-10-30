const api = process.env.URL_API || 'http://localhost:5000/employee/';





export const getAllGenderList = () => fetch(`${api}Genders`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(gender => gender.map(gender =>({
		ID : gender.id,
		Gender : gender.gender
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});


export const getAllCategoryTypesList = () => fetch(`${api}CategoryTypes`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(CategoryTypes => CategoryTypes.map(CategoryTypes =>({
		ID : CategoryTypes.id,
		name : CategoryTypes.category_type
		})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

  	export const getAllDedicationTypesList = () => fetch(`${api}DedicationTypes`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(DedicationTypes => DedicationTypes.map(DedicationTypes =>({
		ID : DedicationTypes.id,
		dedi : DedicationTypes.dedication_type
		})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});



export const getAllExecuntingUnitList = () => fetch(`${api}ExecuntingUnitlist`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(ExecuntingUnitlist => ExecuntingUnitlist.map(ExecuntingUnitlist =>({
		ID : ExecuntingUnitlist.id,
		des : ExecuntingUnitlist.execunting_unit
		})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

export const getAllNacionalitiesList = () => fetch(`${api}Nacionalities`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(Nacionalities => Nacionalities.map(Nacionalities =>({
		ID : Nacionalities.id,
		Name : Nacionalities.nacionality
		})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

export const getAllIngressList = () => fetch(`${api}Ingress`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(Ingress => Ingress.map(Ingress =>({
		id : Ingress.id,
		Ingress : Ingress.ingres
		})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});



export const getAllIncomeTypeList = () => fetch(`${api}IncomeType`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(IncomeType => IncomeType.map(IncomeType =>({
		ID : IncomeType.id,
		income : IncomeType.income_type
		})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});


  export const postMovPer = (data) => {
	const result = data;
	console.log('result: ', result);
}

export const getAllStatesList = () => fetch(`${api}states`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
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
