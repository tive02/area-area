import React, { useEffect, useState } from "react";
import firebase from "../firebase";

export default function useAuthentication() {
  const [UserAuthentication, setUserAuthentication] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setUserAuthentication(user);
      } else {
        setUserAuthentication(null);
      }
    });
    return () => unsuscribe;
  }, []);

  return useAuthentication;
}
