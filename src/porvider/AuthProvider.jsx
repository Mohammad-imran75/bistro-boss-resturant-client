import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }
  useEffect(() => {
    const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);
      }
      setLoading(false)
    });return ()=>{
        return unSubscrive;
    }
  }, []);
  const userInfo = {
    loading,
    loginUser,
    signUpUser,
    googleLogin,
    user,
    logOut
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
