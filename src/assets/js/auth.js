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

 /*Función Observador, que verifica que el usuario se encuentra logueado*/
export const observer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('existe usuario activo')
      if (!user.displayName && user.email) {
        getName(user.email);
      }
      if (document.getElementById("useremail")) {
        document.getElementById("useremail").innerHTML = user.email;
      }
    } else {
      console.log('no existe usuario activo');
      window.location.hash = "";
    }
  });
}



