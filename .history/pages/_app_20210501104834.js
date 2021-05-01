import firebase, { FirebaseContext } from "../firebase";
import "../styles/globals.css";
import useAutenticacion from "../hooks/useAutenticacion";

function MyApp(props) {
  const usuario = useAutenticacion();

  const { Component, pageProps } = props;
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
