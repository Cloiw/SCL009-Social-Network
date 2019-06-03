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



