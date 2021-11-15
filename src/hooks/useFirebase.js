import { useEffect, useState } from "react";
import initFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged,updateProfile } from "firebase/auth";

initFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const registerUser = (email, password, history, name) => {
         setLoading(true);
         createUserWithEmailAndPassword(auth, email, password)
         .then( () => {
             setAuthError('');
             const newUser = {email,displayName: name}
             setUser(newUser);
             saveUser(email, name)
             updateProfile(auth.currentUser, {
              displayName : name
            }).then(() => {
              
            }).catch(() => {
              
            });
             history.replace('/home')
         }).catch((error) => {
            
            setAuthError (error.message);
            
          }).finally(() => setLoading(false))
    }

    const loginUser = (email, password, history, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            const destination = location.state?.from || '/home';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
          
          setAuthError (error.message);
        }).finally(() => setLoading(false))
    }

    // Observer
    useEffect(() => {
         const unsubscibe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
             setUser({})
            }
            setLoading(false);
          });
          return () => unsubscibe;
    },[])

    useEffect(() =>{
         fetch(`https://fathomless-dusk-39625.herokuapp.com/users/${user.email}`)
         .then(res=> res.json())
         .then(data=> setAdmin(data.admin))
    }, [user.email])
    
    const logOut = () => {
        setLoading(true);
     
        signOut(auth).then(() => {
            
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          }).finally(() => setLoading(false))
          
    }

    const saveUser = (email, displayName) => {
          const user ={email, displayName}
          fetch('https://fathomless-dusk-39625.herokuapp.com/users', {
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(user)

          })
          .then()
    }

    return {
        user,
        admin,
        loading,
        registerUser,
        authError,
        loginUser,
        logOut
    }
}

export default useFirebase;