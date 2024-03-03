import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCHGpnCBUeVfVRljnY33oCQCxfrpBM8liA",
  authDomain: "departments-a9275.firebaseapp.com",
  databaseURL: "https://departments-a9275-default-rtdb.firebaseio.com",
  projectId: "departments-a9275",
  storageBucket: "departments-a9275.appspot.com",
  messagingSenderId: "58175864054",
  appId: "1:58175864054:web:f7ed63a8484b56333540d7",
  measurementId: "G-2CF0YTGP0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const provider = new GoogleAuthProvider();
export default {auth, provider};