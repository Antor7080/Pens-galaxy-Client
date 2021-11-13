import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/cover1.jpg'
import img2 from '../../../images/cover2.jpg'
import img3 from '../../../images/cover3.jpg'

const Banner = () => {
    return (
       <div className="mt-4 pt-4">
            <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
       </div>
    );
};

export default Banner;