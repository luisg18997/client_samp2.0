import axios from 'axios';
const api = axios.create({
  baseURL: process.env.URL_API || 'http://localhost:5000/process/',
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer 14154151',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export const updateAllColumnsProcessOfficialForm = async(processID, userID, officialFormID, ubicationID,
  statusProcessFormID, isActive, isDeleted) => {
  await api.post('OfficialForm/UpdatAllColumns',
  {
    param_process_id: processID,
    param_user_id: userID,
    param_official_form_id: officialFormID,
    param_ubication_id : ubicationID,
    param_status_process_form_id: statusProcessFormID,
    param_is_active: isActive,
    param_is_deleted: isDeleted,
  })
  .then((res) => {
    if(res.messageError) {
      return res.messageError;
    } else {
      console.log(res);
      return res;
    }
  })
  .catch((error) => {
    console.log('The error in the call route updateAllColumnsProcessOfficialForm  is:', error.message);
  })
}

export const updateAllColumnsProcessMovPersonalForm = async(processID, userID, movPersonalFormID, ubicationID,
  statusProcessFormID, isActive, isDeleted) => {
  await api.post('MovPersonalForm/UpdatAllColumns',
  {
    param_process_id: processID,
    param_user_id: userID,
    param_mov_personal_form_id: movPersonalFormID,
    param_ubication_id : ubicationID,
    param_status_process_form_id: statusProcessFormID,
    param_is_active: isActive,
    param_is_deleted: isDeleted,
  })
  .then((res) => {
    if(res.messageError) {
      return res.messageError;
    } else {
      return res.data;
    }
  })
  .catch((error) => {
    console.log('The error in the call route updateAllColumnsProcessOfficialForm  is:', error.message);
  })
}
