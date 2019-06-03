export const initFirebase = () => {

    // Initialize Firebase
     let firebaseConfig = {
       apiKey: "AIzaSyAtZeWBW2CSh8QXHK3n2hGX7wtWghfsu_4",
       authDomain: "red-social-teatro.firebaseapp.com",
       databaseURL: "https://red-social-teatro.firebaseio.com",
       projectId: "red-social-teatro",
       storageBucket: "red-social-teatro.appspot.com",
       messagingSenderId: "97465478289",
       appId: "1:97465478289:web:acc38d9f7145d07f"
     };
       firebase.initializeApp(firebaseConfig);
   
   // Initialize Cloud Firestore through Firebase
   return firebase.firestore();
   }