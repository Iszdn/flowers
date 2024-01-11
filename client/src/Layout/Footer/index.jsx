import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className='footer-logo'>
                            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
                        </div>
                        <div className='emaill'>
                            <input type="email" placeholder='Your Email' />
                            <div className='but'>
                               <Link>Send</Link> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <h3>About</h3>
                        <ul>
                            <li>
                                <Link>About Us</Link>
                            </li>
                            <li>
                                <Link>Our Partners</Link>
                            </li>
                            <li>
                                <Link>Our Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <h3>Contact</h3>

                        <ul>
                            <li>
                                <Link>Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    FAQ Page</Link>
                            </li>
                            <li>
                                <Link>About Me</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <h3>Follow Us</h3>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer