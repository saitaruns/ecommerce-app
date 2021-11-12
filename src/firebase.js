// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCrDexb6QnQiAuyX4h9_klT4P8T8TADo3Y",
    authDomain: "e-commerce-e115d.firebaseapp.com",
    projectId: "e-commerce-e115d",
    storageBucket: "e-commerce-e115d.appspot.com",
    messagingSenderId: "664343062728",
    appId: "1:664343062728:web:f092b9f2dd0907f8499dfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init db
export const db = getFirestore()

//init services

// let products = [];

//init docs