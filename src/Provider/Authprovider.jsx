import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import app from "../Firebase/Firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
   

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const sighinInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }



    useEffect(() => {

        const unsubScribe = onAuthStateChanged(auth, curentUser => {
            setUser(curentUser)
            if (curentUser.email) {
                axios.post('http://localhost:5000/jwt', { email: curentUser?.email })
                    .then(res => {
                        console.log(res.data);
                        localStorage.setItem('access-token', res?.data?.token);
                        setLoading(false)
                    })
                    .catch(error => {
                        console.error(error);
                        
                    });

            }
            else{
                localStorage.removeItem('access-token')
            }

            
        })

        return () => {
            return unsubScribe()
        }
    }, [])



    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }




    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }




    const userInfo = {
        loading,
        setLoading,
        user,
        createUser,
        sighinInUser,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;