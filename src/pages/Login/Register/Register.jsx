import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Register = () => {
    return (
        <Container className='w-50 mt-5'>
            <Row>
                <Col sm={8}>
                    <h3>Please Register</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Your name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        
                    
                        <Button variant="primary" type="submit" className='w-25'>
                            Register
                        </Button> <br />
                        <Form.Text className="text-secondary">
                            Already Have An Account ? <Link to='/login'>Login</Link>
                        </Form.Text>
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Col>
                <Col sm={4}>
                    <GoogleSignIn></GoogleSignIn>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;