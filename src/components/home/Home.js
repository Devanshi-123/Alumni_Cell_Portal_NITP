import React from 'react';
import Head from "../head/Head";
import './C.jsx';
import CarouselContainer from "./C";
import Footer from "../footer/Footer";
import Cards from "./cards";
function Home() {
    return (
        <>
         <Head title="LETS CONNECT" />
         <CarouselContainer/>
         <br/>
         <Cards/>
         <br/>

         <Footer/>
        </>
    );
}

export default Home;