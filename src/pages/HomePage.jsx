import React, { Fragment } from "react";
import {
  Content,
  Countdown,
  Footer,
  Header,
  Library,
  Popular,
  Reason,
  Sale,
  Slider,
  Success,
} from "../components/layout";

const HomePage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Slider></Slider>
      <Library></Library>
      <Popular></Popular>
      <Reason></Reason>
      <Success></Success>
      <Sale></Sale>
      <Countdown></Countdown>
      <Content></Content>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
