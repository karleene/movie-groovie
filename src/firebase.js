// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn4JiA0JPbleAXend3-_xHYt3cLXR0-_0",
    authDomain: "movie-groovie.firebaseapp.com",
    projectId: "movie-groovie",
    storageBucket: "movie-groovie.appspot.com",
    messagingSenderId: "34001944591",
    appId: "1:34001944591:web:97679182b8cf95e042a37a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;