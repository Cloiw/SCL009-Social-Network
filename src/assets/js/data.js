//Crear Post
export const postCreate = (userPost,userStageDirection) =>{
    let db = firebase.firestore();
    let date= Date.now()
    let user = firebase.auth().currentUser
        db.collection('users').doc(user.uid).get().then(doc=> {
            db.collection("post").add({
                author: user.uid,
                name: doc.data().name,
                age:doc.data().age,
                location: doc.data().location,
                date: date,
                message: userPost,
                stage_direction: userStageDirection,
                likes: 0,
            })  
        })
    window.location.hash = "/wall"
}

//Muestra Posts con cambios instantaneos
export const realTimeWall = () =>{
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
    if(user == null){
        user =  firebase.auth().onAuthStateChanged;
    }
    db.collection("post").orderBy("date","desc").limit(10).onSnapshot((querySnapshot)=>{
    const postWallContainer = document.getElementById("post-wall");
    if(postWallContainer !=null){
        postWallContainer.innerHTML = "";
        querySnapshot.forEach((doc)=>{
        renderPost(doc,db,postWallContainer,user)
        })
    }
})
}

//Crear Elementos de Post
export const renderPost = (change,db,postWallContainer,user) =>{
    
    
    const postDate = new Date(change.data().date);

    // Contenedor TODO
    const divContainer = document.createElement("Div");
    divContainer.setAttribute("class", "post-container" );
    divContainer.id="div-container-"+change.id;

    //Row para botones superiores
    const divBtnRowFirst = document.createElement("Div");
    divBtnRowFirst.setAttribute("class", "row-btn-post-icons" );
    divContainer.appendChild(divBtnRowFirst);
    
    // Boton Editar
    const btnEdit = document.createElement("Button");
    btnEdit.id="btn-edit-"+change.id
    btnEdit.setAttribute("class","btn-top-text");
    const textBtnEdit = document.createTextNode("Editar");
    btnEdit.appendChild(textBtnEdit);
    divBtnRowFirst.appendChild(btnEdit);

    // Boton Borrar
    const btnDelete = document.createElement("Button");
    btnDelete.id="btn-delete-"+change.id
    btnDelete.setAttribute("class","btn-top-text");
    const textBtnDelete = document.createTextNode("Borrar");
    btnDelete.appendChild(textBtnDelete);
    divBtnRowFirst.appendChild(btnDelete);

    //Contenedor fecha, nombre, acotacion y mensaje.
    const divElement = document.createElement("Div");
    divElement.setAttribute("class", "post-read");
    divContainer.appendChild(divElement);
    
    //Creando parrafo contenedor de informacion
    const allData = document.createElement("P");
    divElement.appendChild(allData);

    //Span Fecha
    const dateSpan = document.createElement("Span");
    const textDate = document.createTextNode(postDate.toLocaleDateString()+" a las "+postDate.toLocaleTimeString());
    dateSpan.setAttribute("class","post-date")
    dateSpan.appendChild(textDate);
    allData.appendChild(dateSpan);
   
    //BR
    const brDate = document.createElement("br");
    allData.appendChild(brDate);
    
    //Span Nombre
    const nameSpan = document.createElement("Span");
    const textName = document.createTextNode(change.data().name)
    nameSpan.setAttribute("class","post-top");
    nameSpan.appendChild(textName);
    allData.appendChild(nameSpan);

    //BR
    const brName = document.createElement("br");
    allData.appendChild(brName);

    //Span Stage
    const stageSpan = document.createElement("span");
    const textStage = document.createTextNode("( "+change.data().stage_direction+" ) :")
    stageSpan.appendChild(textStage);
    allData.appendChild(stageSpan);

    //Parrafo Msg
    const msgSpan = document.createElement("p");
    const textMsg = document.createTextNode(change.data().message);
    msgSpan.setAttribute("class","post-message");
    msgSpan.appendChild(textMsg)
    allData.appendChild(msgSpan)
    
    //Div contenedor de botones like y dislike 
    const divBtnRow = document.createElement("Div");
    divBtnRow.setAttribute("class", "row-btn-post" );
    divContainer.appendChild(divBtnRow)
    
    //Div COl likes
    const divLikesCol = document.createElement("Div");
    divLikesCol.setAttribute("class", "left-col-likes");
    divBtnRow.appendChild(divLikesCol);

    //Div row span y boton
    const divLikesRow = document.createElement("Div");
    divLikesRow.setAttribute("class", "row-post");
    divLikesCol.appendChild(divLikesRow);

    // Parrafo de likes
    const likeSpan = document.createElement("p");
    likeSpan.setAttribute("id","count_"+change.id)
    const textLike = document.createTextNode(change.data().likes);
    likeSpan.appendChild(textLike);
    divLikesRow.appendChild(likeSpan);
   
    // Boton Like
    const btnLike = document.createElement("Button");
    btnLike.id="btn-like-"+change.id
    btnLike.setAttribute("class","icon-btn");
    divLikesRow.appendChild(btnLike)

    //IMG para boton Like
    const imgBtnLike = document.createElement("img");
    imgBtnLike.setAttribute("class", "btn-dis-like-icon");
    imgBtnLike.setAttribute("src", "assets/img/dislike_icon.png")
    btnLike.appendChild(imgBtnLike);

    // Botone DisLike
    const btnDislike = document.createElement("Button");
    btnDislike.id="btn-dislike-"+change.id
    btnDislike.setAttribute("class","icon-btn");
    divLikesRow.appendChild(btnDislike);

    //IMG para boton DisLike
    const imgBtnDislike = document.createElement("img");
    imgBtnDislike.setAttribute("class", "btn-dis-like-icon");
    imgBtnDislike.setAttribute("src", "assets/img/like_icon.png")
    btnDislike.appendChild(imgBtnDislike);

    //Div COLlikes
    const divParrRow = document.createElement("Div");
    divParrRow.setAttribute("class", "center-col-likes");
    divBtnRow.appendChild(divParrRow);

    //Parrafo firma
     const footer = document.createElement("p");
     const textFooter = document.createTextNode("( "+change.data().name+", "+change.data().age+" años... de "+change.data().location+" ) ")
     footer.setAttribute("class","post-age-location")
     footer.appendChild(textFooter);
     divParrRow.appendChild(footer);

    //Funcion borrar post
    btnDelete.addEventListener('click', ()=>{
        if(confirm("¿Realmente quieres eliminar esta publicación?")){
            db.collection('post').doc(change.id).delete()  
        }
    })

    //Funcion boton like
    btnLike.addEventListener("click", ()=>{
        let Key = "liked_"+user.uid
        db.collection("post").doc(change.id).update({ 
            likes: (Number(change.data().likes)+1), 
            [Key]: true})
    })

    //Funcion boton dislike
    btnDislike.addEventListener("click", ()=>{
        let Key = "liked_"+user.uid
        if(change.data().likes != "0"){
            db.collection("post").doc(change.id).update({ 
                likes: (Number(change.data().likes)-1), 
                [Key]: false})
        }
    })
        
    // Unir todo a div contenedor post-wall    
    if(postWallContainer!=null){
        postWallContainer.appendChild(divContainer);
    }

    isLikeOrDislike(change,user)
    userPostDeleteEdit(change)
}

