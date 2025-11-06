import React, { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { useEffect } from "react";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // create User
  const userCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LogIn User
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User Log Out
  const userLogOut = () => {
    return signOut(auth);
  };

  // User Update profile

  const userUpdateProfile = (updateData) => {
   return updateProfile(auth.currentUser, updateData);
    
  }

  // User Observer state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // User object
  const userInfo = {
    userCreate,
    userLogIn,
    user,
    loading,
    userLogOut,
    setUser,
    setLoading,
    userUpdateProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
