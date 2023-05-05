import React, { useEffect, useState } from 'react';
import './ChefSection.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            <h3 className='text-center mt-5'>Chef Bio</h3>
            <Container className='chef-card'>
            {
                chefs.map((chef) => (
                    <div key={chef.id} className='mt-5'>
                        <Card className='' style={{ width: '18rem' }}>
                            <Card.Img variant="top" className='card-img' src={chef.img} />
                            <Card.Body>
                                <Card.Title>{chef.name}</Card.Title>
                                <p className='mb-1'>Year of Experience: {chef?.year_of_experience}</p>
                                <p className='mb-1'>Number of Recipe: {chef?.number_of_recipes}</p>
                                <Card.Text className='mb-4'>
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