import{templateHome}from "./templateHome.js"
import{validateInput}from "./../js/validation.js"
export const templateCreate = () => {
    
     
    document.getElementById("root").innerHTML =
    `<div>
    <div class="div-top">  <img class="logo" src="assets/img/logo_full.png" alt=""> 
    
<<<<<<< Updated upstream
    <p class="p-register">Registro<p>
=======
    <p>Registro<p>
    <p id="error-name"></p>
>>>>>>> Stashed changes
    <input class="input-register"  id="user-name" placeholder="Nombre del personaje"><br>
    <p id="error-age"></p>
    <input class="input-register"  id="user-age" placeholder="Edad del personaje"><br>
    <p id="error-location"></p>
    <input class="input-register"  id="user-location" placeholder="Pais/Ciudad del personaje"><br>
    <p id="error-email"></p>
    <input class="input-register"  id="user-email" placeholder="Correo"><br>
    <p id="error-password"></p>
    <input class="input-register"  id="user-password"   type="password" placeholder="Contraseña"><br>
    
    <button class="btn-create-account" id="btn-create-account">Crear Cuenta</button></div>
    <button class="btn-back" id="btn-back">Volver</button></div>
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
        validateInput (userName,errorMsgName,errorMsgAge, errorMsgLocation, errorMsgEmail, errorMsgPassword,userAge,userLocation,userEmail,userPassword)
        })
}