import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import '/Users/abhaymalsatar/Office/crud_firebase/src/App.css';


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

export default function LoginRegister() {
  let check = "false";
  const location = useLocation();
  if (location.state) {
    check = location.state;
  }
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  function handleRegistration() {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user.email);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate('/', {state:"false"})
    })
  }

  function gotoRegistration() {
    navigate("/", {state : "true"})
  }
  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })
  console.log(value);
 
  if (check === "false") {
    return (
      <div className='App' style={{ marginTop: 300 }}>
        <button type="button" onClick={handleLogin} className="btn btn-primary">Log in with Google</button>
        <button type="button" onClick={gotoRegistration} className="btn btn-primary">New User</button>
      </div>
    )
  } else {
    return (
      <div className='App' style={{ marginTop: 300 }}>
        <button type="button" onClick={handleRegistration} className="btn btn-primary">Sign in with Google</button>
      </div>
    )
  }
  
}
