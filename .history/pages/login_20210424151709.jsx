import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Form from "../components/molecules/Form";

export default function Login() {
  return (
    <Layout>
      <div className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border">
        <Form hidden="hidden" title="Inicia Sesión" />
      </div>
    </Layout>
  );
}
