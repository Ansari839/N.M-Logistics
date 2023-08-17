import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Services = () => {
  const { cards } = useSelector(state => state.detailPageReducer)
  return (
    <div>
      <div className="site-blocks-cover inner-page-cover overlay bgimg" data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">

            <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
              <h1 className="text-white font-weight-light text-uppercase font-weight-bold">Our Services</h1>
              <p className="breadcrumb-custom"><Link to="/" className='Link'>Home</Link> <span className="mx-2">&gt;</span> <span>Services</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section bg-light">
        <div className="container">
          <div className='row'>
            {cards.map((items, ind) => (
              <div className="col-md-6 col-lg-4 mb-4" key={ind}>
                <Link to={`/service_detail/${items.id}`} className="unit-1 text-center">
                  <img src={`/image/${items.Pic}`} alt="Image" className="img-fluid" />
                  <div className="unit-1-text">
                    <h3 className="unit-1-heading"> {items.name} </h3>
                    <p className="px-5">{items.desc}</p>
                  </div>
                </Link>
              </div>

            ))}
          </div>

        </div>
      </div>


    </div>
  )
}

export default Services
