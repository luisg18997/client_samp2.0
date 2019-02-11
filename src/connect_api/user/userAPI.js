import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API_USER || "http://localhost:5000/users/",
  timeout: 10000,
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
  console.log(process.env);
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

export const updateUserValidate = async(userID, userRoleID, roleID, isActive, isDeleted, userId) => {
    const result = await api.post('Validate/update', {
      param_id: userID,
      param_user_role_id: userRoleID,
      param_role_id: roleID,
      param_is_active: isActive,
      param_is_deleted: isDeleted,
      param_user_id: userId
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
      console.log('The error in the call route updateUserValidate  is:', error.message);
      return error;
    })
    console.log('updateUserValidate: ', result);
    return result;
}

export const getUser = async(userID) => {
  const result = await api.post('', {
    param_user_id : userID
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
    console.log('The error in the call route getUser  is:', error.message);
    return error;
  })
  console.log('getUser: ', result);
  return result;
}

export const getALLUserList = async() => {
  const result = await api.get('/List')
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
    console.log('The error in the call route getALLUserList  is:', error.message);
    return error;
  })
  console.log('getALLUserList: ', result);
  return result;
}

export const updateUserAnswer = async(answerID, userID, questionID, answer) => {
  const result = await api.post('SecurityAnswer/update', {
    param_id: answerID,
    param_user_id : userID,
    param_question_id: questionID,
    param_answer : answer
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
    console.log('The error in the call route updateUserAnswer  is:', error.message);
    return error;
  })
  console.log('updateUserAnswer: ', result);
  return result;
}

export const updateUserPassword = async(userID, password) => {
  const result = await api.post('Password/update', {
    param_id: userID,
    param_password : password
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
    console.log('The error in the call route updateUserPassword  is:', error.message);
    return error;
  })
  console.log('updateUserPassword: ', result);
  return result;
}

export const getUserForChangePassword = async(email) => {
  const result = await api.post('getChangePassword', {
    param_user_id : email
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
    console.log('The error in the call route getUserForChangePassword  is:', error.message);
    return error;
  })
  console.log('getUserForChangePassword: ', result);
  return result;
}
