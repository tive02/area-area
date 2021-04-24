import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import Form from "../components/molecules/Form";

export default function createAccount() {
  return (
    <Layout>
      <div
        className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border h-auto
        grid grid-col-1 pb-4 lg:hidden "
      >
        <div
          className="grid grid-cols-1 gap-2 place-content-start place-items-center h-auto 
      lg:pl-4 lg:w-2/12 lg:absolute lg:inset-y-0 lg:right-0"
        >
          <div className="flex p-4 justify-around">
            <h1 className=" text-center text-xl">
              Crea tu cuenta en
              <span className="text-lg text-purple-800"> de Area a Area</span>
            </h1>
          </div>
          <Form />
        </div>
      </div>
    </Layout>
  );
}
