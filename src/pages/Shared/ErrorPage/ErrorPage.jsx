import React from 'react';
import "./ErrorPage.css"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>404 Error Page #3</h1>
            <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section class="error-container">
                <span>4</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div class="link-container">
                <Link to="/">Go to Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;