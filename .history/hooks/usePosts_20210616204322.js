import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";

const useProductos = (orden) => {
  const [posts, setPosts] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const setPosts = () => {
      firebase.db
        .collection("productos")
        .orderBy(orden, "desc")
        .onSnapshot(manejarSnapshop);
    };
    setPosts();
  }, []);

  function manejarSnapshop(snapshot) {
    const posts = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setPosts(posts);
  }

  return {
    productos,
  };
};

export default useProductos;
