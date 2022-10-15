import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initial";

initializeAuthentication();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //google signIn
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        setUser(result.user);

        //console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //logout
  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    googleSignIn,
    user,
    Logout,
  };
};
export default UseFirebase;
