import validator from 'validator';
import passwordValidator from 'password-validator';
import moment from 'moment';

export const validateEmail = (data, name) => {
  if (!validator.isEmpty(data)){
    if(!validator.isEmail(data)){
      alert('Correo no Valido')
    }
  } else {
    alert('El campo: '+ name + ' No puede tener espacio en blanco')
  }
}

export const validateEmpty = (data, name) => {
  if (validator.isEmpty(data)){
    alert('El campo: '+ name + ' No puede tener espacio en blanco')
  }
}

export const validateText = (data, name) => {
  if (!validator.isEmpty(data)){
    console.log(validator.isAlpha(data));
    if(!validator.isAlpha(data)){
      alert('El campo: '+ name +' No puede Contener Numero ni espacio en Blanco')
    }
  } else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')

  }
}

export const validatePassword = (data, name) => {
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
  console.log(schema.validate(data));
  if(!validator.isEmpty(data)){
    if(!schema.validate(data)){
      alert('La contraseña debe tener al menos un Digito, letra en Mayuscula, Minuscula, un caracter especial y debe ser minimo 8 de longitud')
    }
  } else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}

export const validatePasswordConfirm = (data,password, name) => {
  if(!validator.isEmpty(data)){
    if(!validator.equals(data, password)){
      alert('Las contraseñas no coinciden')
    }
  } else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}

export const validateInt = (data, name) => {
  if(!validator.isEmpty(data)){
    if(!validator.isInt(data)){
      alert('El campo: '+ name +' No puede Contener Letras ni espacio en Blanco')
    }
  }else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}

export const validatePhoneNumber = (data, name) => {
  if(!validator.isEmpty(data)){
    if(!validator.isInt(data)){
      alert('El campo: '+ name +' No puede Contener Letras ni espacio en Blanco')
    } else {
      const validePhone = data.search('04');
      if (validePhone === -1) {
        alert('Numero de telefono movil no es el correcto');
      }
    }
  }else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}

export const validateLocalPhoneNumber = (data, name) => {
  if(!validator.isEmpty(data)){
    if(!validator.isInt(data)){
      alert('El campo: '+ name +' No puede Contener Letras ni espacio en Blanco')
    } else {
      const validePhone = data.search('02');
      if (validePhone === -1) {
        alert('Numero de telefono Local no es el correcto');
      }
    }
  }else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}

export const validateBirthDate = (data, name) => {
  if(!validator.isEmpty(data)){
    const date = moment(data).format('YYYY-MM-DD');
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
      }
    } else {
      alert('Fecha No Valida');
    }
  }else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}

export const validateDate = (data, name) => {
  if(!validator.isEmpty(data)){
    const date = moment(data).format('YYYY-MM-DD');
    if(!moment(date).isValid()) {
      alert('Fecha No Valida');
    }
  }else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}

export const validateDateMaximun = (data, name) => {
  if(!validator.isEmpty(data)){
    const date = moment(data).format('YYYY-MM-DD');
    const today= moment().format('YYYY-MM-DD');
    console.log(today);
    console.log(moment(date).isValid());
    if(moment(date).isValid()) {
      if(!moment(date).isSameOrBefore(today)){
        alert('La fecha ingresada no puede ser mayor a la fecha actual')
      }
    } else {
      alert('Fecha No Valida');
    }
  } else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}

export const validateDateMinimun = (data,min, name) => {
  if(!validator.isEmpty(data)){
    const date = moment(data).format('YYYY-MM-DD');
    const dateMin = moment(min).format('YYYY-MM-DD');
    console.log(moment(date).isValid());
    if(moment(date).isValid()) {
      if(!moment(date).isSameOrAfter(dateMin)){
        alert('La fecha ingresada no puede ser menor a la fecha de: ' + moment(dateMin).format('DD-MM-YYYY'));
      }
    } else {
      alert('Fecha No Valida');
    }
  } else {
    alert('El campo: '+ name +' No puede tener espacio en blanco')
  }
}
