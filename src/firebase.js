// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABDTSZ2dP2g0O8itAg_qccKZ94Yll0nKI",
  authDomain: "dev-backend-80330.firebaseapp.com",
  projectId: "dev-backend-80330",
  storageBucket: "dev-backend-80330.appspot.com",
  messagingSenderId: "648661737592",
  appId: "1:648661737592:web:c5d6ec5f21ea722a428d8d",
  measurementId: "G-NFJNTLCMH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;