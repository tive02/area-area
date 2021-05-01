import firebase, { FirebaseContext } from "../firebase";
import "../styles/globals.css";
import useAuthentication from "../hooks/useAuthentication";

function MyApp(props) {
  const user = useAuthentication();

  const { Component, pageProps } = props;
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user,
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
