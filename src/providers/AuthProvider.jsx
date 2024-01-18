import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const [loading, setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider();

//create user
const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

// login 
const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

//logout
const logOut =()=>{
    setLoading(true)
    return signOut(auth);
}
// google login
const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
}

useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe();
    }
},[])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;