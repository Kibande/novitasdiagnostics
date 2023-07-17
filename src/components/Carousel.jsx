import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../assets/image/Medical Equipment Repair & Maintain Services.jpg'
import pic2 from '../assets/image/Best Biomedical Engineering Schools in South Africa.jpg'
import pic3 from '../assets/image/5 Emerging Biomedical Engineering Trends to Watch - HIT Consultant.jpg'

function DroneCarousel() {
  return (
    <section>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block mx-auto w-100'
              src={pic1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>Novitas Diagnostics</h3>
              <p>Pioneering the Future of Medicine</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block mx-auto w-100'
              src={pic2}
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Timely</h3>
              <p>
              Cutting-edge diagnostic tools and technologies that enable early 
              detection and prevention of disease.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block mx-auto w-100'
              src={pic3}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Accuracy</h3>
              <p>
                 We leverage the power of machine learning algorithms and data 
                 analysis techniques 
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default DroneCarousel
