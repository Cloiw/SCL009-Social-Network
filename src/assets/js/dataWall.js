import {validatePost} from'./validation.js';
import {renderPost} from "../views/templateTimeLine.js";

/*Función para crear un nuevo post se traspasa desde el template el texto de la publicación*/
export const postCreate = (userPost) =>{
    let dbPost = firebase.firestore();
    if(validatePost(userPost)){
        let date=Date.now();
        let nameProfile = validateName(); 

        dbPost.collection("post").add({
            user: firebase.auth().currentUser.email,
            name: nameProfile,
            message: userPost,
            date:date         
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById("textpost").value=''; 
            window.location.hash="#/wall";
            postRead();  
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }else{
        return "error en la validación del input vacío";
    }
    
}
/*Función para mostrar los post en el muro de la aplicación*/
export const postRead = () =>{
    let dbPost = firebase.firestore();
    dbPost.collection("post").orderBy("date","desc").get()
    .then((querySnapshot) => {
        if(document.getElementById('wall')){
            document.getElementById('wall').innerHTML = '';
        }
        querySnapshot.forEach((doc) => {
            renderPost(doc);
        });
    });
}
/*Función que obtiene el nombre al iniciar sesion con google (displayName) o al crear una cuenta con correo y contraseña*/

export const validateName =() =>{
    let nameProfile = firebase.auth().currentUser.profileName;
    if(firebase.auth().currentUser.displayName){
        nameProfile = firebase.auth().currentUser.displayName;
    }
    return nameProfile;
}