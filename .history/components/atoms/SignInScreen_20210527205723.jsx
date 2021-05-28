// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /index after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    handleVerifyEmail(auth, actionCode, continueUrl, lang) {
      var actionCode = getParameterByName("oobCode");
      // (Optional) Get the continue URL from the query parameter if available.
      var continueUrl = getParameterByName("continueUrl");
      // (Optional) Get the language code if available.
      var lang = getParameterByName("lang") || "en";
      // Try to apply the email verification code.
      auth
        .applyActionCode(actionCode)
        .then((resp) => {
          // Email address has been verified.
          // additional state determined from that URL's parameters.
        })
        .catch((error) => {});
    },
  },
};

function SignInScreen() {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;
