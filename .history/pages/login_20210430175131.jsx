import Head from "next/head";
import { useForm } from "react-hook-form";
import Button from "../components/atoms/Button";
import Layout from "../components/Layout/Layout";
import Form from "../components/molecules/Form";

//modulos de firebase
import firebase from "../firebase/firebase";

export default function Login() {
  //Funcion cuando el usuario hace submit

  async function Login(data) {
    try {
      await firebase.login(data["email"], data["password"]);
      Router.push("/");
    } catch (error) {
      console.error("Existio un error", error.message);
    }
  }
  return (
    <Layout>
      <div className="container max-w-screen-lg mx-auto min-h-0 box-border">
        <Form hidden="hidden" title="Inicia Sesión" onSubmit={Login} />
        <div className="flex flex-row justify-center items-baseline p-2.5">
          <p className="text-xl pr-2">¿No Tienes Cuenta? </p>
          <Button
            bgColor="bg-purple-700"
            borderColor="border-gray-700"
            value="Registrate"
            link="/create-account"
          />
        </div>
      </div>
    </Layout>
  );
}
