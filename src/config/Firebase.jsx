// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Database
import { getDatabase, ref, set } from "firebase/database";
import { remove } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_API_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_API_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_API_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_API_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_API_APP_ID,
    databaseURL:"https://comicverse-396d7-default-rtdb.europe-west1.firebasedatabase.app/"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// defino la base de datos
const db = getDatabase();

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

// Añadir y eliminar favoritos de la database (sólo si el user esta logueado)

export const addFavorite = (userId, comicId) => {
    set(ref(db, 'users/' + userId + '/favorites/' + comicId), true)
        .then(() => {
            console.log("Cómic añadido a favoritos");
        })
        .catch((error) => {
            console.error("Error al añadir a favoritos: ", error);
        });
};


export const removeFavorite = (userId, comicId) => {
    remove(ref(db, 'users/' + userId + '/favorites/' + comicId))
        .then(() => {
            console.log("Cómic eliminado de favoritos");
        })
        .catch((error) => {
            console.error("Error al eliminar de favoritos: ", error);
        });
};