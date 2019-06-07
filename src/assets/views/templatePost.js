import {observer} from "./../js/auth.js";
import {postCreate,validateName} from "./../js/dataWall.js"
import {templateWall} from "./templateWall.js"

export const templatePost =()=>{
    observer();
    let nameProfile = validateName();
    document.getElementById('root').innerHTML=
    `
                        <nav id="navinformation">
                            <button id="btn-return-wall">
                                <img src="assets/img/left-arrow.png" id="return-wall" alt="volver al muro"/>                            
                            </button>  
                        </nav>                       
                        <section class="template-post">
                        <h6 id="post-error"></h6> 
                            <section id="user-post">                                                           
                                <img src="" id="userphoto" alt="Foto del usuario"/>
                                <h2 id="user-name">${nameProfile}</h2>                                                                                
                            </section>
                            <textarea id="textpost" placeholder="¿Qué estás pensando?" autofocus></textarea>   
                            <button id="post">Publicar</button> 
                        </section> 
                        `
    //evento para publicar un mensaje   
    document.getElementById('post').addEventListener('click',()=>{
        let userPost = document.getElementById('text-post').value;

        if(userPost===''|| userPost.length<10){
            document.getElementById('post-error').innerHTML=`*Debes ingresar una publicación con más de 2 caracteres.`;
        }
        else{
            document.getElementById('post-error').innerHTML='';
        }
        
        postCreate(userPost);

    })   
    
    //evento que permite ir al templateTimeLine
    document.getElementById('btn-return-wall').addEventListener('click',()=>{
        templateWall();
        window.location.hash="#/wall";        
    })
}
