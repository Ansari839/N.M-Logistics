import React from 'react'
import { Link } from 'react-router-dom'
import Offer from './Offer'
import OurClients from './OurClients'
import Img from './images/img_1.jpg'

const About = () => {
  return (
    <div>
      <div className="site-blocks-cover inner-page-cover overlay bgimg" data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">

          <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-white font-weight-light text-uppercase font-weight-bold">About Us</h1>
            <p className="breadcrumb-custom"><Link to="/" className='Link'>Home</Link> <span className="mx-2">&gt;</span> <span>About Us</span></p>
          </div>
        </div>
      </div>
    </div>  
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">          
          <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
            <img src={Img} alt="Image" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 order-md-1" data-aos="fade">
            <div className="text-left pb-1 border-primary mb-4">
              <h2 className="text-primary Text-Align">Our History</h2>
            </div>
            <p className='Text-Align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos ipsam voluptas.</p>
            <p className="mb-5 Text-Align">Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam laborum quo obcaecati similique iusto delectus quasi!</p>
          </div>
        </div>
      </div>
    </div>
    <Offer />
    <OurClients />
    </div>
  )
}

export default About
