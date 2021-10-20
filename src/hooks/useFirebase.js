import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                console.log(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    //register using email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    };
    //signin using email and password
    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    };
    //update user name
    const setNameChange = () => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    };


    return {
        user,
        isLoading,
        setIsLoading,
        setUser,
        signInUsingGoogle,
        logOut,
        createUser,
        processLogin,
        setName,
        setNameChange
    }
}

export default useFirebase;