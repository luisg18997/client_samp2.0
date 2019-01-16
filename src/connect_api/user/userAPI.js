import axios from 'axios';
const api = axios.create({
  baseURL: process.env.URL_API || 'http://localhost:5000/users/',
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer 14154151',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export const getAllRolesList = async() => {
  const result = await api.get('Roles')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const roles = res.data.map(rol => ({
        ID: rol.id,
        label: rol.description
      }))
      return roles;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllRolesList  is:', error.message);
    return error;
  })
  console.log('getAllRolesList: ', result);
  return result;
}

export const getAllSecurityQuestionsList = async() => {
  const result = await api.get('SecurityQuestions')
    .then((res) => {
      if(res.data.messageError) {
        console.log(res.data.messageError);
        return res.data.messageError
      } else {
        console.log(res);
        const SecurityQuestions = res.data.map(SecQ => ({
          ID: SecQ.id,
          label: SecQ.description,
        }))
        return SecurityQuestions;
      }
    })
    .catch((error) => {
      console.log('The error in the call route getAllSecurityQuestionsList  is:', error.message);
      return error;
    })
    console.log('getAllSecurityQuestionsList: ', result);
    return result;
}

export const getAllUbicationsList = async() => {
  const result = await api.get('Ubications')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const ubication = res.data.map(ub => ({
        ID: ub.id,
        label: ub.name
      }))
      return ubication;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllUbicationsList  is:', error.message);
    return error;
  })
  console.log('getAllUbicationsList: ', result);
  return result;
}

export const getAllUserRoleList = async() => {
  const result = await api.get('Roles/UserRole')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      return res.data;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllUserRoleList  is:', error.message);
    return error;
  })
  console.log('getAllUserRoleList: ', result);
  return result;
}

export const addNewUser = async(userNew) => {
  const result = await api.post('NewUser', {
    param_name: userNew.name,
    param_surname: userNew.surname,
    param_email: userNew.email,
    param_password: userNew.password,
    param_ubication_id: userNew.ubication,
    param_school_id: userNew.schoolID,
    param_institute_id: userNew.instituteID,
    param_coordination_id: userNew.coordinationID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      return res.data;
    }
  })
  .catch((error) => {
    console.log('The error in the call route addNewUser  is:', error.message);
    return error;
  })
  console.log('addNewUser: ', result);
  return result;
}

export const addNewUserByAdmin = async(userNew) => {
  const result = await api.post('NewUserByAdmin', {
    param_name: userNew.name,
    param_surname: userNew.surname,
    param_email: userNew.email,
    param_password: userNew.password,
    param_ubication_id: userNew.ubication,
    param_role_user_id : userNew.roleUserID,
    param_user_id : userNew.userID,
    param_school_id: userNew.schoolID,
    param_institute_id: userNew.instituteID,
    param_coordination_id: userNew.coordinationID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      return res.data;
    }
  })
  .catch((error) => {
    console.log('The error in the call route addNewUserByAdmin  is:', error.message);
    return error;
  })
  console.log('addNewUserByAdmin: ', result);
  return result;
}

export const login = async(email, password) => {
    const result = await api.post('Login', {
      param_email: email,
      param_password: password,
    })
    .then((res) => {
      if(res.data.messageError) {
        console.log(res.data.messageError);
        return res.data.messageError
      } else {
        console.log(res);
        return res.data;
      }
    })
    .catch((error) => {
      console.log('The error in the call route login  is:', error.message);
      return error;
    })
    console.log('login: ', result);
    return result;
}

export const getALLUserValidateList = async() => {
  const result = await api.get('/Validates')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      return res.data;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getALLUserValidateList  is:', error.message);
    return error;
  })
  console.log('getALLUserValidateList: ', result);
  return result;
}
