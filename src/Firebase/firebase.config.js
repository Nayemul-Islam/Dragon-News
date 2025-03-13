// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoEwkPQqsMpMa2zvNTT7koZjytrDLJwjg",
  authDomain: "dragon-news-auth-7b85e.firebaseapp.com",
  projectId: "dragon-news-auth-7b85e",
  storageBucket: "dragon-news-auth-7b85e.firebasestorage.app",
  messagingSenderId: "46962922540",
  appId: "1:46962922540:web:b1b67323748415f8fbed89"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;