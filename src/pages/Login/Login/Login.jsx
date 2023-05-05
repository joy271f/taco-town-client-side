import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {user, loginUser} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        if(email, password){
            loginUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success("Logged in")
                setSuccess("You are Login")
            }).catch(error => {
                setError(error.message)
                toast.error("User Not Found")
            })
        }
    }

    return (
        <Container className='w-50 mt-5'>
            <Row>
                <Col sm={8}>
                    <h3>Please login</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Button onClick={handleLogin} variant="primary" type="submit" className='w-25'>
                            Login
                        </Button> <br />
                        {user && <Navigate to="/" replace={true} />}
                        <Form.Text className="text-secondary">
                            Dont’t Have An Account ? <Link to='/register'>Register</Link>
                        </Form.Text> <br />
                        <Form.Text className="text-success">
                            {success}
                        </Form.Text>
                        <Form.Text className="text-danger">
                            {error}
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