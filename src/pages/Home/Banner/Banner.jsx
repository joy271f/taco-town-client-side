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
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <Carousel className='carousel-container' activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="rounded d-block w-100"
                                src="http://surl.li/gvmzm"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://surl.li/gvnaf"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className='div-container'>
                            <img
                                className="d-block w-100"
                                src="http://surl.li/gvmzr"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={12} md={6}>
                    <Lottie animationData={chefBanner} className='h-75'  loop={true}></Lottie>
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;