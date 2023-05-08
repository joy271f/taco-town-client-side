import React, { useEffect, useState } from 'react';
import './ChefSection.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-hat-server-side-whitehut3q-gmailcom.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className='chef-card-container'>
            <h3 className='text-center text-danger'>Our Top Chef's</h3>
            <Container className='chef-card'>
            {
                chefs.map((chef) => (
                    <div key={chef.id} className='mt-5'>
                        <Card className='m-2'>
                            <Card.Img variant="top" className='card-img img-fluid' src={chef.img} />
                            <Card.Body>
                                <Card.Title className='mx-1'>{chef.name}</Card.Title>
                                <Card.Text className='mb-1 mx-1'>Year of Experience: {chef?.year_of_experience}</Card.Text>
                                <Card.Text className='mb-1 mx-1'>Number of Recipe: {chef?.number_of_recipes}</Card.Text>
                                <Card.Text className='mb-3 mx-1'>
                                    Likes: {chef?.likes}
                                </Card.Text>
                                <Link to={`/chef-details/${chef.id}`}><Button variant="primary" className='button-color'>Chef Details</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </Container>
        </div>
    );
};

export default ChefSection;