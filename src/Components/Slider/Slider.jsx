import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="overlay"></div>
                    <img
                        className="d-block w-100"
                        src="images/slide-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-light'>
                        <h1>Products</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="overlay"></div>

                    <img
                        className="d-block w-100"
                        src="images/slide-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-light'>
                        <h3>Cart</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
