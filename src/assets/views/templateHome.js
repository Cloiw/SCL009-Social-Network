import{loginGoogle}from "./../js/auth.js";
export const templateHome = () => {

    document.getElementById("root").innerHTML =
    `<div>
    <div class="div-top">  <img class="logo" src="assets/img/logo_full.png" alt=""> 
    <p class="subtitle">La red social para amantes del Teatro</p>  
    <hr class="hr-home">
   
    <button class="btn-google-login" id="btn-google-login">&nbsp&nbsp&nbspEntrar con Google</button> 
    <hr class="hr-home"></div>
    <button class="btn-create-account" id="btn-create-account">Registrarse</button>

   </div>`
document.getElementById("btn-google-login").addEventListener('click', ()=>{
loginGoogle()
})

document.getElementById("btn-create-account").addEventListener('click', ()=>{
   window.location.hash= "#/create";
   })
}
 // <input class="email" type="email" id="email" placeholder="Correo">
    // <input class="password" type="password" id="password" placeholder="Contraseña"> <br>
    // <button class="btn-login" id="login">Log In</button>  
    // <p>¿No tienes una cuenta?<p>
    // <button class="btn-register" id="login">Registrarse</button> 
    
