import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './ChefDetails.css'

const ChefDetails = () => {
    const chefDetailsData = useLoaderData();
    const [chefs, setChefs] = useState([]);

    // const { recipe_name, image, ingredients, cooking_method, rating } = chefDetailsData[0]
    // const { name, year_of_experience, number_of_recipes, likes, img, short_bio } = chefs[0];
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (

        <div>
            <Container>
                <Row>
                    <Col sm={4}>

                    </Col>
                    <Col sm={8}>
                        {
                            chefDetailsData.map(chefDetails => (
                                <div>
                                    <Card className='mx-auto my-5 box-style' style={{ width: '50rem' }}>
                                        <Card.Img variant="top" className='details-img' src={chefDetails?.image} />
                                        <Card.Body>
                                            <Card.Title>Recipe Name: {chefDetails?.recipe_name}</Card.Title>
                                            <Card.Text>
                                            <span className='text-danger'>Ingredients:</span> {chefDetails?.ingredients}
                                            </Card.Text>
                                            <Card.Text>
                                                <span className='text-danger'>Cooking Method:</span> {chefDetails?.cooking_method}
                                            </Card.Text>
                                            <Card.Text>
                                            <span className='text-danger'>Rating:</span> {chefDetails?.rating}
                                            </Card.Text>
                                        </Card.Body>
                                        <Button className='mx-auto my-3 button-color'>Favorite</Button>
                                    </Card>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChefDetails;