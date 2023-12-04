// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa8xOSOJP8k_m_peZj9ddRKL3dtMuwkB0",
  authDomain: "bingebox-1daa1.firebaseapp.com",
  projectId: "bingebox-1daa1",
  storageBucket: "bingebox-1daa1.appspot.com",
  messagingSenderId: "339609291505",
  appId: "1:339609291505:web:26f31d44b42e5946bf3750",
  measurementId: "G-YT3PFMLXSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();