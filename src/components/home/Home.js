import React from 'react';
import Head from "../head/Head";
import './C.jsx';
import CarouselContainer from "./C";
import Footer from "../footer/Footer";
import Cards from "./cards";

import './home.scss';
import {TextField} from '@material-ui/core'
function Home() {
    return (
        <>
         <Head title="LETS CONNECT" />
         <CarouselContainer/>
         <br/>
         <Cards/>
         <br/>
            <div>
           <text className='txt1'>Explore us</text>
           <iframe style={{width:'1200px', height:"520px", marginLeft:"35px", marginTop: "40px"}} src="https://www.youtube.com/embed/x4RobGJYNGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <text className='txt2'>Write to us</text>
          <TextField style={{marginTop: '50px',width:'1200px',marginLeft:'35px'}}


          variant="outlined"
          multiline
          fullWidth
          label="Type your message"/>
            <button style={{marginLeft:'35px',marginTop:'20px',width:'100px',borderColor:'#EF2626',backgroundColor:'white'}}>SUBMIT</button>
           </div>
           <br/>



         <Footer/>
        </>
    );
}

export default Home;
