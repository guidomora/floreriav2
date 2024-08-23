// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDQXQWed7pzUQKmbVQnJ8meDPu_b8FG-M",
  authDomain: "floreria-morabito.firebaseapp.com",
  projectId: "floreria-morabito",
  storageBucket: "floreria-morabito.appspot.com",
  messagingSenderId: "670367507633",
  appId: "1:670367507633:web:3aeb2d2207212425656e90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);