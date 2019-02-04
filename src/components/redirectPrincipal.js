import {
	login
  } from '../connect_api/user/userAPI';

	class Authorization {
		AuthLogin = async(email, password, props) => {
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
	      this.setToken(result.token);
	      if (result.data.isActive !== '1' && result.data.isDeleted === '0') {
	        alert('usuario bloqueado contacte el administrador')
	      } else if (result.data.isDeleted === '1') {
	        alert('usuario eliminado');
	      } else if (result.data.question.id === 0 && result.data.question.description === null){
					props.history.replace('/PreguntaSeguridad', { password , result});
				} else {

				}
	    }
	  }

		loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // Getting token from localstorage
        return !!token  // handwaiving here
    }

		setToken = (idToken) => {
        // Saves user token to localStorage
        localStorage.setItem('ucv_fhe_jwt', idToken)
    }

    getToken = () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem('ucv_fhe_jwt')
    }

    logout = (props) => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('ucv_fhe_jwt');
				props.history.replace('/');
    }

		redirect = (ubication, props) => {
			switch (ubication) {
			 case 1: {
				 props.history.replace('/Admin');
				 break;
			 }
			 case 2: {
				 props.history.replace('/Escuela');
				 break;
			 }
			 case 3: {
				 props.history.replace('/RRHH');
				 break;
			 }
			 case 4: {
				 props.history.replace('/Prespuesto');
				 break;
			 }
			 default:
				 props.history.replace('/');
			}
		}
	}

  export default Authorization;
