import React from 'react';
import { Carousel } from 'react-bootstrap';
import Head from "../head/Head";
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';


const CarouselContainer = () => {
    return (

        <Carousel fade={true} pause={false}
            style={{ height: "80vh", width: "100%" }}>
            
            <Carousel.Item interval={3000} className="car" style={{position:"relative"}}>
                <img
                    style={{ height: "80vh", width: "100%" }}
                    src={image1}
                    alt="First slide"
                    className="d-block img-fluid"
                />
                <Head title="LETS CONNECT" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    style={{ height: "80vh", width: "100%" }}
                    src={image2}
                    alt="Second slide"
                    className="d-block img-fluid"
                />
                <Head title="LETS CONNECT" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    style={{ height: "80vh", width: "100%" }}
                    src={image3}
                    alt="Third slide"
                    className="d-block img-fluid"
                />
                <Head title="LETS CONNECT"  />
            </Carousel.Item>

        </Carousel>

    )
}

export default CarouselContainer;
