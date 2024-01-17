import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const [loading, setLoading] = useState(true)
const googleProvier = new GoogleAuthProvider();

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

// google login
const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvier);
}

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;