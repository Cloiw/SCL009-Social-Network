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
  export const validateEmail = (emailSignIn)=>{
    /*expresión regular que simula el patron de búsqueda del correo electrónico*/
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(emailSignIn);
  }

  export const validateInput = (username,errorname,errorage, errorlocation, erroremail, errorpassword, userage,userlocation,useremail,userpassword)=>{
  if (username===""){
   errorname.innerHTML=`*Debes ingresar un nombre.`;      
  }else{
    errorname.innerHTML='';
  }

  if (userage===""){
    errorage.innerHTML=`*Debes ingresar tu edad.`;
  }else{
    errorage.innerHTML='';
  } 

  if (userlocation===""){
    errorlocation.innerHTML=`*Debes ingresar una localización.`;
  }else{
    errorlocation.innerHTML='';
  }

  if(useremail==="" || !validateEmail(useremail)){
   erroremail.innerHTML=`*Debes ingresar un correo válido.`;
  }else{
    erroremail.innerHTML='';
  }

  if(userpassword==="" || userpassword.length<6){
    errorpassword.innerHTML=`*Debes ingresar una contraseña con mínimo 6 caracteres.`;
  }else{
    errorpassword.innerHTML='';
  }
}