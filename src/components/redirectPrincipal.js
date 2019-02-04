import {
	login
  } from '../connect_api/user/userAPI';

  export const AuthLogin = async(email, password, props) => {
    console.log('email: ', email, " password: ", password);
    const result =  await login(email, password);
    console.log("user: ", result);
    console.log("Object.keys(result): ", Object.keys(result)[0]);
    if(Object.keys(result)[0] === 'claveInv') {
      console.log(result.claveInv);
      alert(result.claveInv);
    } else if (Object.keys(result)[0] === "emailNotExist") {
      console.log(result.emailNotExist);
      alert(result.emailNotExist);
      if(window.confirm('¿Desea registrarse en el sistema SAMP?')){
        props.history.replace('/Registro');
      } else {
        props.history.replace('/');
      }
    } else {
      localStorage.setItem('ucv_fhe_jwt', result.token);
      if (result.data.isActive !== '1' && result.data.isDeleted === '0') {
        alert('usuario bloqueado contacte el administrador')
      } else if (result.data.isDeleted === '1') {
        alert('usuario eliminado');
      } else if (result.data.question.id === 0 && result.data.question.description === null){
				props.history.replace('/PreguntaSeguridad', { password , result});
			}
    }
  }
