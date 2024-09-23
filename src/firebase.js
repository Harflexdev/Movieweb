// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPODOq_bAUp6ZNEK_aQH2TnmUjcpkCBBI",
    authDomain: "movieweb-71817.firebaseapp.com",
    projectId: "movieweb-71817",
    storageBucket: "movieweb-71817.appspot.com",
    messagingSenderId: "315689853161",
    appId: "1:315689853161:web:6c048bebe1600dbe4b1078",
    measurementId: "G-ZGQ69E4X0D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
