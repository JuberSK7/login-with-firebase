import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase-config";

const User = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/login");
  });
  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <button onClick={() => signOut(firebaseAuth)}>Sign Out</button>
    </div>
  );
};

export default User;
