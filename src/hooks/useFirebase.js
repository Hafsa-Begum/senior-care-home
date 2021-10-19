import { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');

    // const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        // setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
        // .finally(() => setIsLoading(false))
    };
    //register using email and password
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
    }
    //signin using email and password
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setNameChange();
            })
    }

    //update user name
    const setNameChange = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {

            });

    }
    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    useEffect(() => {
        const unsubscribed = () => onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            // setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        // setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
        // .finally(() => setIsLoading(false))
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        createUser,
        processLogin,
        handleNameChange
        // isLoading
    };
};

export default useFirebase;