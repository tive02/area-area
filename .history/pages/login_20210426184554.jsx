import Head from "next/head";
import Button from "../components/atoms/Button";
import Layout from "../components/Layout/Layout";
import Form from "../components/molecules/Form";

export default function Login() {
  return (
    <Layout>
      <div className="container max-w-screen-lg mx-auto min-h-0 box-border">
        <Form
          hidden="hidden"
          title="Inicia Sesión"
          valueInput="Inicia Sesión"
          linkBottom="/login"
        />
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
