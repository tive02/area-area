import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario,
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
