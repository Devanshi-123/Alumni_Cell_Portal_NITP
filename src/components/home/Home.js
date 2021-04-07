import React from 'react';
import Head from "../head/Head";
import CarouselContainer from "./C";
import Cards from "./cards";
import App1 from "./newsletter/App1";
import './home.scss';
import { TextField } from '@material-ui/core'
import LandingPage from "./LandingPage/index";
import App2 from "./MailUs/App2";
function Home() {
  return (
    <>
      <Head title="LETS CONNECT" />
      {/* <LandingPage /> */}
      <table>
      <tr>
  <td>  <CarouselContainer /></td>
    <td> <text className="carouselText">WE CARRY <span style={{color:"#F9531E"}}>TRADITION</span></text> </td>
    </tr>
    </table>
      <br />
      <Cards />
      <App2 />
      <App1 />
    </>
  );
}

export default Home;
