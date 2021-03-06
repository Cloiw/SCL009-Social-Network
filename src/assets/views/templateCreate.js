
import{validateAndCreateAccount}from "./../js/validation.js"




export const templateCreate = () => {
    
     document.getElementById("root").innerHTML =
    ` 
    <header>
        <div class="container-col">
            <img class="logo" src="assets/img/logo_full.png" alt="">
            <h1 class="subtitle">Registro</h1>
        </div>
    </header>
    <hr class="hr-home-top">
    <div class="container-col-center">
        <div class="col-inputs">
            <p class="p-error-fb" id="error-fb"></p>
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
    window.location.hash= "#/home";
    })
    document.getElementById("btn-create-account").addEventListener('click', ()=>{
        document.getElementById("error-fb").innerHTML= ""
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





