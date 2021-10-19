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
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/2y2MzzR/img4.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ fontSize: "48px" }} className='text-primary' >Welcome to Senior Care Home</h1>
                        <p>We ensure you a certified care for your favourite one from us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/5587zyG/img1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>For Your Comfort Quality Home Care for Seniors</h1>
                        <p>We ensure you a certified care for your favourite one from us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '600px' }}
                        className="d-block w-100"
                        // src="https://i.ibb.co/XLY7ZtX/img3.png"
                        src="http://wp1.themexlab.com/m3/seniorsecurity/wp-content/uploads/2017/02/2.jpg.webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>We Take Pride in Fine Old Age Home</h1>
                        <p>We ensure you a certified care for your favourite one from us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;