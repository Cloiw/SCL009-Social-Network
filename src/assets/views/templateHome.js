export const templateHome = () => {

    document.getElementById("root").innerHTML =
    `<div>
    <div class="logo">  <img src="assets/img/logo_full.png" alt=""> </div>
    <p>La red social para amantes del Teatro</p>  
    <hr>
    <input class="email" type="email" id="email" placeholder="Correo">
    <input class="password" type="password" id="password" placeholder="Contraseña"> <br>
    <button class="btn-login" id="login">Log In</button> 
    <button class="btn-google-login" id="login">Entrar con google</button> 
    <hr>
    <p>¿No tienes una cuenta?<p>
    <button class="btn-register" id="login">Registrarse</button> 
    </div>`


}
