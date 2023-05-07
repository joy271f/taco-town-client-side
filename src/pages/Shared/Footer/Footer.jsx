import React from 'react';
import { Link } from 'react-router-dom';
import {  FaGithub,  FaHome, FaLinkedin, FaPhone, FaVoicemail } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: '#1c2331' }}
            >
                {/* Section: Social media  */}
                <section
                    className="d-flex justify-content-between p-4"
                    style={{ backgroundColor: '#6351ce' }}
                >
                    {/* Left  */}
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* Left */}

                    {/* Right  */}
                    <div>
                        <Link to="https://www.linkedin.com/in/joychandradas/" className="text-white me-4">
                            <FaLinkedin />
                        </Link>
                        <Link to="https://github.com/joychandradas" className="text-white me-4">
                            <FaGithub />
                        </Link>
                    </div>
                    {/* Right  */}
                </section>
                {/* Section: Social media  */}

                {/* Section: Links   */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row  */}
                        <div className="row mt-3">
                            {/* Grid column  */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content  */}
                                <h6 className="text-uppercase fw-bold">Chef Hat</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p>
                                    Modern chefs still wear hats, in part for cleanliness, to keep hair out of food and to help absorb sweat. 
                                </p>
                            </div>
                            {/* Grid column  */}

                            {/*  Grid column  */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/*  Links  */}
                                <h6 className="text-uppercase fw-bold">Items</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p>
                                    <Link to="#!" className="text-white td-none">Pico de Gallo</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white td-none">Huevos Rancheros</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white td-none">Chimichangas</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white td-none">Tostadas</Link>
                                </p>
                            </div>
                            {/* Grid column  */}

                            {/* Grid column  */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links  */}
                                <h6 className="text-uppercase fw-bold">Top Chef</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p>
                                    <Link to="#!" className="text-white td-none">Javier Plascencia</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white td-none">David Castro Hussong</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white td-none">Margarita Carrillo Arronte</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white td-none">Enrique Olvera</Link>
                                </p>
                            </div>
                            {/* Grid column  */}

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links  */}
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p><FaHome /> New York, NY 10012, US</p>
                                <p><FaVoicemail /> info@example.com</p>
                                <p><FaPhone /> + 01 234 567 88</p>
                                <p><FaPhone /> + 01 234 567 89</p>
                            </div>
                            {/*  Grid column  */}
                        </div>
                        {/*  Grid row  */}
                    </div>
                </section>
                {/* Section: Links   */}

                {/*  Copyright  */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <Link className="ms-2 text-white text-decoration-none" to="/"
                    >Chef Hat</Link>
                </div>
                {/*  Copyright  */}
            </footer>
        </div>
    );
};

export default Footer;