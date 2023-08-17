import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'

const MoreOffer = () => {
  const offer = [
    {
      heading: "Warehousing",
      Detail: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      Link: '/',
      icon: "text-color flaticon-barn"
    },
    {
      heading: "Storage",
      Detail: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      Link: '/',
      icon: "text-color flaticon-platform"
    },
    {
      heading: "Delivery Van",
      Detail: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      Link: '/',
      icon: "text-color flaticon-car"
    },

  ]
  console.log(offer)
  return (
    <div className="site-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="mb-0 text-color">We Offer More Services</h2>
            <p className="color-black-opacity-5">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="row align-items-stretch">
          {offer.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className={item.icon}></span></div>
                <div>
                  <h3 className='Text-Align'>{item.heading}</h3>
                  <p className='Text-Align'>{item.Detail} </p>
                  <p className="mb-0 Text-Align"><Link to={item.Link} className='Link text-color'>Learn More</Link></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default MoreOffer
