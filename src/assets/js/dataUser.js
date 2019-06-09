

export const userData = () =>{

    firebase.auth().onAuthStateChanged(function(user) {
            
        const dbPost = firebase.firestore();
        const userRef = dbPost.collection('users').doc(user.uid);
        userRef.get().then(function(doc) {
            if (doc.exists) {
               console.log (doc.data().name)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
        })}
    






export const validateName =() =>{
    let nameProfile = firebase.auth().currentUser.profileName;
    if(firebase.auth().currentUser.displayName){
        nameProfile = firebase.auth().currentUser.displayName;
    }
    return nameProfile;
}

