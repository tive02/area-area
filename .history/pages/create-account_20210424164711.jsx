import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import Form from "../components/molecules/Form";
import Button from "../components/atoms/Button";

export default function createAccount() {
  return (
    <Layout>
      <div
        className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border h-auto
        grid grid-col-1 p-4 "
      >
        <Form
          title="Crea Tú cuenta en"
          valueBotton="Iniciar Sesión"
          linkBottom="/login"
          valueInput="Registrate"
        />
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
