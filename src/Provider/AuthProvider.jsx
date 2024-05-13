import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

import { onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import axios from "axios";
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            const userEmail = { email: currentUser?.email}
            // const email = { currentUser.email};
            if(currentUser){
                axios.post('http://localhost:5000/jwt',userEmail, {withCredentials: true})
                .then()
                .catch();
            }
            else{
                axios.post('http://localhost:5000/logout',userEmail,{withCredentials: true})
            }
            
        })

        return () => unSubscribe();
    }, [])
    const info = {user, register,logIn, loading, logOut }
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