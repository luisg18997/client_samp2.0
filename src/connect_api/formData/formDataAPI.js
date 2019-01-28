import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API_FORM || "http://localhost:5000/form/",
  timeout: 10000,
  headers: {
    'Authorization': 'Bearer 14154151',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export const getAllMovementTypeslist = async() => {
  const result = await api.get('MovementTypes')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const MovementTypes =  res.data.map(MovTp => ({
        ID: MovTp.id,
        label: MovTp.description,
      }));
      return MovementTypes;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllMovementTypeslist  is:', error.message);
    return error;
  });
  console.log('getAllMovementTypeslist: ', result);
  return result;
}

export const addNewFormOfice = async(employee, ofice, userID, employeeId) => {
  const result = await api.post('ofice/addOfice', {
    param_employee: employee,
    param_form_ofice: ofice,
    param_user_id: userID,
    param_employee_id: employeeId,
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
    console.log('The error in the call route addNewFormOfice  is:', error.message);
    return error;
  });
  console.log('addNewFormOfice: ', result);
  return result;
}

export const addNewFormMorPersonal = async(employee, movPersonal, userID, employeeSalaryId) => {
  const result = await api.post('movPersonal/addMovementPeronsal', {
    param_employee: employee,
    param_form_movement_personal: movPersonal,
    param_user_id: userID,
    param_employee_salary_id: employeeSalaryId,
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
    console.log('The error in the call route addNewFormMorPersonal  is:', error.message);
    return error;
  });
  console.log('addNewFormMorPersonal: ', result);
  return result;
}

export const CodeOfice = async(schoolID, instituteID, coordinationID) => {
  const result = await api.post('ofice/CodeOfice', {
    param_school_id: schoolID,
    param_institute_id: instituteID,
    param_coordination_id: coordinationID,
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
    console.log('The error in the call route CodeOfice  is:', error.message);
    return error;
  });
  console.log('CodeOfice: ', result);
  return result;
}

export const codeMovPer = async(schoolID, instituteID, coordinationID, code) => {
  const result = await api.post('MovPersonal/CodeMovPer', {
    param_school_id: schoolID,
    param_institute_id: instituteID,
    param_coordination_id: coordinationID,
    param_code: code,
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
    console.log('The error in the call route CodeOfice  is:', error.message);
    return error;
  });
  console.log('CodeOfice: ', result);
  return result;
}

export const getFormsList = async (ubicationID, ubicationFormID) => {
  const result = await api.post('list',
 {
   param_ubication_id: ubicationID,
   param_ubication_form_id: ubicationFormID,
 })
 .then((res) =>{
   if(res.data.messageError) {
     console.log(res.data.messageError);
     return res.data.messageError
   } else {
     console.log(res);
     return res.data;
   }
 })
 .catch((error) => {
   console.log('The error in the call route getFormsList is:', error.message);
   return error;
 });
 console.log('result: ', result);
 return result;
}

export const getFormOficesList = async(schoolID, instituteID, coordinationID) => {
  const result = await api.post('ofice/list', {
    param_school_id: schoolID,
    param_institute_id: instituteID,
    param_coordination_id: coordinationID,
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
    console.log('The error in the call route getFormOficesList  is:', error.message);
    return error;
  });
  console.log('getFormOficesList: ', result);
  return result;
}

export const getFormMovPersonal = async(identification, ubication) => {
  const result = await api.post('movPersonal', {
    param_identification: identification,
    param_ubication_id : ubication
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
    console.log('The error in the call route getFormMovPersonal  is:', error.message);
    return error;
  });
  console.log('getFormMovPersonal: ', result);
  return result;
}

  export const getFormOfficial = async(identification, ubication) => {
    const result = await api.post('official', {
      param_identification: identification,
      param_ubication_id : ubication
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
      console.log('The error in the call route getFormOfficial  is:', error.message);
      return error;
    });
    console.log('getFormOfficial: ', result);
    return result;
  }
