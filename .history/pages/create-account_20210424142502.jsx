import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import Form from "../components/molecules/Form";

export default function createAccount() {
  return (
    <Layout>
      <div
        className="hidden  lg:container lg:max-w-screen-lg lg:my-0 lg:mx-auto lg:min-h-0 lg:box-border lg:h-auto
        lg:grid lg:grid-col-1 lg:pb-4  "
      >
        <Form />
      </div>
    </Layout>
  );
}
