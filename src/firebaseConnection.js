import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtIHe6aMmEKZbKQDB72VvpBhf2n7SOFyQ",
  authDomain: "curso-sujeito-5d2ff.firebaseapp.com",
  projectId: "curso-sujeito-5d2ff",
  storageBucket: "curso-sujeito-5d2ff.appspot.com",
  messagingSenderId: "509724749586",
  appId: "1:509724749586:web:8983501d0bf3b94c0dcdcb",
  measurementId: "G-342R0FRHYE",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
