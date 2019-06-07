import { signOut,observer } from "./../js/auth.js";

export const templateWall = () => {
    observer()
    document.getElementById("root").innerHTML =
        
    `<div class="container-nav">
    <nav id="nav-wall" 
        <div class="signOut">
        <button id="btn-signout">
        <img src="assets/img/logout.png" id="logout" alt="Boton salir aplicación"/></button> 
        </div>  
    </nav>
    </div>
    <section class="template-wall">
                            <h2>Bienvenido</h2>
                            <section id="section-wall">
                            
                                <div id="userinformation">                            
                                    <img src="" id="userphoto" alt="Foto del usuario"/>
                                    <textarea id="text" placeholder="¿Qué estás pensando?"></textarea>                                                      
                                </div>
                                
                                <div id="wall">
                                    
                                </div>   
                            </section>   
                        </section>                
                        `

    //evento para cerrar la sesión del usuario
    document.getElementById('logout').addEventListener('click', () => {
        signOut();
    })
    //evento que sirve para volver al inicio de la pantalla
    //document.getElementById('up').addEventListener('click',()=>{
    //    window.scrollTo(0,0);
    //});    
}
