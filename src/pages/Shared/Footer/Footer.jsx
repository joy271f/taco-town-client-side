import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaHome, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaVoicemail } from 'react-icons/fa';

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
                        <Link to="" className="text-white me-4">
                            <FaFacebook />
                        </Link>
                        <Link to="" className="text-white me-4">
                            <FaTwitter />
                        </Link>
                        <Link to="" className="text-white me-4">
                            <FaGoogle />
                        </Link>
                        <Link to="" className="text-white me-4">
                            <FaInstagram />
                        </Link>
                        <Link to="" className="text-white me-4">
                            <FaLinkedin />
                        </Link>
                        <Link to="" className="text-white me-4">
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
                                    <Link to="#!" className="text-white">item 1</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">item 2</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">item 3</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">item 4</Link>
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
                                    <Link to="#!" className="text-white">Chef 1</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">Chef 2</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">Chef 3</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">Chef 4</Link>
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