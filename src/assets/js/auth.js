import { validateAccount, validateSignIn } from './validation.js';

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


 /*Función que envia un correo de validación de la cuenta 
una vez que el usuario se registra satisfactoriamente*/
function emailVerification() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    console.log("enviando correo");
    // Update successful.
  }).catch(function (error) {
    console.log(error);
  })
}

export const createAccount = (userName, userAge,userLocation, userEmail, userPassword) => {
  let dbProfiles = firebase.firestore();
  /*Función de Firebase para registrar nuevos usuarios*/
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then(function () {
        emailVerification();
        /*Base de datos, para almacenar de manera paralela en cloud firestore 
        dichos datos del usuario*/
        dbProfiles.collection("users").add({
          name: userName,
          age: userAge,
          location: userLocation,
          email: userEmail
        })
          .then(function () {
            console.log("Document successfully written!");
            /*Llama a la función emailVerification()*/
          
            alert("El usuario ha sido creado con éxito. Hemos enviado un correo de verificación de cuenta.");
            /*Cambia la vista de usuario de templateCreate a templateSignIn, a partir del hash*/
            window.location.hash = '';
          })
          .catch(function (error) {
            /*Si no ocurre el regitro, imprime un mensaje de error*/
            console.error("Error writing document: ", error);
            return "Error escribiendo perfil en firebase";
          });
      })
      .catch(function (error) {
        if (error) {
          /*Si no sucede el registro, envia menseaje de error al usuario*/
          alert('No se ha podido crear el usuario');
          return 'No se ha podido crear el usuario';
        }
      });
  }

  /* Función para realizar login usando un la cuenta creada*/

export const signIn = (emailSignIn, passwordSignIn) => {
  /*Si la validación realizada en el archivo validation.js fue true ingresa*/
  if (validateSignIn(emailSignIn, passwordSignIn)) {
    /*Función firebase para ingreso de usuarios registrados*/
    firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn)
      .then(function () {
        alert("Has iniciado sesión con exito");
        window.location.hash = '#/wall';
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message);
      });
  } else {
    alert("Error en el ingreso del usuario");
  }
}

//  /*Función Observador, que verifica que el usuario se encuentra logueado*/
// export const observer = () => {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       console.log('existe usuario activo')
//       if (!user.displayName && user.email) {
//         getName(user.email);
//       }
//       if (document.getElementById("useremail")) {
//         document.getElementById("useremail").innerHTML = user.email;
//       }
//     } else {
//       console.log('no existe usuario activo');
//       window.location.hash = "";
//     }
//   });
// }
  








