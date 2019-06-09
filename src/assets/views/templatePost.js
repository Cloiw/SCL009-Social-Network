import {observer} from "./../js/auth.js";
import {postCreate,validateName} from "./../js/dataWall.js"
import {templateWall} from "./templateWall.js"

export const templatePost =()=>{
    observer();
    // let nameProfile = validateName();
    document.getElementById("root").innerHTML=
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
                    <img class="btn-icons" src="assets/img/logout_icon.png">
                </button>
            </div>
        </div>
    </div>                                                                               
    </section>
        <textarea id="textpost" placeholder="¿Qué estás pensando?" autofocus></textarea>   
        <button id="post">Publicar</button> 
    </section> 
                        `
                    
document.getElementById('btn-wall').addEventListener('click', () => {
    window.location.hash = "/wall"
})
document.getElementById('btn-post').addEventListener('click', () => {
    window.location.hash = "/post"
})
document.getElementById('btn-logout').addEventListener('click', () => {
    signOut();
})
                   
                        
                    }


    //evento para publicar un mensaje   
//     document.getElementById('post').addEventListener('click',()=>{
//         let userPost = document.getElementById('text-post').value;

//         if(userPost===''|| userPost.length<10){
//             document.getElementById('post-error').innerHTML=`*Debes ingresar una publicación con más de 2 caracteres.`;
//         }
//         else{
//             document.getElementById('post-error').innerHTML='';
//         }
        
//         postCreate(userPost);

//     })   
    
//     //evento que permite ir al templateTimeLine
//     document.getElementById('btn-return-wall').addEventListener('click',()=>{
//         templateWall();
//         window.location.hash="#/wall";        
//     })
// }
