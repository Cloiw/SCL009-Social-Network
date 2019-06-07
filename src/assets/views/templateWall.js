import { signOut,observer } from "./../js/auth.js";

export const templateWall = () => {
    observer()
    document.getElementById("root").innerHTML =
        
    `
    <div class="container-row">
        <div class="left-col">
            <div class="btn-nav">
                <div class="icon-btn">
                <img class="logo-icon"  src="assets/img/logo_small.png"></div>
            </div>
        </div>

        <div class="center-col">
            <div class="icons-row">
                <img id="btn-profile" class="btn-icons" src="assets/img/profile_icon.png">
                <img id="btn-wall" class="btn-icons" src="assets/img/wall_icon.png">
                <img id="btn-post" class="btn-icons" src="assets/img/post_icon.png">
                <button id="logout-btn" class="icon-btn">
                    <img id="btn-post" class="btn-icons" src="assets/img/logout_icon.png">
                </button>
            </div>
            
        </div>

        
         </div>
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
    document.getElementById('logout-btn').addEventListener('click', () => {
        signOut();
    })
    //evento que sirve para volver al inicio de la pantalla
    //document.getElementById('up').addEventListener('click',()=>{
    //    window.scrollTo(0,0);
    //});    
}


/*Función que imprime el html de los mensajes publicados*/
export const renderPost =(doc) =>{
    let postDate = new Date(doc.data().date);
    document.getElementById('wall').innerHTML +=
    `   
        <article class="post-read">
            <h3>${doc.data().name}</h3>
            <h5>${postDate.toLocaleDateString('es-cl')} ${postDate.toLocaleTimeString('es-cl')}</h5>
            <h4>${doc.data().message}</h4>             
            <button id="like_${doc.id}" class="btn-like">Like</button>                       
    `
    if(firebase.auth().currentUser.email===doc.data().user){
        document.getElementById('wall').innerHTML +=
        `
        <div class="btntimeline">
            <button id="update_${doc.id}" class="btn-update">Editar</button>
            <button id="delete_${doc.id}" class="btn-delete">Eliminar</button>
        </div>
        `
    }        
        document.getElementById('wall').innerHTML +=
        `           
        </article>
        `   
}

