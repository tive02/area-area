import Head from "next/head";
import Button from "../components/atoms/Button";
import Layout from "../components/Layout/Layout";
import Form from "../components/molecules/Form";

export default function Login() {
  return (
    <Layout>
      <div className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border">
        <Form
          hidden="hidden"
          title="Inicia Sesión"
          valueInput="Inicia Sesión"
          valueBotton="Registrate"
          linkBottom="/create-account"
        />
        <div className="p-2.5">
          <Button
            bgColor="bg-purple-700"
            borderColor="border-gray-700"
            value=""
            link=""
          />
        </div>
      </div>
    </Layout>
  );
}
