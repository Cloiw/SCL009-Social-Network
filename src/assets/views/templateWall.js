import { signOut,observer } from "./../js/auth.js";
import {userData} from "./../js/dataUser.js";
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
                <button id="btn-wall" class="icon-btn">
                    <img class="btn-icons" src="assets/img/wall_icon.png">
                </button>
                <button id="btn-post" class="icon-btn">
                    <img id="btn-post" class="btn-icons" src="assets/img/post_icon.png">
                </button>
                <button id="btn-logout" class="icon-btn">
                    <img id="btn-post" class="btn-icons" src="assets/img/logout_icon.png">
                </button>
            </div>
        </div>

        
    </div>
    
    <section class="template-wall">
                            <h2>Bienvenido${userData()}</h2>
                            <section id="section-wall">
                            
                          
                            </section>   
                        </section>                
                        `

    //evento para cerrar la sesión del usuario
    document.getElementById('btn-logout').addEventListener('click', () => {
        signOut();
    })
    document.getElementById('btn-post').addEventListener('click', () => {
        window.location.hash = "/post"
    })
    document.getElementById('btn-wall').addEventListener('click', () => {
        window.location.hash = "/wall"
    })

    console.log(userData())
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

