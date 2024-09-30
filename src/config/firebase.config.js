import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBAgeGjM0jJx4Uc_pUMPjC4IBKr1KPYzpE",
    authDomain: "coder-react-project-78dec.firebaseapp.com",
    projectId: "coder-react-project-78dec",
    storageBucket: "coder-react-project-78dec.appspot.com",
    messagingSenderId: "65245956719",
    appId: "1:65245956719:web:59677bbad51afb528f9b9a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);