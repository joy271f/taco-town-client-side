import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {
    return (
        <Container className='w-50 mt-5'>
            <Row>
                <Col sm={8}>
                    <h3>Please login</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='w-25'>
                            Login
                        </Button> <br />
                        <Form.Text className="text-secondary">
                            Dont’t Have An Account ? <Link to='/register'>Register</Link>
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

export default Login;