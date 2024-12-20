import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [email,setEmail] = useState(null);
  const [loading,setLoading] = useState(true);
  //Create USer 
  const createNewUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
  // Update User
  const updateUserProfile = (updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
  }
  //Login
  const logIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  //Logout
  const logOut = ()=>{
    setLoading(true);
    showToast('Logged Out','info');
    return signOut(auth);
  }
  //Reset Password
  const passwordResetEmail = (email)=>{
    setEmail(email)
  }
  const passwordReset = (email)=>{
    return sendPasswordResetEmail(auth,email)
  }
  //Toast Notification
  const showToast = (message, type) => {
      if(type!=''){
          toast[type](message);
      }else{
          toast(message);
      }
      
    };
  //
  const authInfo = {user,setUser,showToast,createNewUser,updateUserProfile,logOut,logIn,email,passwordReset,passwordResetEmail,loading}
  useEffect(()=>{
        
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        console.log('Status Captured : ',currentUser?.email);
        if(currentUser?.email){
          //JWT TOKEN Info
          const userData = {email : currentUser.email}
          axios.post('http://localhost:5000/jwt', userData,{withCredentials:true})
            .then(function (response) {
              console.log(response.data);
              setLoading(false);
            })
            .catch(function (error) {
              console.log(error);
            });
        }else{
          axios.post('http://localhost:5000/logout', {},{withCredentials:true})
            .then(function (response) {
              console.log('Logout ',response.data);
              setLoading(false);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        
        
    })
    return () => {
        unsubscribe()
    };
},[]);
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        <ToastContainer />
    </AuthContext.Provider>
  )
}

export default AuthProvider