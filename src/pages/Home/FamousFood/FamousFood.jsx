import React from 'react';
import { Container} from 'react-bootstrap';
import { FaAppleAlt, FaBreadSlice, FaCoffee, FaHamburger, FaPizzaSlice } from 'react-icons/fa';

const FamousFood = () => {
    return (
    <Container>
        <h3 className='text-center my-5 text-danger'>Our Menu</h3>
        <div className='d-flex justify-content-around my-5'>
            <div>
                <FaBreadSlice className='text-warning mx-1 fs-1 mb-3' />
                <h5>Bread</h5>
            </div>
            <div>
                <FaPizzaSlice className='text-warning mx-1 fs-1 mb-3' />
                <h5>Pizza</h5>
            </div>
            <div>
                <FaHamburger className='text-warning mx-1 fs-1 mb-3' />
                <h5>Burger</h5>
            </div>
            <div>
                <FaCoffee className='text-warning mx-1 fs-1 mb-3' />
                <h5>Coffee</h5>
            </div>
            <div>
                <FaAppleAlt className='text-warning mx-1 fs-1 mb-3' />
                <h5>Fruits</h5>
            </div>
        </div>
    </Container>
    );
};

export default FamousFood;