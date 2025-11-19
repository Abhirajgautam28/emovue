// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBajnCsfNcx2N4urkmyRY41QhIlcn92sTM",
  authDomain: "emovue-51126767-db824.firebaseapp.com",
  projectId: "emovue-51126767-db824",
  storageBucket: "emovue-51126767-db824.firebasestorage.app",
  messagingSenderId: "792015026828",
  appId: "1:792015026828:web:d1f12ef109dadbee8cd9a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
