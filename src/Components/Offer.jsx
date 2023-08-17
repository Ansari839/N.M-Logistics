import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'

const Offer = () => {
  const offer = [
    {
      heading: "Air Freight",
      Detail: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      Link: '/',
      icon: "text-color flaticon-travel"
    },
    {
      heading: "Sea Freight",
      Detail: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      Link: '/',
      icon: "text-color flaticon-sea-ship-with-containers"
    },
    {
      heading: "Ground Shipping",
      Detail: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      Link: '/',
      icon: "text-color flaticon-frontal-truck"
    },

  ]
  return (
    <div className="site-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center border-primary">
            <h2 class="font-weight-light text-color">What We Offer</h2>
            <p class="color-black-opacity-5">We Offer The Following Services</p>
          </div>
        </div>
        <div className="row align-items-stretch">
          {offer.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4 "><span className={`${item.icon}`}></span></div>
                <div>
                  <h3 className='Text-Align'>{item.heading}</h3>
                  <p className='Text-Align'>{item.Detail} </p>
                  <p className="mb-0 Text-Align"><Link to={item.Link} className='Link text-color Text-Align'>Learn More</Link></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Offer
