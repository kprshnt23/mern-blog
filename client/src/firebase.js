// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2c189.firebaseapp.com",
  projectId: "mern-blog-2c189",
  storageBucket: "mern-blog-2c189.appspot.com",
  messagingSenderId: "1075215129179",
  appId: "1:1075215129179:web:04434acfb07798b94fbd7e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


