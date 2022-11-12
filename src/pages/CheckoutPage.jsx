import { Footer, Header } from "../components/layout";
import React, { Fragment } from "react";
import { Intro, Checkout } from "../modules/Checkout";

const CheckoutPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Intro></Intro>
      {/* <Progress></Progress> */}
      <Checkout></Checkout>
      <Footer></Footer>
    </Fragment>
  );
};

export default CheckoutPage;
