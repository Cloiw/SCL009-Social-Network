import{templateHome}from "./templateHome.js"
import{validateAndCreateAccount}from "./../js/validation.js"
export const templateCreate = () => {
    
     
    document.getElementById("root").innerHTML =
    ` <div class="container-col">
        <img class="logo" src="assets/img/logo_full.png" alt="">
        <p class="subtitle">Registro</p>
    </div>
    <hr class="hr-home-top">
<div class="container-col-2">
    <div class="col-inputs">
    
        <input class="input-register"  id="user-name" autofocus placeholder="Nombre del personaje">
        <p class="p-error" id="error-name"></p>
        <input class="input-register"  id="user-age" placeholder="Edad del personaje">
        <p class="p-error" id="error-age"></p>
        <input class="input-register"  id="user-location" placeholder="Pais/Ciudad del personaje">
        <p class="p-error" id="error-location"></p>
        <input class="input-register"  id="user-email" placeholder="Correo">
        <p class="p-error" id="error-email"></p>
        <input class="input-register"  id="user-password"   type="password" placeholder="Contraseña">
        <p class="p-error" id="error-password"></p>
        <button class="btn-create-account" id="btn-create-account">Crear Cuenta</button>
            <div class="row-btn-back">
                <button class="btn-back" id="btn-back">Volver</button>
            </div>
    </div>
    
</div>`

   document.getElementById("btn-back").addEventListener('click', ()=>{
    templateHome();
    window.location.hash= "#/home";
    })
    document.getElementById("btn-create-account").addEventListener('click', ()=>{
        let userName=document.getElementById("user-name").value;
        let userAge=document.getElementById("user-age").value;
        let userLocation=document.getElementById("user-location").value;
        let userEmail=document.getElementById ("user-email").value;
        let userPassword=document.getElementById("user-password").value;
        let errorMsgName=document.getElementById("error-name");
        let errorMsgAge=document.getElementById("error-age");
        let errorMsgLocation=document.getElementById("error-location");
        let errorMsgEmail=document.getElementById("error-email");
        let errorMsgPassword=document.getElementById("error-password");
        validateAndCreateAccount (errorMsgName,errorMsgAge, errorMsgLocation, errorMsgEmail, errorMsgPassword,userName,userAge,userLocation,userEmail,userPassword)
        })
}





