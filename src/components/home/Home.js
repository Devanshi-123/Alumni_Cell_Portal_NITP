import React from 'react';
import Head from "../head/Head";
import CarouselContainer from "./C";
import Footer from "../footer/Footer";
import Cards from "./cards";
import App1 from "./newsletter/App1";
import './home.scss';
import { TextField } from '@material-ui/core';
import LandingPage from "./LandingPage/index";
import App2 from "./MailUs/App2";
function Home() {
  return (
    <>
      <Head title="LETS CONNECT" />
      {/* <LandingPage /> */}
      <CarouselContainer />
      <br />
      <Cards />
      <App2 />
      <App1 />
      <Footer />
    </>
  );
}

export default Home;
