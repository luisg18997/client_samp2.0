const api = process.env.URL_API || 'http://localhost:5000/form/';

export const getAllMovementTypeslist = () => fetch(`${api}MovementTypes`,
{
	method: 'GET',
	headers: { 
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
	
})
.then(res => res.json())
.then(MovementTypes => MovementTypes.map(MovementTypes =>({
	ID : MovementTypes.id,
	name : MovementTypes.description
})))
.catch((error) => {
	console.log('The error is:', error.message);
});

export const addNewFormOfice = (employee, ofice, userID, employeeId) => fetch(`${api}ofice/addOfice`,
{
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		param_employee : employee,
		param_form_ofice : ofice,
		param_user_id : userID,
		param_employee_id : employeeId
	})
})
.then(res => res.json())
.catch((error) => {
	console.log('The error is:', error.message);
});

export const CodeOfice = (schoolID, instituteID, coordinationID) => fetch(`${api}ofice/CodeOfice`,
{
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		param_school_id : schoolID,
		param_institute_id : instituteID,
		param_coordination_id : coordinationID
	})
})
.then(res => res.json())
.catch((error) => {
	console.log('The error is:', error.message);
});

export const codeMovPer = (schoolID, instituteID, coordinationID) => fetch(`${api}MovPersonal/CodeMovPer`,
{
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		param_school_id : schoolID,
		param_institute_id : instituteID,
		param_coordination_id : coordinationID
	})
})
.then(res => res.json())
.catch((error) => {
	console.log('The error is:', error.message);
});
