import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';


const CarouselContainer = () => {
  return (

      <Carousel fade={true} pause={false}
      style = {{height:"80vh",width:"60vh",margin:"10vh"}}>
      <Carousel.Item interval={3000} className="car">
        <img
          style = {{height:"80vh",width:"60vh",margin:"10vh"}}
          src={image1}
          alt="First slide"
          className="d-block img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          style = {{height:"80vh",width:"60vh",margin:"10vh"}}
          src={image2}
          alt="Second slide"
          className="d-block img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          style = {{height:"80vh",width:"60vh",margin:"10vh"}}
          src={image3}
          alt="Third slide"
          className="d-block img-fluid"
        />
      </Carousel.Item>

    </Carousel>

  )
}

export default CarouselContainer;
