
//Crea nuevo post dentro de la coleccion "posts", con los valores dados por el usuario en los text area.
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
            renderPost3(change.doc,db);
            // if(change.type == 'added'){
            //     console.log(change.type)
             
            //  }if(change.type == 'modified'){
                 
                 
            //  }
             })




}) }
//Lee todos los posts y para cada uno llama a renderPost()
export const readingPosts = () =>{
    let db = firebase.firestore();
    db.collection("post").orderBy("date","desc").get().then((post)=>{
        post.forEach((doc) => {
             renderPost3(doc,db)
        })
    })
}



 
            
        

//Toma los posts y los muestra en el HTML
const renderPost =(doc,db) =>{
    let postDate = new Date(doc.data().date);
    
    document.getElementById('post-wall').innerHTML +=
        `<div class="post-container">
            <div class="post-read">
                <p>
                    <span class="post-date">${postDate.toLocaleDateString()} a las ${postDate.toLocaleTimeString()}</span>
                    <br> 
                    <span class="post-top">${doc.data().name}</span><br>
                    <span>(${doc.data().stage_direction}):</span>
                    <br><br>
                    <span class="post-message">${doc.data().message}</span>
                    <br>
                    <br>
                    <span id="like_count_${doc.id}">${doc.data().likes}❤️</span>
                    
                </p>    
                <button id="like_${doc.id}" onclick=${hola("like_"+doc.id,db,doc,"like_count_"+doc.id)} >Like</button>
                <button id="dislike_${doc.id}">dislike</button>
                <p class="post-age-location">( ${doc.data().name}, ${doc.data().age} años... de ${doc.data().location} ) <br></p>
            
            </div> 
        </div>                 
        `   
        // if(change.doc.data().liked){
        //     document.getElementById("like_"+doc.id).style.display = "none";
        //     document.getElementById("dislike_"+doc.id).style.display = "visible";
        // }else{
        //     document.getElementById("like_"+doc.id).style.display = "visible";
        //     document.getElementById("dislike_"+doc.id).style.display = "none";
        // }
       
    
     
       

}
const hola = (btnLike,db,doc,likeCount) =>{
    db.collection("post").get().then(()=>{
    document.getElementById(btnLike).addEventListener('click', ()=>{
     db.collection("post").doc(doc.id).onSnapshot((snapshot)=>{
        db.collection("post").doc(doc.id).update({ likes: Number(doc.data().likes)+1, liked: true}).then(()=>{
        document.getElementById(likeCount).innerHTML =snapshot.data().likes+"❤️"})});
    })})
}
  

const likePost = (buttonId,userLikes,doc,likeCount,db) => {

    
        db.collection("post").get().then(()=>{
            const btnLike = document.getElementById(buttonId)
            
            
            btnLike.addEventListener('click', ()=>{
                
                addLike(doc,userLikes,likeCount,db)
                
            })
            
    })
};


const addLike = (doc,userLikes,likeCount,db)=>{
  

   
    db.collection("post").doc(doc.id).onSnapshot((snapshot)=>{ 
        db.collection("post").doc(doc.id).update({ likes: Number(userLikes)+1, liked: true});
        document.getElementById(likeCount).innerHTML =snapshot.data().likes+"❤️"
        
    })
 }

    const disLike = (doc,userLikes,likeCount,db)=>{

        db.collection("post").doc(doc.id).update({ likes: Number(userLikes)-1, liked: false});
        db.collection("post").doc(doc.id).onSnapshot((querySnapshot)=>{
            
            document.getElementById(likeCount).innerHTML =querySnapshot.data().likes+"❤️"
            document.getElementById("like_"+doc.id).style.display = "visible";
            document.getElementById("dislike_"+doc.id).style.display = "none";
        
        })   
    
    }

    // <button id="like_${doc.id}" onclick=${likePost("like_"+doc.id,doc.data().likes,doc,"like_count_"+doc.id,db)}" class="btn-like">Like</button>


    const addLike2 = (db,doc,userLikes)=>{

        db.collection("post").doc(doc).update({ likes: Number(userLikes)+1, liked: true});}


        const renderPost2 =(change,db) =>{
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
                console.log( document.getElementById("like_"+change.doc.id))
                document.getElementById("like_"+change.doc.id).addEventListener('click', ()=>{
                    console.log("hola")
                    db.collection("post").doc(change.doc.id).update({ likes: Number(change.doc.data().likes)+1, liked: true})
                  })
                
            
            }

const renderPost3 = (doc,db) =>{
    // Creating a div element
var divElement = document.createElement("Div");
divElement.id = "divID";

// Styling it
divElement.style.textAlign = "center";
divElement.style.fontWeight = "bold";
divElement.style.fontSize = "smaller";
divElement.style.paddingTop = "15px";

// Adding a paragraph to it
var paragraph = document.createElement("P");
paragraph.id="count_"+doc.id
var text = document.createTextNode(doc.data().likes+"❤️");
paragraph.appendChild(text);
divElement.appendChild(paragraph);

// Adding a button, cause why not!
var button = document.createElement("Button");
var textForButton = document.createTextNode("Release the alert");
button.appendChild(textForButton);
button.addEventListener("click", function(){
    db.collection("post").doc(doc.id).update({ likes: Number(doc.data().likes)+1, liked: true});
    db.collection("post").doc(doc.id).onSnapshot((snapshot)=>{ 
        
       
       console.log(snapshot.data().likes)
    })


})

        
    
    

divElement.appendChild(button);

// Appending the div element to body
document.getElementById("post-wall").appendChild(divElement);

}

