const api = process.env.URL_API || 'http://localhost:5000/faculty/';

export const getSchoolList = () => fetch(`${api}schools`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  .then(res => res.json())
  .then(schools => schools.map(schools => ({
    ID: schools.id,
    code: schools.code,
    name: schools.school,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getAllInstituteList = () => fetch(`${api}institutes`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  .then(res => res.json())
  .then(institutes => institutes.map(institutes => ({
    ID: institutes.id,
    code: institutes.code,
    name: institutes.name,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getAllCoordinationList = () => fetch(`${api}coordinations`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  .then(res => res.json())
  .then(coordinations => coordinations.map(coordinations => ({
    ID: coordinations.id,
    code: coordinations.code,
    name: coordinations.name,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getCoordination = coordinationID => fetch(`${api}coordination`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_coordination_id: coordinationID,
    }),
  })
  .then(res => res.json())
  .then(coordination => coordination.map(coordination => ({
    ID: coordination.id,
    code: coordination.code,
    name: coordination.name,
    codeFilter: coordination.code.substr(0, 4),
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getAllDepartamentBySchoolList = schoolID => fetch(`${api}school/departaments`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_school_id: schoolID,
    }),
  })
  .then(res => res.json())
  .then(departaments => departaments.map(departaments => ({
    ID: departaments.id,
    code: departaments.code,
    name: departaments.departament,
    codeFilter: departaments.code.substr(0, 6),
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getDepartamentByInstitute = instituteID => fetch(`${api}institute/departament`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_institute_id: instituteID,
    }),
  })
  .then(res => res.json())
  .then(departaments => departaments.map(departaments => ({
    ID: departaments.id,
    code: departaments.code,
    name: departaments.departament,
    codeFilter: departaments.code.substr(0, 6),
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getAllChairList = departamentID => fetch(`${api}school/departament/chairs`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_departament_id: departamentID,
    }),
  })
  .then(res => res.json())
  .then(chairs => chairs.map(chairs => ({
    ID: chairs.id,
    code: chairs.code,
    name: chairs.chair,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getSchool = schoolID => fetch(`${api}school`,
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_school_id: schoolID,
    }),
  })
  .then(res => res.json())
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export	const getInstitute = instituteID => fetch(`${api}institute`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_institute_id: instituteID,
    }),
  })
  .then(res => res.json())
  .then(institute => institute.map(institute => ({
    ID: institute.id,
    code: institute.code,
    name: institute.name,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export	const getDepartamentBySchool = departamentID => fetch(`${api}school/departament`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_departament_id: departamentID,
    }),
  })
  .then(res => res.json())
  .then(schoolDept => schoolDept.map(schoolDept => ({
    ID: schoolDept.id,
    code: schoolDept.code,
    name: schoolDept.name,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getAllDepartamentByInstituteList = departamentID => fetch(`${api}institute/departaments`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_departament_id: departamentID,
    }),
  })
  .then(res => res.json())
  .then(instDept => instDept.map(instDept => ({
    ID: instDept.id,
    code: instDept.code,
    name: instDept.name,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export	const getChair = chairID => fetch(`${api}school/departament/chair`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_chair_id: chairID,
    }),
  })
  .then(res => res.json())
  .then(chair => chair.map(chair => ({
    ID: chair.id,
    code: chair.code,
    name: chair.chair,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });
