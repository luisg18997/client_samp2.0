import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API_EMPLOYEE || "http://localhost:5000/employee/",
  timeout: 10000,
  headers: {
    'Authorization':localStorage.getItem('ucv_fhe_jwt') !== null?`Bearer ${localStorage.getItem('ucv_fhe_jwt')}`: '',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export const getAllGenderList = async() => {
  const result = await api.get('Genders')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const gender = res.data.map(gender => ({
        ID: gender.id,
        label: gender.gender,
      }))
      return gender;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllGenderList  is:', error.message);
    return error;
  })
  console.log('getAllGenderList: ', result);
  return result;
}

export const getAllCategoryTypesList = async() => {
  const result = await api.get('CategoryTypes')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const category = res.data.map(CatgTypes => ({
        ID: CatgTypes.id,
        label: CatgTypes.category_type,
      }))
      return category;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllCategoryTypesList  is:', error.message);
    return error;
  })
  console.log('getAllCategoryTypesList: ', result);
  return result;
}

export const getAllDedicationTypesList = async() => {
  const result = await api.get('DedicationTypes')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const DedicationType = res.data.map(DedTypes => ({
        ID: DedTypes.id,
        label: DedTypes.dedication_type,
      }))
      return DedicationType;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllDedicationTypesList  is:', error.message);
    return error;
  })
  console.log('getAllDedicationTypesList: ', result);
  return result;
}

export const getAllExecuntingUnitListFilter = async(codeFilter) => {
  const result = await api.post('ExecuntingUnits/Filter', {
    param_code_filter: codeFilter,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const execuntingUnit = res.data.map(Exec => ({
        ID: Exec.id,
        label: Exec.execunting_unit,
        code: Exec.code
      }))
      return execuntingUnit;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllExecuntingUnitListFilter  is:', error.message);
    return error;
  })
  console.log('getAllExecuntingUnitListFilter: ', result);
  return result;
}

export const getAllNacionalitiesList = async() => {
  const result = await api.get('Nacionalities')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const nacionality = res.data.map(Nac => ({
        ID: Nac.id,
        label: Nac.nacionality,
      }))
      return nacionality;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllNacionalitiesList  is:', error.message);
    return error;
  })
  console.log('getAllNacionalitiesList: ', result);
  return result;
}

export const getAllDocumentationList = async() => {
  const result = await api.get('Documentations')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const documentation = res.data.map(doc => ({
        ID: doc.id,
        label: doc.documentation,
      }))
      return documentation;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllDocumentationList  is:', error.message);
    return error;
  })
  console.log('getAllDocumentationList: ', result);
  return result;
}

export const getAllIngressList = async() => {
  const result = await api.get('Ingress')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const ingres = res.data.map(Ing => ({
        ID: Ing.id,
        label: Ing.ingres,
      }))
      return ingres;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllIngressList  is:', error.message);
    return error;
  })
  console.log('getAllIngressList: ', result);
  return result;
}

export const getAllIncomeTypeList = async() => {
  const result = await api.get('IncomeTypes')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const IncomeType = res.data.map(IncomeType => ({
        ID: IncomeType.id,
        label: IncomeType.income_type,
      }))
      return IncomeType;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllIncomeTypeList  is:', error.message);
    return error;
  })
  console.log('getAllIncomeTypeList: ', result);
  return result;
}

export const getAllStatesList = async() => {
  const result = await api.get('states')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res.data);
      const state = res.data.map(stt => ({
        ID: stt.id,
        label: stt.state,
      }));
      return state;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllStatesList  is:', error.message);
    return error;
  })
  console.log('getAllStatesList: ', result);
  return result;
}

export const getAllMunicipalitiesList = async(stateID) => {
  const result = await api.post('states/municipalities', {
    param_state_id: stateID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const municipality = res.data.map(mun => ({
        ID: mun.id,
        label: mun.municipality,
      }))
      return municipality;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllMunicipalitiesList  is:', error.message);
    return error;
  })
  console.log('getAllMunicipalitiesList: ', result);
  return result;
}

export const getAllParishList = async(municipalityID) => {
  const result = await api.post('states/municipality/parish', {
    param_municipality_id: municipalityID
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const chair = res.data.map(chair => ({
        ID: chair.id,
        label: chair.parish,
      }))
      return chair;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllParishList  is:', error.message);
    return error;
  })
  console.log('getAllParishList: ', result);
  return result;
}

export const getAllIdacCodesFilterVacantDateNotNullList = async(execUnitIds) => {
  const result = await api.post('IdacCodes/FilterVacantDateNotNullExec', {
    param_exec_unit_ids: execUnitIds
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const idac = res.data.map(idac => ({
        ID: idac.id,
        label: idac.code,
        UnidejecID: idac.execunting_unit_id,
        UnidejecDesc: idac.execunting_unit,
      }))
      return idac;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllIdacCodesFilterVacantDateNotNullList  is:', error.message);
    return error;
  })
  console.log('getAllIdacCodesFilterVacantDateNotNullList: ', result);
  return result;
}

export const getSalaryDedicationCategoryType = async(dedicationID, categoryID) => {
  const result = await api.post('Salary/CategoryType/DedicationType', {
    param_dedication_id: dedicationID,
    param_category_id: categoryID,
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
    console.log('The error in the call route getSalaryDedicationCategoryType  is:', error.message);
    return error;
  })
  console.log('getSalaryDedicationCategoryType: ', result);
  return result;
}

export const getEmployeesList = async(schoolID, instituteID, coordinationID) => {
  const result = await api.post('list',{
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
    console.log('The error in the call route getEmployeesList  is:', error.message);
    return error;
  })
  console.log('getEmployeesList: ', result);
  return result;
}
