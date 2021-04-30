import Head from "next/head";
import Router from "next/router";
import { useForm } from "react-hook-form";
//Componentes del proyecto
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import Form from "../components/molecules/Form";
import Button from "../components/atoms/Button";

//modulos de firebase
import firebase from "../firebase/firebase";

export default function createAccount() {
  //Debuggin useForm of library react-hook-form
  const { handleSubmit } = useForm();

  //Funcion cuando el usuario hace submit
  async function onSubmit(data) {
    try {
      await firebase.register(data["name"], data["email"], data["password"]);
      Router.push("/");
    } catch (error) {
      console.error("Existio un error", error.message);
    }
  }

  return (
    <Layout>
      <div
        className="container max-w-screen-lg mx-auto min-h-0 box-border h-auto
        grid grid-col-1  "
      >
        <Form title="Crea tu cuenta en" onSubmit={onSubmit} />
        <div className="flex flex-row justify-center items-baseline p-2.5">
          <p className="text-xl pr-2">¿Tienes Cuenta? </p>
          <Button
            bgColor="bg-purple-700"
            borderColor="border-gray-700"
            value="Inicia Sesión"
            link="/login"
          />
        </div>
      </div>
    </Layout>
  );
}
