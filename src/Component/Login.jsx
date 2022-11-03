import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChangeOut = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
   
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  
  return (
    <div>
      <section>
        <div className="container">
          <h1>LogIn</h1>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button onClick={handleChangeOut}>Log In</button>
          </div>
          <span>
            Don't have Account ?<Link to="/login">Register</Link>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Login;
