import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='bg-image'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-12 text-center">
                    <div className='me-5 pt-5'>
                        <h1 style={{ fontSize: '68px' }} className='my-5 text-white'>We give the senior the love they desire.</h1>
                        <p className='fs-5' ><span style={{ color: 'tomato' }}>Senior Care Home</span> offers an individualized approach to keep seniors safe and sound at home, instead of anywhere else.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;