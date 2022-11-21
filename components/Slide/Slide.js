import React from 'react'
import './Slide.css'
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assets/images/black-friday.jpg"
import image2 from "../../assets/images/front-view.jpg"
import image3 from "../../assets/images/woman.jpg"


const Slide = () => {

  return (
    <Carousel>
      <Carousel.Item className='slider'>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider'>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider'>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>  
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slide
