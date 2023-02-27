// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9zz-YrD4LuDdgAqElHF0q4dt3TbsM3PI",
  authDomain: "unicaribe-datos.firebaseapp.com",
  projectId: "unicaribe-datos",
  storageBucket: "unicaribe-datos.appspot.com",
  messagingSenderId: "565705814519",
  appId: "1:565705814519:web:1ea2b03ca84a664dbd3ef2",
  measurementId: "G-L6NW7BS1T5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore();


const FMenviar = document.getElementById('FMenviar');

FMenviar.addEventListener("submit", async (e) => {
  e.preventDefault();

  for (const i of materrias) {
 
  }
});
