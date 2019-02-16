import {
	login
  } from '../connect_api/user/userAPI';
	import axios from 'axios';
	const api = axios.create({
	  baseURL: process.env.REACT_APP_URL_API || "http://localhost:5000/",
	  timeout: 10000,
	  headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json'
	  }
	})

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
					console.log(result.data.ubication);
					this.redirect(result.data.ubication.id, props)
				}
	    }
	  }

		loggedIn = async() => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // Getting token from localstorage
				let tokenValidate;
				if (token=== null) {
					tokenValidate = false;
				} else {
					tokenValidate = true
				}
				const isTokenExpired = await this.isTokenExpired(token);
       return tokenValidate && !isTokenExpired // handwaiving here
    }

		setToken = (idToken) => {
        // Saves user token to localStorage
        localStorage.setItem('ucv_fhe_jwt', idToken)
    }

    getToken = () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem('ucv_fhe_jwt')
    }

		isTokenExpired = async(token) => {
			const result = await api.post('checkIsTokenExpired', {
				token : this.getToken()
			})
			.then((res) => {
		    if(res.data.messageError) {
		      console.log(res.data.messageError);
		      return res.data.messageError
		    } else {
		      console.log("checkIsTokenExpired: ", res);
		      return res.data.exp;
		    }
		  })
		  .catch((error) => {
		    console.log('The error in the call route checkIsTokenExpired  is:', error.message);
		    return error;
		  })
			console.log('checkIsTokenExpired: ', result);
		  return result;
		}

    logout = (props) => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('ucv_fhe_jwt');
				props.history.replace('/');
    }

		ObtainData = async(token, props) => {
			 if (!!this.isTokenExpired()) {
				 const result = await api.post('ObtainData', {
					 token : this.getToken()
				 })
				 .then((res) => {
	 		    if(res.data.messageError) {
	 		      console.log(res.data.messageError);
	 		      return res.data.messageError
	 		    } else {
	 		      console.log("ObtainData: ", res);
	 		      return res.data;
	 		    }
	 		  })
	 		  .catch((error) => {
	 		    console.log('The error in the call route ObtainData  is:', error.message);
	 		    return error;
	 		  })
	 			console.log('ObtainData: ', result);
			return result;
		}
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
			 case 5: {
				 props.history.replace('/RRHH');
				 break;
			 }
			 case 6: {
				 props.history.replace('/Prespuesto');
				 break;
			 }
			 default:
				 props.history.replace('/');
			}
		}
	}

  export default Authorization;
