import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  async registerGoogle() {
    const newUser = await this.auth.GoogleAuthProvider();
  }
  //Registra un Usuario con email y contraseña.

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    return await newUser.user.updateProfile({
      displayName: name,
    });
  }
  //Inicia Sesion del Usuario
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }
  //Cierra Sesion del usuario
  async outLogin() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();

export default firebase;
