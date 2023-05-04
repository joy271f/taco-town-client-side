import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const GoogleSignIn = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='mt-5'>
            <Button bg='light' onClick={handleGoogleSignIn} variant='primary' className='w-100 my-2'><FaGoogle /> Sign in with Google</Button>
            <Button bg='dark' onClick={handleGithubSignIn} variant='dark' className='w-100 my-2'><FaGithub /> Sign in with Github</Button>
        </div>
    );
};

export default GoogleSignIn;