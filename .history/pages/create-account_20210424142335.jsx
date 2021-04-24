import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import Form from "../components/molecules/Form";

export default function createAccount() {
  return (
    <Layout>
      <div
        className="hidden md:container md:max-w-screen-lg md:my-0 md:mx-auto md:min-h-0 md:box-border md:h-auto
        md:grid md:grid-col-1 md:pb-4  "
      >
        <Form />
      </div>
    </Layout>
  );
}
