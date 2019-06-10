
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
                likes: 0
            });  
        })
    })
}


//Lee todos los posts y para cada uno llama a renderPost()
export const readingPosts = () =>{
    let db = firebase.firestore();
    db.collection("post").orderBy("date","desc").get().then((post)=>{
        post.forEach((doc) => {
            renderPost(doc);
        })
    })
}

//Toma los posts y los muestra en el HTML
const renderPost =(doc) =>{
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
                    <span> ${doc.data().likes}❤️</span>
                    
                </p>    
                <button id="like_${doc.id}" class="btn-like">Like</button>
                
                <p class="post-age-location">( ${doc.data().name}, ${doc.data().age} años... de ${doc.data().location} ) <br></p>
            
            </div> 
        </div>                 
        `      
}
