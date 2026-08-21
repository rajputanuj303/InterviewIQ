
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-15250.firebaseapp.com",
  projectId: "interviewiq-15250",
  storageBucket: "interviewiq-15250.firebasestorage.app",
  messagingSenderId: "419768496450",
  appId: "1:419768496450:web:4c5e6ddcb408e309d8d8db"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}