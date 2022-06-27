import { Header } from "../components/layout";
import React, { Fragment } from "react";
import { Intro, Progress, Checkout } from "../modules/Checkout";

const CheckoutPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Intro></Intro>
      <Progress></Progress>
      <Checkout></Checkout>
    </Fragment>
  );
};

export default CheckoutPage;