//Mostrar botones si el usuario es el autor.
const userPostDeleteEdit = (change) =>{
    firebase.auth().onAuthStateChanged(user => {
        const btnDelete = document.getElementById("btn-delete-"+change.id);
        const btnEdit= document.getElementById("btn-edit-"+change.id);
        if(btnDelete == null || user==null){
            return
        }
        if(user.uid == change.data().author){
            btnDelete.style.display = "inline";
            btnEdit.style.display = "inline";
        }else{
            btnDelete.style.display = "none";
            btnEdit.style.display = "none";
        }
    }
)}

//Mostrar boton Like o Dislikes, dependiendo de su valor true o false
const isLikeOrDislike = (change,user) =>{
    const btnLike = document.getElementById("btn-like-"+change.id);
    const btnDislike = document.getElementById("btn-dislike-"+change.id);
   
            let Key = "liked_"+user.uid
        if(btnLike == null || btnDislike == null){
            return
        }
        if(change.data()[Key]){
            btnLike.style.display= "none";
            btnDislike.style.display= "inline";
        }else{
            btnDislike.style.display= "none";
            btnLike.style.display= "inline";
        }
    
}



//Muestra los posts del usuario.
export const realTimePost =  () =>{
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
    db.collection("post").orderBy("date","desc").where("author", "==", user.uid).limit(10).onSnapshot((querySnapshot)=>{
    const profilePost = document.getElementById("profile-post");
    if(profilePost !=null){
        profilePost.innerHTML = "";
        querySnapshot.forEach((doc)=>{
        renderPost(doc,db,profilePost,user)
        })
    }
})
}



//Muestra los datos de usuario.
export const renderProfile = () =>{
   const db = firebase.firestore();
   let user = firebase.auth().currentUser; 
   db.collection("users").where("user_id", "==", user.uid).get().then(function(querySnapshot) {
    querySnapshot.forEach((doc)=>{
    renderDataProfile(doc)
                           
})

})
}


//Inserta los datos del perfil en el html.
const renderDataProfile = (doc) =>{
    document.getElementById('profile-wall').innerHTML =
    `<p class="profile-data">
    Nombre: ${doc.data().name}<br>
    Edad: ${doc.data().age}<br>
    Procedencia: ${doc.data().location}<br>
    Email: ${doc.data().email}</p`
}