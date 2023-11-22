import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "excel-arq.firebaseapp.com",
  projectId: "excel-arq",
  storageBucket: "excel-arq.appspot.com",
  messagingSenderId: "928609101273",
  appId: "1:928609101273:web:e427a725d9faf87648a5c8"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);