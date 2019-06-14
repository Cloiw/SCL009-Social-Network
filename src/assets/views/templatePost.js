import { signOut} from "./../js/auth.js";
import { validateAndPost } from "../js/validation.js";



export const templatePost =()=>{
    
   
document.getElementById("root").innerHTML=

    `
    <nav class="container-row-nav">
        <div class="left-col">
            <div class="btn-nav">
                <div class="icon-btn">
                <img class="logo-icon"  src="assets/img/logo_small.png"></div>
            </div>
        </div>

        <div class="center-col">
            <div class="icons-row">
                 <button id="btn-profile" class="icon-btn">
                    <img class="btn-icons" src="assets/img/profile_icon.png">
                </button>
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
    </nav> 

    <header>
        <h1 class="subtitle">Crea tu publicación</h1>
    </header>
    <div class="container-col-center"> 
        <div class="col-main-75">
            <div>
                <hr class="hr-home-top">
            </div>
            <textarea id="text-stage-direction" placeholder="Acotación" rows="1" autofocus></textarea>
            <p id="error-stage-direction" class="p-error"></p>  
            <textarea id="text-post" placeholder="Diálogo" rows="10"></textarea> 
            <p id="error-post" class="p-error"></p>  
            <button class="btn-signin" id="btn-create-post">Publicar</button>
        </div>
    </div>
                        `
                    
    document.getElementById('btn-wall').addEventListener('click', () => {
        window.location.hash = "/wall"
     })

    document.getElementById('btn-profile').addEventListener('click', () => {
            window.location.hash = "/profile"
    }) 

    document.getElementById('btn-post').addEventListener('click', () => {
        window.location.hash = "/post"
    })
    document.getElementById('btn-logout').addEventListener('click', () => {
        signOut();
    })

    document.getElementById('btn-create-post').addEventListener('click', ()=>{
        let userPost = document.getElementById('text-post').value;
        let userStageDirection = document.getElementById('text-stage-direction').value;
        let errorPost = document.getElementById('error-post');
        let errorStageDirection = document.getElementById('error-stage-direction');
        validateAndPost(errorPost,errorStageDirection,userPost,userStageDirection);
    })

}
