import React from 'react';
import { Carousel } from 'react-bootstrap';
//https://i.ibb.co/vz79DmL/Stock-Snap-FX16-JTHQ3-J.png
//

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '480px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/2y2MzzR/img4.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ fontSize: "68px" }} className='my-5' >We Provide <span style={{ color: 'tomato' }}> Home Care Services</span> for Your Senior</h1>
                        <h4 className='' style={{ color: '#03045e' }}>We ensure you a certified care for your favourite one from us.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '480px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/5587zyG/img1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 style={{ fontSize: "68px" }} className='my-5'>For Your Comfort <span style={{ color: 'tomato' }}>Quality Home Care</span> for Seniors</h1>
                        <h4 className='text-dark'>We ensure you a certified care for your favourite one from us.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '480px' }}
                        className="d-block w-100"
                        // src="https://i.ibb.co/XLY7ZtX/img3.png"
                        // src="http://wp1.themexlab.com/m3/seniorsecurity/wp-content/uploads/2017/02/2.jpg.webp"
                        src='https://i.ibb.co/wgJN7Md/Adobe-Stock-172809094-Preview.jpg'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 style={{ fontSize: "68px" }} className='my-5'>We Take Pride in <span style={{ color: 'tomato' }}>Fine Old Age</span> Home </h1>
                        <h4 className='text-dark'>We ensure you a certified care for your favourite one from us.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;