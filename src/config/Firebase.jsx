// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_API_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_API_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_API_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_API_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_API_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Login

export const login = ({email,password}) => {
    return signInWithEmailAndPassword(auth,email,password)
}

// Registro

export const register = ({email,password}) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

// LogOut

export const logOut = () => signOut(auth)