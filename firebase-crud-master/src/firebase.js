import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVgZEpeBvzTYPHnGbedn5y2ExZupozz-M",
  authDomain: "todo-f8124.firebaseapp.com",
  projectId: "todo-f8124",
  storageBucket: "todo-f8124.appspot.com",
  messagingSenderId: "171620451918",
  appId: "1:171620451918:web:f8d70e4cdbe4fa37afa51f",
  measurementId: "G-TJ6CKWTQT0"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
