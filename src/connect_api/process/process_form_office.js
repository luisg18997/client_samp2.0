fetch('${api}Office/ProcessFormOfice',
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
	.then(Office/ProcessFormOfice => Office/ProcessFormOfice.map(Office/ProcessFormOfice => ({
		ID: Office/ProcessFormOfice.id,
		Form: Office/ProcessFormOfice.form_office,
		Date: Office/ProcessFormOfice.date_made,
		Ubication: Office/ProcessFormOfice.ubication_id,
		Status: Office/ProcessFormOfice.status_process_form_id,
		Active: Office/ProcessFormOfice.is_active,
		Deleted: Office/ProcessFormOfice.is_deleted,
		Last_modified: Office/ProcessFormOfice.last_modified_by,
		Last_modified_data: Office/ProcessFormOfice.last_modified_date
	})))
	.catch((error) => {
		console.log('The error is:', error.message);
	});