
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmT8MUI7-530ue5VrtH65QJBHaHNVT-Tc",
  authDomain: "data-react-crud.firebaseapp.com",
  projectId: "data-react-crud",
  storageBucket: "data-react-crud.appspot.com",
  messagingSenderId: "530318702447",
  appId: "1:530318702447:web:3aa0b3958a67b2ef0d9a9a",
  measurementId: "G-S52FJ6FFVR"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);