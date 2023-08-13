import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiF3BoG4IXwLdG5NCO99GorD1WU7-JDAY",
    authDomain: "e-commerce-app-a3711.firebaseapp.com",
    projectId: "e-commerce-app-a3711",
    storageBucket: "e-commerce-app-a3711.appspot.com",
    messagingSenderId: "749161191843",
    appId: "1:749161191843:web:4cb8365f88ba478494e216",
    measurementId: "G-JBP2ETB75E"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

export { auth} ;