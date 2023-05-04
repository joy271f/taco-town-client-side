import React from 'react';
import './ChefSection.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ChefSection = () => {
    return (
        <Container className='mt-5 row mx-auto'>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://rb.gy/0782c" />
                            <Card.Body>
                                <Card.Title>Water Son</Card.Title>
                                <Card.Text>
                                Working in a kitchen as a chef can be a fast-paced, exciting job. There are many different types of chefs, each with a specific station and responsibilities. Learning about the different
                                </Card.Text>
                                <Button className='button-color'>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ChefSection;