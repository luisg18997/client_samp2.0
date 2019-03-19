import validator from 'validator';
import passwordValidator from 'password-validator';
import moment from 'moment';

export const validateEmail = (data, name,focus) => {
  console.log(focus);
  if (!validator.isEmpty(data.value)){
    if(!validator.isEmail(data.value)){
      alert('Correo no Valido')
      focus = true
    } else {
      focus = false
    }
  } else  {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validateEmpty = (data, name,focus, validate) => {
  if (validator.isEmpty(data.value)){
    if(data.required=== true && focus === false) {
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  } else {
    focus = false
  }
  console.log(focus);
  return focus;
}

export const validateText = (data, name,focus) => {
  if (!validator.isEmpty(data.value)){
    console.log(validator.isAlpha(data.value));
    if(!validator.isAlpha(data.value)){
      alert('El campo: '+ name +' No puede Contener Numero ni espacio en Blanco')
      focus = true
    } else {
      focus = false
    }
  } else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validatePassword = (data, name, focus) => {
  const schema = new passwordValidator();
  schema
  .is().min(8)
  .is().max(100)
  .has().digits()
  .has().letters()
  .has().lowercase()
  .has().uppercase()
  .has().symbols()
  .has().not().spaces()
  .is().not().oneOf(['Passw0rd', 'Password123','ucvfhe123']);
  console.log(schema.validate(data.value));
  if(!validator.isEmpty(data.value)){
    if(!schema.validate(data.value)){
      alert('La contraseña debe tener al menos un Digito, letra en Mayuscula, Minuscula, un caracter especial y debe ser minimo 8 de longitud')
      focus = true
    } else {
      focus = false
    }
  } else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validatePasswordConfirm = (data,password, name ,focus) => {
  if(!validator.isEmpty(data.value)){
    if(!validator.equals(data.value, password)){
      alert('Las contraseñas no coinciden')
      focus = true
    } else {
      focus = false
    }
  } else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validateInt = (data, name, focus) => {
  if(!validator.isEmpty(data.value)){
    if(!validator.isInt(data.value)){
      alert('El campo: '+ name +' No puede Contener Letras ni espacio en Blanco')
      focus = true
    } else {
      focus = false
    }
  } else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validatePhoneNumber = (data, name, focus) => {
  if(!validator.isEmpty(data.value)){
    if(!validator.isInt(data.value)){
      alert('El campo: '+ name +' No puede Contener Letras ni espacio en Blanco')
      focus = true
    } else {
      const validePhone = data.value.search('04');
      if (validePhone === -1) {
        alert('Numero de telefono movil no es el correcto');
        focus = true
      } else {
        focus = false
      }
    }
  }else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validateLocalPhoneNumber = (data, name, focus) => {
  if(!validator.isEmpty(data.value)){
    if(!validator.isInt(data.value)){
      alert('El campo: '+ name +' No puede Contener Letras ni espacio en Blanco')
      focus = true
    } else {
      const validePhone = data.value.search('02');
      if (validePhone === -1) {
        alert('Numero de telefono Local no es el correcto');
        focus = true
      } else {
        focus = false
      }
    }
  }else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validateBirthDate = (data, name, focus) => {
  if(!validator.isEmpty(data.value)){
    const date = moment(data.value).format('YYYY-MM-DD');
    const today= moment().format('YYYY-MM-DD');
    console.log(today);
    console.log(moment(date).isValid());
    if(moment(date).isValid()) {
      let datePermite = moment(today).subtract(18,'years');
      datePermite = moment(datePermite).format('YYYY-MM-DD');
      console.log(datePermite);
      console.log('fecha nacimiento valida: ', moment(date).isSameOrBefore(datePermite));
      if(!moment(date).isSameOrBefore(datePermite)) {
        alert('Fecha de nacimiento No Valida No cumple con la edad Reglamentaria');
        focus = true
      } else {
        focus = false
      }
    } else {
      alert('Fecha No Valida');
      focus = true
    }
  }else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validateDate = (data, name, focus) => {
  if(!validator.isEmpty(data.value)){
    const date = moment(data.value).format('YYYY-MM-DD');
    if(!moment(date).isValid()) {
      alert('Fecha No Valida');
      focus = true
    } else {
      focus = false
    }
  }else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validateDateMaximun = (data, name ,focus) => {
  if(!validator.isEmpty(data.value)){
    const date = moment(data.value).format('YYYY-MM-DD');
    const today= moment().format('YYYY-MM-DD');
    console.log(today);
    console.log(moment(date).isValid());
    if(moment(date).isValid()) {
      if(!moment(date).isSameOrBefore(today)){
        alert('La fecha ingresada no puede ser mayor a la fecha actual')
        focus = true
      } else {
        focus = false
      }
    } else {
      alert('Fecha No Valida');
      focus = true
    }
  } else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}

export const validateDateMinimun = (data,min, name, focus) => {
  if(!validator.isEmpty(data.value)){
    const date = moment(data.value).format('YYYY-MM-DD');
    const dateMin = moment(min).format('YYYY-MM-DD');
    console.log(moment(date).isValid());
    if(moment(date).isValid()) {
      if(!moment(date).isSameOrAfter(dateMin)){
        alert('La fecha ingresada no puede ser menor a la fecha de: ' + moment(dateMin).format('DD-MM-YYYY'));
        focus = true
      } else {
        focus = false
      }
    } else {
      alert('Fecha No Valida');
      focus = true
    }
  } else {
    if(data.required=== true && focus === false){
      alert('El campo: '+ name + ' No puede tener espacio en blanco')
      focus = true
    } else {
      focus = false
    }
  }
  console.log(focus);
  return focus;
}
