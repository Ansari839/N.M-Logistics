import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <>
      <div className="site-blocks-cover overlay bgimg" data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
              <h1 className="text-white font-weight-light mb-5 text-uppercase font-weight-bold">Worldwide Freight Services</h1>
              <p><Link to='/' className="btn btn-primary py-3 px-5 text-white">Get Started!</Link></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container ovly">
        <div className="row align-items-center no-gutters align-items-stretch overlap-section boxes">
          <div className="col-md-4 boxes">
            <div className="feature-1 pricing h-100 text-center">
              <div className="icon">
                <span className="icon-dollar"></span>
              </div>
              <h2 className="my-4 heading boxes">Best Prices</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum odio minima tempora animi iure.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="free-quote bg-dark h-100">
              <h2 className="my-4 heading  text-center">Get Free Quote</h2>
              <form method="post">
                <div className="form-group">
                  <label for="fq_name">Name</label>
                  <input type="text" className="form-control btn-block" id="fq_name" name="fq_name" placeholder="Enter Name" />
                </div>
                <div className="form-group mb-4">
                  <label for="fq_email">Email</label>
                  <input type="text" className="form-control btn-block" id="fq_email" name="fq_email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary text-white py-2 px-4 btn-block" value="Get Quote" />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-3 pricing h-100 text-center">
              <div className="icon">
                <span className="icon-phone"></span>
              </div>
              <h2 className="my-4 heading">24/7 Support</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum odio minima tempora animi iure.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header
