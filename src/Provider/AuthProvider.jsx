import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
}

const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
}



const AuthProvider = ({ children }) => {
    const [user, setUser] =  useState("")
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    } ,[])

    const authInfo = {
        user,
        googleSignIn,
        githubSignIn,
        registerUser,
        logout,
        loginUser,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;