import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import Lottie from "lottie-react";
import chefBanner from '../../../../public/chef-banner.json'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
                    <Carousel className='mb-5' activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-container img-fluid"
                                src="http://surl.li/gvmzm"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-container img-fluid"
                                src="http://surl.li/gvnmr"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-container img-fluid"
                                src="http://surl.li/gvmzr"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
               

        </>
    );
};

export default Banner;