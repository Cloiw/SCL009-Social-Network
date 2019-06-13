import { templateWall } from "./templateWall.js";
import { postEdit } from "../js/data.js";
import { observer } from "../js/auth.js";

export const templateEditPost = (doc) => {
    observer();
    let nameProfile = validateName();
    document.getElementById('root').innerHTML =
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
                <img id="btn-profile" class="btn-icons" src="assets/img/profile_icon.png">
            <button id="btn-wall" class="icon-btn">
            <button id="btn-returnt-wall">
                    <img src="assets/Images/left-arrow.png" id="return-wall" alt="volver al muro"/>                            
                </button>  
            </div>
        </div> 
    </nav>
    <header>
        <h1 class="subtitle">Edita tu publicación</h1>
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
        <button class="btn-edit" id="btn-edit-post">Editar</button>
     </div>
</div>
    `;

    //evento que permite ir al templateWall
    document.getElementById('btn-return-wall').addEventListener('click', () => {
        templateWall();
        window.location.hash = "#/wall";

    document.getElementById('btn-edit').addEventListener('click', () => {
            let userPost = document.getElementById('text-post').value;

            if (userPost === '' || userPost.length < 2) {
                document.getElementById('post-error').innerHTML = `*Debes ingresar una publicación con más de 2 caracteres.`;
            }
            else {
                document.getElementById('post-error').innerHTML = '';
            }

            postEdit(doc.id);
        })

    }
