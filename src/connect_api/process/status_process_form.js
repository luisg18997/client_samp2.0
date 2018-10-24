fetch('${api}StatusProcess/StatusProcessForm',
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
	.then(StatusProcess/StatusProcessForm => StatusProcess/StatusProcessForm.map(StatusProcess/StatusProcessForm => ({
		ID: StatusProcess/StatusProcessForm.id,
		Description: StatusProcess/StatusProcessForm.description,
		Active: Office/ProcessFormOfice.is_active,
		Deleted: Office/ProcessFormOfice.is_deleted,
		Last_modified: Office/ProcessFormOfice.last_modified_by,
		Last_modified_data: Office/ProcessFormOfice.last_modified_date
	})))
	.catch((error) => {
		console.log('The error is:', error.message);
	});