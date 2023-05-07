import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <Container className='my-5'>
            <h3 className='text-center text-danger my-5'>Welcome to my blog page</h3>
            <div className="row">
                <div className="col col-md-4">
                    <Card className='mb-5' style={{ width: '22rem' }}>
                        <Card.Img variant="top" className='blog-card-img mb-3' src="https://gg-l.xyz/aDDYj" />
                        <Card.Body>
                            <Card.Title>The Ultimate Guide to Crafting the Perfect Taco</Card.Title>
                            <Card.Text>
                                This post could cover everything from how to make homemade tortillas to creative and delicious taco filling ideas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-md-4">
                    <Card className='mb-5' style={{ width: '22rem' }}>
                        <Card.Img variant="top" className='blog-card-img mb-3' src="https://shorturl.at/afLST" />
                        <Card.Body>
                            <Card.Title>A Beginner's Guide to Mexican Sauces</Card.Title>
                            <Card.Text>
                                This post could explore the different types of salsas, from mild to spicy, and provide recipes and tips for making them at home.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-md-4">
                    <Card className='mb-5' style={{ width: '22rem' }}>
                        <Card.Img variant="top" className='blog-card-img mb-3' src="https://shorturl.at/aryCK" />
                        <Card.Body>
                            <Card.Title>Understanding the Heat Scale</Card.Title>
                            <Card.Text>
                                This post could delve into the world of chile peppers and explain the different levels of heat, as well as highlight some of the most popular peppers used in Mexican cuisine.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-md-4">
                    <Card className='mb-5' style={{ width: '22rem' }}>
                        <Card.Img variant="top" className='blog-card-img mb-3' src="https://rb.gy/0k0gc" />
                        <Card.Body>
                            <Card.Title> The Ultimate Comfort Food</Card.Title>
                            <Card.Text>
                                This post could provide step-by-step instructions for making tamales from scratch, as well as highlight different regional variations.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-md-4">
                    <Card className='mb-5' style={{ width: '22rem' }}>
                        <Card.Img variant="top" className='blog-card-img mb-3' src="https://gg-l.xyz/WBuxJ" />
                        <Card.Body>
                            <Card.Title>Beyond Huevos Rancheros</Card.Title>
                            <Card.Text>
                                This post could explore the variety of breakfast dishes found in Mexican cuisine, from chilaquiles to breakfast burritos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-md-4">
                    <Card className='mb-5' style={{ width: '22rem' }}>
                        <Card.Img variant="top" className='blog-card-img mb-3' src="https://rb.gy/fnaqu" />
                        <Card.Body>
                            <Card.Title> How to Make the Perfect Cocktail</Card.Title>
                            <Card.Text>
                                This post could offer tips for making the perfect margarita, as well as provide variations and twists on the classic recipe.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-md-4">
                    <Card className='mb-5' style={{ width: '22rem' }}>
                        <Card.Img variant="top" className='blog-card-img mb-3' src="https://rb.gy/vq93j" />
                        <Card.Body>
                            <Card.Title>Satisfy Your Sweet Tooth</Card.Title>
                            <Card.Text>
                                This post could highlight some of the most popular Mexican desserts, from churros to tres leches cake, and provide recipes for making them at home.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default Blog;