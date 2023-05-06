import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefDetails.css';



const ChefDetails = () => {


    const { id } = useParams();
    const [chef, setChef] = useState([]);
    const chefDetailsData = useLoaderData();
    const { name, year_of_experience, number_of_recipes, likes, img, short_bio } = chef;
    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])




    return (

        <div>
            {chef && chefDetailsData ?
                <Container>
                <Row>
                    <Col sm={4}>
                        <h2 className='my-5 text-danger'>Chef Details</h2>
                        <Card className='' style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text className='mb-4'>
                                    <span className='text-danger'>Bio:</span> {short_bio}
                                </Card.Text>
                                <p className='mb-1'><span className='text-danger'>Year of Experience:</span> {year_of_experience}</p>
                                <p className='mb-1'><span className='text-danger'>Number of Recipe:</span> {number_of_recipes}</p>
                                <Card.Text className='mb-4'>
                                    <span className='text-danger'>Likes:</span> {likes}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <h2 className='my-5 text-secondary mx-4'>His Achievement</h2>
                        {
                            chefDetailsData.map(chefDetails => (
                                <div key={chefDetails._id}>
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
            </Container> :
            <div style={{height:'60vh'}} className='text-center mt-5'>
                <Spinner animation="border" variant="danger" />
            </div>
            }
        </div>
    );
};
export default ChefDetails;