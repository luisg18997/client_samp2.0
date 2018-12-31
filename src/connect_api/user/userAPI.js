const api = process.env.URL_API || 'http://localhost:5000/users/';

export const getAllRolesList = () => fetch(`${api}Roles`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  .then(res => res.json())
  .then(roles => roles.map(roles => ({
    ID: roles.id,
    ROL: roles.description,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getAllSecurityQuestionsList = () => fetch(`${api}SecurityQuestions`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  .then(res => res.json())
  .then(SecurityQuestions => SecurityQuestions.map(SecurityQuestions => ({
    ID: SecurityQuestions.id,
    Pregunta: SecurityQuestions.description,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getAllUbicationsList = () => fetch(`${api}Ubications`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  .then(res => res.json())
  .then(Ubications => Ubications.map(Ubications => ({
    ID: Ubications.id,
    Ubicacion: Ubications.name,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const getAllUserRoleList = () => fetch(`${api}Roles/UserRole`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  .then(res => res.json())
  .then(UserRole => UserRole.map(UserRole => ({
    ID: UserRole.id,
    name: UserRole.name,
    description: UserRole.description,
  })))
  .catch((error) => {
    console.log('The error is:', error.message);
  });

export const addNewUser = userNew => fetch(`${api}NewUser`,
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      param_name: userNew.name,
      param_surname: userNew.surname,
      param_email: userNew.email,
      param_password: userNew.password,
      param_ubication_id: userNew.ubication,
      param_school_id: userNew.schoolID,
      param_institute_id: userNew.instituteID,
      param_coordination_id: userNew.coordinationID,
    }),
  })
  .then(res => res.json())
  .catch((error) => {
    console.log('The error is:', error.message);
  });

  export const login = (email, password) => fetch(`${api}Login`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        param_email: email,
        param_password: password,
      }),
    })
    .then(res => res.json())
    .catch((error) => {
      console.log('The error is:', error.message);
    });
