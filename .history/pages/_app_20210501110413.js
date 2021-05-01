import firebase, { FirebaseContext } from "../firebase";
import "../styles/globals.css";
import useAuthentication from "../hooks/useAuthentication";

function MyApp(props) {
  const usuario = useAuthentication();
  console.log(usuario);

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
