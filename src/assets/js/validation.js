/*VALIDACIONES: Estas se deben testear en auth.spec.js*/

/*Validaciones de la función Iniciar Sesión();*/

/*Función que valida que el usuario llene todos los campos*/

export const validateSignIn = (emailSignIn,passwordSignIn) => {
    if(emailSignIn === ""|| passwordSignIn ==="" || passwordSignIn.length<6 || !validateEmail(emailSignIn)){
      return false;
    }else{
      return true;
    }
  }
  
  /*Función que valida que el usuario debe ingresar un @ cuando ingresa un correo*/
  export const validateEmailSignIn = (emailSignIn)=>{
    /*expresión regular que simula el patron de búsqueda del correo electrónico*/
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(emailSignIn);
  }