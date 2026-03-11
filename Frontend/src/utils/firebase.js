// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "prepper-50fd8.firebaseapp.com",
    projectId: "prepper-50fd8",
    storageBucket: "prepper-50fd8.firebasestorage.app",
    messagingSenderId: "411587550039",
    appId: "1:411587550039:web:70cc80b3e6fba7b30a7c12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export { auth, provider }