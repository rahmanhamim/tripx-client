import {
 getAuth,
 signInWithPopup,
 signOut,
 GoogleAuthProvider,
 onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
 const [user, setUser] = useState({});
 const [error, setError] = useState("");
 const [isLoading, setIsLoading] = useState(true);

 // google sign in
 const googleSignIn = () => {
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
   .then((result) => {
    setError("");
    return setUser(result.user);
   })
   .catch((error) => {
    setError(error.message);
   })
   .finally(() => {
    setIsLoading(false);
   });
 };
 // logout
 const logOut = () => {
  setIsLoading(true);
  signOut(auth)
   .then(() => {
    setUser({});
   })
   .finally(() => setIsLoading(false));
 };

 // obeserver
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   } else {
    setUser({});
   }
   setIsLoading(false);
  });
  return unsubscribe;
 }, []);

 //  console.log(error);

 return {
  user,
  googleSignIn,
  logOut,
  isLoading,
  error,
 };
};

export default useFirebase;
