import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBboccJLs4R8319qwWuNr0aAhqIW2em6ZU",
    authDomain: "clone-a21ed.firebaseapp.com",
    projectId: "clone-a21ed",
    storageBucket: "clone-a21ed.appspot.com",
    messagingSenderId: "897273576553",
    appId: "1:897273576553:web:b9b7d4cd813f6d447236f8",
    measurementId: "G-571F6YXL40"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };