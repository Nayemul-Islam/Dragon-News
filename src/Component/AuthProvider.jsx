import React, { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/firebase.config";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  }
  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }

  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
        unSubscribe();
    }
  }, []);

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );

};

export default AuthProvider;
