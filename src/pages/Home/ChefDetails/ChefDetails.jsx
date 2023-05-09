import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefDetails.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';



const ChefDetails = () => {

    const { id } = useParams();
    const [chef, setChef] = useState([]);
    const chefDetailsData = useLoaderData();
    const { name, year_of_experience, number_of_recipes, likes, img, short_bio } = chef;
    useEffect(() => {
        fetch(`https://chef-hat-server-side-whitehut3q-gmailcom.vercel.app/chef/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])


    const handleFavoriteBtn = (e) => {
        toast.success("Favorite Added")
        const button = e.target;
        button.disabled = true;
    }


    return (

        <div>
            {chef && chefDetailsData ?
                <Container>
                    <Row>
                        <Col lg={8} sm={12}>
                            <h2 className='my-5 text-secondary mx-4'>{name}'s Recipes</h2>
                            {
                                chefDetailsData.map(chefDetails => (
                                    <div key={chefDetails._id}>
                                        <Card className='card-size mx-auto my-5 box-style'>
                                            <Card.Img variant="top" className='details-card-img' src={chefDetails?.image} />
                                            <Card.Body>
                                                <Card.Title>Recipe Name: {chefDetails?.recipe_name}</Card.Title>
                                                <Card.Text>
                                                    <span className='text-warning'>
                                                        <Rating
                                                            placeholderRating={chefDetails?.rating}
                                                            emptySymbol={<FaRegStar />}
                                                            placeholderSymbol={<FaStar />}
                                                            fullSymbol={<FaStar />}
                                                            readonly
                                                        />
                                                    </span>
                                                </Card.Text>
                                                <Card.Text>
                                                    <span className='text-danger'>Ingredients:</span> {chefDetails?.ingredients}
                                                </Card.Text>
                                                <Card.Text>
                                                    <span className='text-danger'>Cooking Method:</span> {chefDetails?.cooking_method}
                                                </Card.Text>
                                            </Card.Body>
                                            <Button onClick={(e) => handleFavoriteBtn(e)} className='ms-3 my-3 button-color'>Favorite</Button>
                                        </Card>
                                    </div>
                                ))
                            }
                        </Col>
                        <Col lg={4} sm={12}>
                            <div  className='sticky-top'>
                                <h2 className='my-5 text-danger'>Chef Details</h2>
                                <Card style={{ width: '23rem' }}>
                                    <Card.Img variant="top" style={{ objectFit: 'contain' }} src={img} />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text className='mb-4'>
                                            <span className='text-danger'></span> {short_bio}
                                        </Card.Text>
                                        <p className='mb-1'><span className='text-danger'>Year of Experience:</span> {year_of_experience}</p>
                                        <p className='mb-1'><span className='text-danger'>Number of Recipe:</span> {number_of_recipes}</p>
                                        <Card.Text className='mb-4'>
                                            <span className='text-danger'>Likes:</span> {likes}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container> :
                <div style={{ height: '60vh' }} className='text-center mt-5'>
                    <Spinner animation="border" variant="danger" />
                </div>
            }
        </div>
    );
};
export default ChefDetails;