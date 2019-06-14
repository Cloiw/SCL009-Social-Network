import { signOut } from "./../js/auth.js";
import { realTimeWall } from "./../js/data.js";
export const templateWall = () => {
    
   
    document.getElementById("root").innerHTML =

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
                    <img  class="btn-icons" src="assets/img/post_icon.png">
                </button>
                <button id="btn-logout" class="icon-btn">
                    <img class="btn-icons" src="assets/img/logout_icon.png">
                </button>
            </div>
        </div> 
    </nav>

    <header>
        <h1 class="subtitle">Muro de la comunidad</h1>
    </header>
    <div class="container-col-center"> 
        <div class="col-main-75">
            <div>
                <hr class="hr-home-top">
            </div>
        <div id="post-wall">
        </div>   
        </div>   
    </div>                              
    `
    //botones de la barra superior
    document.getElementById('btn-logout').addEventListener('click', () => {
        signOut();
    })
    document.getElementById('btn-post').addEventListener('click', () => {
        window.location.hash = "/post"
    })
    document.getElementById('btn-wall').addEventListener('click', () => {
        window.location.hash = "/wall"
        
    })

    document.getElementById('btn-profile').addEventListener('click', () => {
        window.location.hash = "/profile"
        })

    
    realTimeWall()
}
