//Logueo con Google
export const loginGoogle = () =>{
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(result=> {
   let user = result.user;
   let db = firebase.firestore();
   const userRef = db.collection('users').doc(user.uid);
    userRef.get().then(doc=>{
      if (doc.exists) {
        alert(user.displayName+" Has iniciado sesión con exito")
      window.location.hash = '#/wall';
      }else{ 
        db.collection("users").doc(user.uid).set({
        name: user.displayName,
        age:"99",
        location: "Por ahi",
        email: user.email});
        alert(user.displayName+" Has iniciado sesión con exito")
        window.location.hash = '#/wall';
      }
      
    })
    .catch(error=> {
      console.log(error.message);
    })
  })
}


 //Envia un correo de validación de la cuenta una vez que el usuario se registra satisfactoriamente
const emailVerification = () =>{
  let user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() =>{
    console.log("enviando correo");
  })
  .catch(error=>{
    console.log(error.message);
  })
}

//Crea una cuenta y guarda los datos con la misma ID. Envia un correo de verificación luego del registro.
export const createAccount = (userName, userAge,userLocation, userEmail, userPassword) => {
  let dbProfiles = firebase.firestore();
  // Función de Firebase para registrar nuevos usuarios
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
    .then(cred => {
      dbProfiles.collection("users").doc(cred.user.uid).set({
        name: userName,
        age: userAge,
        location: userLocation,
        email: userEmail});
        emailVerification();
      })
      .then(()=>{
          console.log("Document successfully written!");
          alert("El usuario ha sido creado con éxito. Hemos enviado un correo de verificación de cuenta.");
          window.location.hash = '';
      })
      .catch(error=> {
        if (error) { 
          document.getElementById("error-fb").innerHTML= `${error.message}`;
        }
      });
}

//Permite iniciar sesión solo a usuarios que hayan verificado su correo
export const signIn = (emailSignIn, passwordSignIn) => {
  document.getElementById("error-fb").innerHTML=""
 //Función firebase para ingreso de usuarios registrados
  firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn).then(() =>{
    let user = firebase.auth().currentUser;
    console.log(user)
    if(!user.emailVerified){
      console.log("No verificado, cerrando sesion")
      document.getElementById("error-fb").innerHTML= `Verifica tu correo para poder iniciar sesión`
      firebase.auth().signOut()
            //<br>
            //<p id="sendEmailAgain">Enviame otro correo!</a>
            // document.getElementById("sendEmailAgain").addEventListener('click', ()=>{
            //   emailVerification()
            //   document.getElementById("error-fb").innerHTML=""
            //   firebase.auth().signOut()
            //   })
    }else{ 
        window.location.hash = '#/wall';
    }
  })
  .catch(error =>{
    document.getElementById("error-fb").innerHTML= `${error.message}`;
  });
}

  
//Cierra la sesión del usuario y lo redirecciona a la pantalla home
export const signOut = () =>{
  if(confirm("¿Realmente deseas cerrar sesión?")){
    firebase.auth().signOut().then(()=> {
          window.location.hash='';
    })
  }
}


export const observer=() =>{
  firebase.auth().onAuthStateChanged(user => {
  //   if(user){
  //     console.log("oliadsa")
  //     window.location.hash = '#/wall';
  //   }
  // else{
  //   window.location.hash = "";

  
  
    if(user===null && window.location.hash != "#/create"){
      console.log("No hay usuario")
      return window.location.hash = '';}
    if(user===null && window.location.hash == "#/create"){
        return
      }
    if (user.emailVerified === true && ( window.location.hash =='' || window.location.hash == '#/home'  || window.location.hash == '#/create')) {
      console.log("Usuario activo, redireccionado a Wall")
      window.location.hash = '#/wall';
      
    }
  }
  )}








