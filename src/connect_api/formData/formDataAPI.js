import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API_FORM || "http://localhost:5000/form/",
  timeout: 10000,
  headers: {
    'Authorization':localStorage.getItem('ucv_fhe_jwt') !== null?`Bearer ${localStorage.getItem('ucv_fhe_jwt')}`: '',
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

export const getAllAccountantTypeslist = async() => {
  const result = await api.get('accountantTypes')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const accountantTypes =  res.data.map(CountTy => ({
        ID: CountTy.id,
        label: CountTy.code,
      }));
      return accountantTypes;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllAccountantTypeslist  is:', error.message);
    return error;
  });
  console.log('getAllAccountantTypeslist: ', result);
  return result;
}

export const getAllProgramTypeslist = async() => {
  const result = await api.get('programTypes')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const programTypes =  res.data.map(progTy => ({
        ID: progTy.id,
        label: progTy.code,
      }));
      return programTypes;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllProgramTypeslist  is:', error.message);
    return error;
  });
  console.log('getAllProgramTypeslist: ', result);
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

export const getFormsList = async (ubicationID) => {
  const result = await api.post('list',
 {
   param_ubication_id: ubicationID,
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

export const updateOfficialApproval = async(officialID, officialProcessID, ubicationID, statusProcessFormID, observation, isActive, isDeleted, userID) => {
  const result = await api.post('official/updateApproval', {
    param_id: officialID,
    param_official_form_process_id: officialProcessID,
    param_ubication_id: ubicationID,
    param_status_process_form_id: statusProcessFormID,
    param_observation: observation,
    param_is_active: isActive,
    param_is_deleted: isDeleted,
    param_user_id: userID
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
    console.log('The error in the call route updateOfficialApproval  is:', error.message);
    return error;
  });
  console.log('updateOfficialApproval: ', result);
  return result;
};

export const updateMovPersonalApproval = async(movPersonalID, movPersonalProcessID, employeeID, movementTypeID, ubicationID, statusProcessFormID, accountatTypeID, programID, observation, isActive, isDeleted, userID) => {
  const result = await api.post('movPersonal/updateApproval', {
    param_id: movPersonalID,
    param_mov_personal_form_process_id: movPersonalProcessID,
    param_employee_id : employeeID,
    param_movement_type_id : movementTypeID,
    param_ubication_id: ubicationID,
    param_status_process_form_id: statusProcessFormID,
    param_accountant_type_id : accountatTypeID,
    param_progam_type_id :  programID,
    param_observation: observation,
    param_is_active: isActive,
    param_is_deleted: isDeleted,
    param_user_id: userID
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
    console.log('The error in the call route updateMovPersonalApproval  is:', error.message);
    return error;
  });
  console.log('updateMovPersonalApproval: ', result);
  return result;
};

export const getOfficialFormApprovalList = async(ubicationID, schoolID, instituteID, coordinationID) => {
  const result = await api.post('official/approval/list', {
    param_ubication_id : ubicationID,
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
    console.log('The error in the call route getOfficialFormApprovalList  is:', error.message);
    return error;
  });
  console.log('getOfficialFormApprovalList: ', result);
  return result;
}

export const getOfficialFormRejectedList = async(ubicationID, schoolID, instituteID, coordinationID) => {
  const result = await api.post('official/rejected/list', {
    param_ubication_id : ubicationID,
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
    console.log('The error in the call route getOfficialFormRejectedList  is:', error.message);
    return error;
  });
  console.log('getOfficialFormRejectedList: ', result);
  return result;
}

export const getFormsStatusList = async  (schoolID, instituteID, coordinationID) => {
  const result = await api.post('status/list',
 {
   param_school_id: schoolID,
   param_institute_id: instituteID,
   param_coordination_id: coordinationID
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
   console.log('The error in the call route getFormsStatusList is:', error.message);
   return error;
 });
 console.log('result: ', result);
 return result;
}

export const getMovPersonalFormApprovalList = async(ubicationID, schoolID, instituteID, coordinationID) => {
  const result = await api.post('movPersonal/approval/list', {
    param_ubication_id : ubicationID,
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
    console.log('The error in the call route getMovPersonalFormApprovalList  is:', error.message);
    return error;
  });
  console.log('getMovPersonalFormApprovalList: ', result);
  return result;
}

export const getMovPersonalFormRejectedList = async(ubicationID, schoolID, instituteID, coordinationID) => {
  const result = await api.post('movPersonal/rejected/list', {
    param_ubication_id : ubicationID,
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
    console.log('The error in the call route getMovPersonalFormRejectedList  is:', error.message);
    return error;
  });
  console.log('getMovPersonalFormRejectedList: ', result);
  return result;
}
