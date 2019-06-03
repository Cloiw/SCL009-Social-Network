import{templateHome}from "./templateHome.js"
export const templateCreate = () => {
    
     
    document.getElementById("root").innerHTML =
    `<div>
    <div class="div-top">  <img class="logo" src="assets/img/logo_full.png" alt=""> 
    
    <p>Registro<p>
    <input class="input-register"  id="user-name" placeholder="Nombre del personaje"><br>
    <input class="input-register"  id="user-age" placeholder="Edad del personaje"><br>
    <input class="input-register"  id="user-location" placeholder="Pais/Ciudad del personaje"><br>
    <input class="input-register"  id="user-email" placeholder="Correo"><br>
    <input class="input-register"  id="user-password"   type="password" placeholder="Contraseña"><br>
    
    <button class="btn-create-account" id="btn-create-account">Crear Cuenta</button></div>
    <button class="btn-back" id="btn-back">Volver</button></div>
   </div>`
   document.getElementById("btn-back").addEventListener('click', ()=>{
    templateHome();
    window.location.hash= "#/home";
    })
    document.getElementById("btn-create-account").addEventListener('click', ()=>{
        document.getElementById("user-name").value;
        document.getElementById("user-age").value;

        })

}