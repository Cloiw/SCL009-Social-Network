



export const userData = () =>{

    firebase.auth().onAuthStateChanged(function(user) {
           if(!user){
               return
           }
        const dbPost = firebase.firestore();
        const userRef = dbPost.collection('users').doc(user.uid);
        userRef.get().then(function(doc) {
            if (doc.exists) {
                document.getElementById("bleh").innerHTML = `Bienvenido ${doc.data().location}`
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
        })}
    






