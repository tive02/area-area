import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import Form from "../components/molecules/Form";

export default function createAccount() {
  return (
    <Layout>
      <div className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border bg-red-500">
        <Form />
      </div>
    </Layout>
  );
}
