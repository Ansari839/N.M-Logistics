import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <div className="site-section offer-sec">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="mb-0 text-primary">What We Offer</h2>
            <p className="color-black-opacity-5">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-travel"></span></div>
              <div>
                <h3>Air Freight</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p className="mb-0"><Link to='/'>Learn More</Link></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-sea-ship-with-containers"></span></div>
              <div>
                <h3>Ocean Freight</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p className="mb-0"><Link to='/'>Learn More</Link></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-frontal-truck"></span></div>
              <div>
                <h3>Ground Shipping</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p className="mb-0"><Link to='/'>Learn More</Link></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  
  )
}

export default Offer
