import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../public/chef-hat.png'
import './Header.css'
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(result => {
                const user = result.user;
                toast.success("Successfully logout")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" className='navbar-color' variant="dark">
            <Container>
                <Image src={logo} className='banner-logo ps-5' />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ps-3">
                        <Link className='text-white mx-3 text-decoration-none fs-6' to="/">Home</Link>
                        <Link className='text-white mx-4 text-decoration-none fs-6' to="/">Blog</Link>
                    </Nav>
                    {
                        user?.email ?
                        <>
                                <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='header-img' roundedCircle/>
                                <Link onClick={handleLogout}><Button className='button-color fs-5'>Logout</Button></Link>
                            </> :
                            <Link to='/login'><Button className='button-color fs-5'>Login</Button></Link>
                    }
                    {!user && <Link to='/register'><Button className='button-color fs-5'>Register</Button></Link>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;