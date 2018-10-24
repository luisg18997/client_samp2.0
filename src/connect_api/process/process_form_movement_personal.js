fetch('${api}MovementPersonal/ProcessFormMovementPersonal',
	{method:'GET', headers: {'Content-Type': 'applicaction/2json'}})
	.then (res => res.json())
	.then((data) => {
		if(data.messageError || data.parambad){
			console.log(data);
			return data;
		} else{
			return data
		}
	})
	.then(MovementPersonal/ProcessFormMovementPersonal => MovementPersonal/ProcessFormMovementPersonal.map(MovementPersonal/ProcessFormMovementPersonal => ({
		ID: MovementPersonal/ProcessFormMovementPersonal.id,
		Form: MovementPersonal/ProcessFormMovementPersonal.form_movement_personal,
		Ubication: MovementPersonal/ProcessFormMovementPersonal.ubication_id,
		Status: MovementPersonal/ProcessFormMovementPersonal.status_process_form_id,
		Active: MovementPersonal/ProcessFormMovementPersonal.is_active,
		Deleted: MovementPersonal/ProcessFormMovementPersonal.is_deleted,
		Last_modified: MovementPersonal/ProcessFormMovementPersonal.last_modified_by,
		Last_modified_data: MovementPersonal/ProcessFormMovementPersonal.last_modified_date
	})))
	.catch((error) => {
		console.log('The error is:', error.message);
	});