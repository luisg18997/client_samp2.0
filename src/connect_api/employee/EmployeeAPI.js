const api = process.env.URL_API || 'http://localhost:5000/employee/';




export const getAllStatesList = () => fetch(`${api}states`,
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(states => states.map(states =>({
		ID : states.id,
		name : states.state
	})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});

  	export const postMovPer = (data) => {
	const result = data;
	console.log('result: ', result);
}

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


export const getAllExecuntingUnitList = () => fetch(`${api}ExecuntingUnitlist`, 
	{ method: 'GET', headers: { 'Content-Type': 'application/json' } })
	.then(res => res.json())
	.then(ExecuntingUnitlist => ExecuntingUnitlist.map(ExecuntingUnitlist =>({
		ID : ExecuntingUnitlist.id,
		name : ExecuntingUnitlist.execunting_unit
		})))
	.catch((error) => {
    	console.log('The error is:', error.message);
  	});
