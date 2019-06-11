export const postCreate = (userPost,userStageDirection) =>{
    let db = firebase.firestore();
    let date= Date.now()
    console.log(date)
    firebase.auth().onAuthStateChanged(user=> {
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
                liked:""
            }).then(()=> {
                window.location.hash='/wall';
            })  
        })
    })
}

export const readingPosts2 = () =>{
    let db = firebase.firestore();
    
    db.collection("post").orderBy("date","desc").onSnapshot(snapshot =>{
    
    snapshot.docChanges().forEach((change)=>{ 
        console.log(change.type);
  
   
    console.log(change.doc.id)
    console.log(change.type);


    


     })
                    
    }) }
    
    

    const renderPost2 = (change,db) =>{
    
    const postDate = new Date(change.data().date);

        // Contenedor
    let divContainer = document.createElement("Div");
    divContainer.setAttribute("class", "post-container" );
    

    let divElement = document.createElement("Div");
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
    divElement.appendChild(dateSpan);
    //BR
    const brDate = document.createElement("br");
    divElement.appendChild(brDate);
   
    //Span Nombre
    const nameSpan = document.createElement("Span");
    const textName = document.createTextNode(change.data().name)
    nameSpan.setAttribute("class","post-top");
    nameSpan.appendChild(textName);
    divElement.appendChild(nameSpan);

    //BR
    const brName = document.createElement("br");
    divElement.appendChild(brName);

    //Span Stage
    const stageSpan = document.createElement("span");
    const textStage = document.createTextNode("( "+change.data().stage_direction+" ) :")
    stageSpan.appendChild(textStage);
    divElement.appendChild(stageSpan);

    //P MSG
    const msgSpan = document.createElement("p");
    const textMsg = document.createTextNode(change.data().message);
    msgSpan.setAttribute("class","post-message");
    msgSpan.appendChild(textMsg)
    divElement.appendChild(msgSpan)
    

    // Span de likes
    const likeSpan = document.createElement("span");
    likeSpan.setAttribute("id","count_"+change.id)
    const textLike = document.createTextNode(change.data().likes+"❤️");
    likeSpan.appendChild(textLike);
    divElement.appendChild(likeSpan);
    
    // Botones
    let btnLike = document.createElement("Button");
    btnLike.id="btn-like-"+change.id
    var textForButton = document.createTextNode("Like");
    btnLike.appendChild(textForButton);
     divContainer.appendChild(btnLike)


    //P para nombre abajo
    const footer = document.createElement("p");
    const textFooter = document.createTextNode("( "+change.data().name+", "+change.data().age+"años... de "+change.data().location+" ) ")
    footer.setAttribute("class","post-age-location")
    footer.appendChild(textFooter);
    divContainer.appendChild(footer);

    btnLike.addEventListener("click", function(){
        db.collection("post").doc(change.id).update({ likes: Number(change.data().likes)+1, liked: true});
        
           
           console.log(change.data().likes)
        })
       
    document.getElementById("post-wall").appendChild(divContainer);
    }
        

        const renderPost3 =(change,db) =>{
            let postDate = new Date(change.doc.data().date);
            
            document.getElementById('post-wall').innerHTML +=
                `<div class="post-container">
                    <div class="post-read">
                        <p>
                            <span class="post-date">${postDate.toLocaleDateString()} a las ${postDate.toLocaleTimeString()}</span>
                            <br> 
                            <span class="post-top">${change.doc.data().name}</span><br>
                            <span>(${change.doc.data().stage_direction}):</span>
                            <br><br>
                            <span class="post-message">${change.doc.data().message}</span>
                            <br>
                            <br>
                            <span id="like_count_${change.doc.id}">${change.doc.data().likes}❤️</span>
                            
                        </p>    
                        <button id="like_${change.doc.id}"  class="btn-like">Like</button>
                        <button id="dislike_${change.id}">dislike</button>
                        <p class="post-age-location">( ${change.doc.data().name}, ${change.doc.data().age} años... de ${change.doc.data().location} ) <br></p>
                    
                    </div> 
                </div>                 
                `   
               
                document.getElementById("like_"+change.doc.id).addEventListener('click', ()=>{
                    console.log(change.doc.data().likes)
                    db.collection("post").doc(change.doc.id).update({ likes: Number(change.doc.data().likes)+1, liked: true})
                  })
                
        }
       
 /*Función que permite editar una publicación seleccionada por el usuario*/

export const postEdit = (id) =>{
    let dbPost = firebase.firestore();
    let textPost = document.getElementById("textpost").value;
    if(validatePost(textPost)){
        return dbPost.collection("post").doc(id).update({
            message : textPost
        }).then(function() {
            console.log("Document successfully updated!");
            //templateWall();
            window.location.hash="#/wall"; 
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}
