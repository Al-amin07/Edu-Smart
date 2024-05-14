import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

import { onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const provider = new GithubAuthProvider();

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // https://assignment-11-server-4.vercel.app
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
          
            const userEmail = { email: currentUser?.email}
            // const email = { currentUser.email};
            if(currentUser){
                axios.post('https://assignment-11-server-4.vercel.app/jwt',userEmail, {withCredentials: true})
                .then(() => {
                    setLoading(false);
                })
                .catch();
            }
            else{
                axios.post('https://assignment-11-server-4.vercel.app/logout',userEmail,{withCredentials: true})
                .then(() => {
                    setLoading(false);
                })
            }
            
        })

        return () => unSubscribe();
    }, [])
    const info = {user, register,logIn, loading, logOut, googleLogin, githubLogin }
    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;