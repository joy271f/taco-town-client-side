import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    

    const logout = () => {
        return signOut(auth);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;