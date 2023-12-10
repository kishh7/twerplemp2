import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import './Login.css';


const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Feed")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo" style={{ color:"white", fontWeight:"bold",  fontSize:"24px"}}>Twerple</span>
        <span className="title">Login Form</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button style={{  backgroundColor: "black",
        color: "white",
        padding: "10px",
        fontWeight:"bold",
        border: "none",
        cursor: "pointe"}}> Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p style={{color:"white",  fontSize: "12px", marginTop: "10px"}}>You don't have an account? <Link to="/Signup" style={{color:"black"}}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
