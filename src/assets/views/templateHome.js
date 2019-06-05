import{loginGoogle}from "./../js/auth.js";
import{validateAndSignIn}from "./../js/validation.js";
import{templateCreate}from "./templateCreate.js"
export const templateHome = () => {

    document.getElementById("root").innerHTML =
    `<div>
    <div class="div-top">  <img class="logo" src="assets/img/logo_full.png" alt=""> 
    <p class="subtitle">La red social para amantes del Teatro</p>  
    <hr class="hr-home">
    <p id="error-fb" class="p-error"></p>
    <input type="email" id="email-signin" class="elementsignin" autofocus placeholder="Ingrese su correo"/>
    <p id="error-email-signin" class="p-error"></p>
    <input type="password" id= "password-signin" class="elementsignin" placeholder="Ingrese su contraseña"/>
    <p id ="error-password-signin" class="p-error"></p>
    <button class="btn-signin" id="btn-signin">Login</button> 
    <button class="btn-google-login" id="btn-google-login">&nbsp&nbsp&nbspEntrar con Google</button> 
    <hr class="hr-home">
    <p class="subtitle-register">¿No tienes una cuenta?</p>
    <button class="btn-register" id="btn-register">Registrarse</button>
</div>
   </div>`
document.getElementById("btn-google-login").addEventListener('click', ()=>{
loginGoogle()
})

document.getElementById("btn-signin").addEventListener('click', ()=>{
let errorMsgEmail = document.getElementById("error-email-signin");
let errorMsgPassword = document.getElementById("error-password-signin");
let userEmail = document.getElementById("email-signin").value;
let userPassword = document.getElementById("password-signin").value;
 validateAndSignIn(errorMsgEmail,errorMsgPassword,userEmail,userPassword)
})

document.getElementById("btn-register").addEventListener('click', ()=>{
   templateCreate();
   window.location.hash= "#/create";
})
}
 // <input class="email" type="email" id="email" placeholder="Correo">
    // <input class="password" type="password" id="password" placeholder="Contraseña"> <br>
    // <button class="btn-login" id="login">Log In</button>  
    // <p>¿No tienes una cuenta?<p>
    // <button class="btn-register" id="login">Registrarse</button> 
    
