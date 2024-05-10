import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

import { onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
        })

        return () => unSubscribe();
    }, [])
    const info = {user, register,logIn }
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