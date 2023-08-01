
import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  const QuickLink = [
    { heading: "About Us", Link: '/' },
    { heading: "Services", Link: '/' },
    { heading: "Client Testimonal", Link: '/' },
    { heading: "Contact Us", Link: '/' },
  ]
  const FeatureLink = [
    { heading: "About Us", Link: '/' },
    { heading: "Services", Link: '/' },
    { heading: "Client Testimonal", Link: '/' },
    { heading: "Contact Us", Link: '/' },
]
  const SocialLink = [
    { icon: "icon-facebook", Link: '/', className: "pl-0 pr-3 Link" },
    { icon: "icon-twitter", Link: '/', className: "pl-3 pr-3 Link" },
    { icon: "icon-instagram", Link: '/', className: "pl-3 pr-3 Link" },
    { icon: "icon-linkedin", Link: '/', className: "pl-3 pr-3 Link" },
  ]
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">Quick Links</h2>
                  <ul className="list-unstyled">
                    {QuickLink.map((item, index) => (
                      <li key={index}><Link to={item.Link} className='Link'>{item.heading}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">Features</h2>
                  <ul className="list-unstyled">
                    {FeatureLink.map((item, index) => (
                      <li key={index}><Link to={item.Link} className='Link'>{item.heading}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">Follow Us</h2>
                  {SocialLink.map((item, index) => (
                    <Link key={index} to={item.Link} className={item.className}><span className={item.icon}></span></Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
              <form action="#" method="post">
                <div className="input-group mb-3">
                  <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary text-white" type="button" id="button-addon2">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                 <p>
                    Create By Infinity Arrow Technology
            </p> 
              </div>
            </div>

          </div>
        </div>
      </footer>


    </div>
  )
}

export default Footer
