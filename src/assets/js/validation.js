/*VALIDACIONES: Estas se deben testear en auth.spec.js*/

/*Validaciones de la función Iniciar Sesión();*/

/*Función que valida que el usuario llene todos los campos*/
import{createAccount }from "./auth.js"


export const validateSignIn = (emailSignIn,passwordSignIn) => {
    if(emailSignIn === ""|| passwordSignIn ==="" || passwordSignIn.length<6 || !validateEmail(emailSignIn)){
      return false;
    }else{
      return true;
    }
  }
  
  /*Función que valida que el usuario debe ingresar un @ cuando ingresa un correo*/
  export const validateEmail = (emailSignIn)=>{
    /*expresión regular que simula el patron de búsqueda del correo electrónico*/
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(emailSignIn);
  }

  export const validateInput = (errorName,errorAge,errorLocation,errorEmail,errorPassword,userName,userAge,userLocation,userEmail,userPassword)=>{
  if (userName===""){
   errorName.innerHTML=`*Debes ingresar un nombre.`;
   return false;      
  }else{
    errorName.innerHTML='';
  }

  if(userAge===""){
    errorAge.innerHTML=`*Debes ingresar una edad.`;
    return false;
  }else{
    errorAge.innerHTML='';
  } 

  if (userLocation===""){
    errorLocation.innerHTML=`*Debes ingresar una localización.`;
    return false;
  }else{
    errorLocation.innerHTML='';
  }

 if(userEmail==="" || !validateEmail(userEmail)){
   errorEmail.innerHTML=`*Debes ingresar un correo válido.`;
   return false;
  }else{
    errorEmail.innerHTML='';
  }

  if(userPassword==="" || userPassword.length<6){
    errorPassword.innerHTML=`*Debes ingresar una contraseña con mínimo 6 caracteres.`;
    return false;
  }else{
    errorPassword.innerHTML='';
  }
  return createAccount(userName, userAge,userLocation, userEmail, userPassword);
}