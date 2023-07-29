    
import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
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
                  <li><Link to="#" className='Link'>About Us</Link></li>
                  <li><Link to="#" className='Link'>Services</Link></li>
                  <li><Link to="#" className='Link'>Testimonials</Link></li>
                  <li><Link to="#" className='Link'>Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Products</h2>
                <ul className="list-unstyled">
                  <li><Link to="#" className='Link'>About Us</Link></li>
                  <li><Link to="#" className='Link'>Services</Link></li>
                  <li><Link to="#" className='Link'>Testimonials</Link></li>
                  <li><Link to="#" className='Link'>Contact Us</Link></li>
                </ul>
              </div>
              {/* <div className="col-md-3">
                <h2 className="footer-heading mb-4">Features</h2>
                <ul className="list-unstyled">
                  <li><Link to="#" className='Link'>About Us</Link></li>
                  <li><Link to="#" className='Link'>Services</Link></li>
                  <li><Link to="#" className='Link'>Testimonials</Link></li>
                  <li><Link to="#" className='Link'>Contact Us</Link></li>
                </ul>
              </div> */}
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <Link to="#" className="pl-0 pr-3 Link"><span className="icon-facebook"></span></Link>
                <Link to="#" className="pl-3 pr-3 Link"><span className="icon-twitter"></span></Link>
                <Link to="#" className="pl-3 pr-3 Link"><span className="icon-instagram"></span></Link>
                <Link to="#" className="pl-3 pr-3 Link"><span className="icon-linkedin"></span></Link>
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
            {/* <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank" >Colorlib</Link>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p> */}
            </div>
          </div>
          
        </div>
      </div>
    </footer>
        

    </div>
  )
}

export default Footer
