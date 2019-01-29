import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API_FACULTY || "http://localhost:5000/faculty/",
  timeout: 10000,
  headers: {
    'Authorization': 'Bearer 14154151',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export const getSchoolList = async() => {
  const result = await api.get('schools')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const school = res.data.map(schools => ({
        ID: schools.id,
        code: schools.code,
        label: schools.school,
      }))
      return school;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getSchoolList  is:', error.message);
    return error;
  })
  console.log('getSchoolList: ', result);
  return result;
}

export const getInstituteList = async() => {
  const result = await api.get('institutes')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const institute = res.data.map(inst => ({
        ID: inst.id,
        code: inst.code,
        label: inst.institute,
      }))
      return institute;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getInstituteList  is:', error.message);
    return error;
  })
  console.log('getInstituteList: ', result);
  return result;
}

export const getCoordinationList = async() => {
  const result = await api.get('coordinations')
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const coordination = res.data.map(coord => ({
        ID: coord.id,
        code: coord.code,
        label: coord.coordination,
      }))
      return coordination;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getCoordinationList  is:', error.message);
    return error;
  })
  console.log('getCoordinationList: ', result);
  return result;
}

export const getCoordination = async(coordinationID) => {
  const result = await api.post('coordination', {
    param_coordination_id: coordinationID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const coordination = res.data.map(coord => ({
        ID: coord.id,
        code: coord.code,
        name: coord.name,
        codeFilter: coord.code.substr(0, 4),
      }))
      return coordination;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getCoordination  is:', error.message);
    return error;
  })
  console.log('getCoordination: ', result);
  return result;
}

export const getAllDepartamentBySchoolList = async(schoolID) => {
  const result = await api.post('school/departaments', {
    param_school_id: schoolID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const departament = res.data.map(dept => ({
        ID: dept.id,
        code: dept.code,
        label: dept.departament,
        codeFilter: dept.code.substr(0, 6),
      }))
      return departament;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllDepartamentBySchoolList  is:', error.message);
    return error;
  })
  console.log('getAllDepartamentBySchoolList: ', result);
  return result;
}

export const getDepartamentByInstitute = async(instituteID) => {
  const result = await api.post('institute/departament', {
    param_institute_id: instituteID,
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
    console.log('The error in the call route getDepartamentByInstitute  is:', error.message);
    return error;
  })
  console.log('getDepartamentByInstitute: ', result);
  return result;
}

export const getAllChairList = async(departamentID) => {
  const result = await api.post('school/departament/chairs',{
    param_departament_id: departamentID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const chair = res.data.map(cha => ({
        ID: cha.id,
        code: cha.code,
        label: cha.chair,
        codeFilter: cha.code,
      }))
      return chair;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllChairList  is:', error.message);
    return error;
  })
  console.log('getAllChairList: ', result);
  return result;
}
export const getSchool = async(schoolID) => {
  const result = await api.post('school', {
    param_school_id: schoolID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const school = {
        ID : res.data.id,
  			code : res.data.code,
  			name : res.data.name,
  			codeFilter : res.data.code.substr(0, 4)
      }
      return school;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getSchool  is:', error.message);
    return error;
  })
  console.log('getSchool: ', result);
  return result;
}

export	const getInstitute = async(instituteID) => {
  const result = await api.post('institute', {
    param_institute_id: instituteID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const institute = res.data.map(inst => ({
        ID: inst.id,
        code: inst.code,
        name: inst.institute,
  			codeFilter : inst.code.substr(0, 4)
      }))
      return institute;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getInstitute  is:', error.message);
    return error;
  })
  console.log('getInstitute: ', result);
  return result;
}

export	const getDepartamentBySchool = async(departamentID) => {
  const result = await api.post('school/departament', {
    param_departament_id: departamentID
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
    console.log('The error in the call route getDepartamentBySchool  is:', error.message);
    return error;
  })
  console.log('getDepartamentBySchool: ', result);
  return result;
}

export const getAllDepartamentByInstituteList = async(departamentID) => {
  const result = await api.post('institute/departaments', {
    param_departament_id: departamentID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      const departament = res.data.map(dept => ({
        ID: dept.id,
        code: dept.code,
        name: dept.departament,
        codeFilter: dept.code.substr(0, 6),
      }))
      return departament;
    }
  })
  .catch((error) => {
    console.log('The error in the call route getAllDepartamentByInstituteList  is:', error.message);
    return error;
  })
  console.log('getAllDepartamentByInstituteList: ', result);
  return result;
}
export	const getChair = async(chairID) => {
  const result = await api.post('school/departament/chair',{
      param_chair_id: chairID,
  })
  .then((res) => {
    if(res.data.messageError) {
      console.log(res.data.messageError);
      return res.data.messageError
    } else {
      console.log(res);
      return res.data
    }
  })
  .catch((error) => {
    console.log('The error in the call route getChair  is:', error.message);
    return error;
  })
  console.log('getChair: ', result);
  return result;
}
