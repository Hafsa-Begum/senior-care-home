import React from 'react';
import logo from '../../../navLogo.png'

const Footer = () => {
    return (
        <div className='bg-info py-5 text-start px-5'>
            <div className="row pb-5">
                <div className="col-md-3 col-sm-6 col-12 ">
                    <div className='me-5' >
                        <div className='mb-4 text-center'><img className='rounded-circle w-25' src={logo} alt="" /><br />
                            <h5>Senior Care Home</h5></div>
                        <p>A society that cares for its senior citizens is a civilized and enlightened society. The aging happens on its own without any prompting from our side! It is an issue of mind over matter…if you don’t mind, it doesn’t matter!</p></div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className='mb-4'>
                        <h4 className='mb-4'>Contact</h4>
                        <p><i className="fas fa-map-marker-alt"></i> <span>Anthony Benoit 490 E Fake Street
                            Norwich CT 06360</span></p>
                        <p><i class="fas fa-phone-alt"></i><span>Phone: +1 (2) 345 6789</span></p>
                        <p><i class="fas fa-fax"></i><span>fax: +1 (2) 305 6999</span></p>
                        <p><i class="fas fa-envelope"></i><span>contact@fakedomain.com</span></p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className='mx-auto'>
                        <h4 className='mb-4'>Follow us</h4>
                        <div className='text-white'>
                            <i className="fab fa-facebook-f me-3"></i>
                            <i className="fab fa-twitter me-3"></i>
                            <i className="fab fa-google-plus-g me-3"></i>
                            <i className="fab fa-instagram me-3"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12"><h4 className='mb-4'>Subscribe</h4>
                    <p>Enter your email and we’ll send you latest information and plans.</p>
                    <input className='border-top-0 border-start-0 border-end-0' type="email" placeholder='Your Email' />
                </div>
            </div>
            <div className='text-center'><p><small>Copyright © 2021. All rights reserved by, Senior Care Home</small></p>
            </div>
        </div>
    );
};

export default Footer;