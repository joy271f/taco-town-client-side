import React from 'react';
import banner from '../../../../public/banner.jpg'
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='hard-text'>
            <img src={banner} className='banner-img w-100' alt="" />
            <div className='center-text'>
                <h1>Real Food. Real Simple</h1>
                <p>Premium Health Recipes</p>
                <Button variant='success'>Discover Now</Button>
            </div>
        </div>
    );
};

export default Banner;