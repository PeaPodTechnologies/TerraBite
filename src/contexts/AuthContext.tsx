import { useContext, useState, createContext, useEffect, FC } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBu-HUVUr18SJd4bp6wIq770bGiPkl7NDg",
    authDomain: "terrabite-65296.firebaseapp.com",
    projectId: "terrabite-65296",
    storageBucket: "terrabite-65296.appspot.com",
    messagingSenderId: "891143434299",
    appId: "1:891143434299:web:252d29fa7cbb90d9936c1e",
    measurementId: "G-NL6H5BEPSL"
};
firebase.initializeApp(firebaseConfig);

const AuthContext = createContext<null | undefined | firebase.User>(undefined);

export function useAuth(){
    return useContext(AuthContext);
}

const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<null | undefined | firebase.User>(undefined);

    useEffect(()=>{
        return firebase.auth().onAuthStateChanged(user=>{
            console.log('PING')
            console.log(user?.displayName);
            setCurrentUser(user);
        })
    },[])
    const value = currentUser;

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;