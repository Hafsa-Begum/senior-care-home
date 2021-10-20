import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div id='features' className='my-5'>
            <h1 className='mt-5 pt-3'
            >Life @ Senior Care Home</h1>
            <div className='underline mb-5 mx-auto'></div>
            <div className="row mx-5">
                <div className="col-md-3 col-sm-6 col-12 feature">
                    <div className='mx-3 pt-3'>
                        <i className="fas fa-phone-volume fs-1 bg-info p-4 rounded-circle"></i>
                        <h3 className='my-3'>Peaceful Atmosphere</h3>
                        <p>We have amazing living environment.We can provide a sound and peaceful atmosphere for your favourite one.</p>

                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 feature">
                    <div className='mx-3 pt-3'>
                        <i className="fas fa-user-md fs-1 bg-info p-4 rounded-circle"></i>
                        <h3 className='my-3'>Quality Medical Care</h3>
                        <p>We have all expert specialists and well-trained nurses. So, We provide a great qualityful medication care for your favourite one.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 feature">
                    <div className='mx-3 pt-3'>
                        <i className="fas fa-running fs-1 bg-info p-4 rounded-circle"></i>
                        <h3 className='my-3'>Caring Staffs</h3>
                        <p>Our all staffs are so hardworking and well-behaving that they remain alert for your call anytime.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 feature">
                    <div className='mx-3 pt-3'>
                        <i className="fas fa-hand-holding-heart fs-1 bg-info p-4 rounded-circle"></i>
                        <h3 className='my-3'>Relaxation Techniques</h3>
                        <p>We can ensure you that our awesome relaxation techniques must charm you.We follow a lots of techniques for helping your loving ones.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;