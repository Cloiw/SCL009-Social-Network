export const templateHome = () =>{

    const containerHome = document.getElementById("root");
    const contentHome =  `<div class="logo" img src="./assets/img/logo_full.png" id="logo">   
                            <button class="btn" id="login">Login con Google</button> `



containerHome.innerHTML= contentHome;

         
}