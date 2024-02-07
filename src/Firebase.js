// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBVtHQWXSZMHiwpxi1B4D_QPfHZKwMNSA4",

    authDomain: "les-5-saisons.firebaseapp.com",

    projectId: "les-5-saisons",

    storageBucket: "les-5-saisons.appspot.com",

    messagingSenderId: "185050715706",

    appId: "1:185050715706:web:1992cabf83c699d08cc703",

    measurementId: "G-08Q51XKGGW"

};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;