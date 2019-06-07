//Logueo con Google
export const loginGoogle = () =>{
    let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  let token = result.credential.accessToken;
   let user = result.user;
   alert(user.displayName+" Has iniciado sesión con exito")
   window.location.hash = '#/wall';
   
}).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // The email of the user's account used.
   var email = error.email;
   // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;
   // ...
 });}


 //Envia un correo de validación de la cuenta una vez que el usuario se registra satisfactoriamente
function emailVerification() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    console.log("enviando correo");
    // Update successful.
  }).catch(function (error) {
    console.log(error);
  })
}

//Crea una cuenta y guarda los datos. Envia un correo de verificación luego del registro.
export const createAccount = (userName, userAge,userLocation, userEmail, userPassword) => {
  let dbProfiles = firebase.firestore();
  // Función de Firebase para registrar nuevos usuarios
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then(function () {
        emailVerification();
        //Base de datos, para almacenar de manera paralela en cloud firestore  dichos datos del usuario
        dbProfiles.collection("users").add({
          name: userName,
          age: userAge,
          location: userLocation,
          email: userEmail
        })
          .then(function () {
            console.log("Document successfully written!");
            alert("El usuario ha sido creado con éxito. Hemos enviado un correo de verificación de cuenta.");
            window.location.hash = '';
          })
          .catch(function (error) {
            //Si no ocurre el regitro, imprime un mensaje de error
            console.error("Error writing document: ", error);  
          });
      })
      .catch(function (error) {
        if (error) {
          //Si no sucede el registro, envia menseaje de error al usuario
          alert('No se ha podido crear el usuario');
      
        }
      });
  }

// export const signInPersistance = (emailSignIn, passwordSignIn)=>{
//   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => { 
//     signIn(emailSignIn, passwordSignIn);
//   })}

  //Permite iniciar sesión solo a usuarios que hayan verificado su correo
export const signIn = (emailSignIn, passwordSignIn) => {
     document.getElementById("error-fb").innerHTML=""
 
    //Función firebase para ingreso de usuarios registrados
    firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn)
      .then(function () {
        let user = firebase.auth().currentUser;
        
          if(!user.emailVerified){
            console.log(user.emailVerified)
            document.getElementById("error-fb").innerHTML= `Verifica tu correo para poder iniciar sesión`
            firebase.auth().signOut()
            //<br>
            //<p id="sendEmailAgain">Enviame otro correo!</a>
            // document.getElementById("sendEmailAgain").addEventListener('click', ()=>{
            //   emailVerification()
            //   document.getElementById("error-fb").innerHTML=""
            //   firebase.auth().signOut()
            //   })
          }
          else{ 
            window.location.hash = '#/wall';
          }
         
      })
      .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          document.getElementById("error-fb").innerHTML= `${errorMessage}`;
          console.log(errorCode);
      });
}

  
/*Función signOut(), sirve para que usuario cierre sesión, lo dirigia a la pantalla home*/

export const signOut = () =>{
  if(confirm("¿Realmente deseas cerrar sesión?")){
  firebase.auth().signOut()
  .then(function() {
    alert("Has cerrado tu sesión");
    window.location.hash='';
    }).catch(function(error) {
    // An error happened.
    console.error("Error removing document: ", error);
  });
 }
}

// export const observer2=() =>{
//   firebase.auth().onAuthStateChanged(function(user) {

// if (user) {
//   console.log(user.email)
//   window.location.hash = '#/wall';
//   // User is signed in.
// } else {
//   console.log("No hay usuario")
//   window.location.hash = '';
//   // No user is signed in.
// }
//   })
// }


export const observer=() =>{
  firebase.auth().onAuthStateChanged(function(user) {
console.log(user)
if(user===null){
  console.log("No hay usuario")
  return  window.location.hash = '';}
if (user.emailVerified) {
  console.log(user.email)
  window.location.hash = '#/wall';
  // User is signed in.
}
 if (!user.emailVerified && window.location.hash != '' && window.location.hash != '#/home'){
   console.log("No verificado, redireccionando a home")
   window.location.hash = '';
 }

  })
} 







