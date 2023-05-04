import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const GoogleSignIn = () => {
    return (
        <div className='mt-5'>
            <Button bg='light' variant='primary' className='w-100 my-2'><FaGoogle /> Sign in with Google</Button>
            <Button bg='dark' variant='dark' className='w-100 my-2'><FaGithub /> Sign in with Github</Button>
        </div>
    );
};

export default GoogleSignIn;