import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "zarchat-9b1fc.firebaseapp.com",
  projectId: "zarchat-9b1fc",
  storageBucket: "zarchat-9b1fc.appspot.com",
  messagingSenderId: "1012178522528",
  appId: "1:1012178522528:web:6d58df5e3d50f9c04014c5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()