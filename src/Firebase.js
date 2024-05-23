// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyCzO0JgRTG-Ou5b21H8hAFR0WsWOq4KJaI",

    authDomain: "les-5-saisons-f6a5d.firebaseapp.com",

    projectId: "les-5-saisons-f6a5d",

    storageBucket: "les-5-saisons-f6a5d.appspot.com",

    messagingSenderId: "297732616791",

    appId: "1:297732616791:web:1f8f770b332ae0bd686912",

    measurementId: "G-6GL6R1TNW7"

};


const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;