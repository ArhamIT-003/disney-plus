import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC245WhiY1io-bD5JaRZzw9LgRDfb9oBFs",
  authDomain: "disney-plus-284fb.firebaseapp.com",
  projectId: "disney-plus-284fb",
  storageBucket: "disney-plus-284fb.appspot.com",
  messagingSenderId: "151350151075",
  appId: "1:151350151075:web:6cb08155610d3278d77c16",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
