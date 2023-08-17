import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <div className="site-blocks-cover inner-page-cover overlay bgimg"  data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">

          <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-white font-weight-light text-uppercase font-weight-bold">Contact Us</h1>
            <p className="breadcrumb-custom"><Link className='Link' to="/">Home</Link> <span className="mx-2">&gt;</span> <span>Contact</span></p>
          </div>
        </div>
      </div>
    </div> 
    <div className="site-section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-7 mb-5">

          

          <form action="#" className="p-5 bg-white">
           

            <div className="row form-group">
              <div className="col-md-6 mb-3 mb-md-0 Text-Align">
                <label className="text-black Text-Align" for="fname">First Name</label>
                <input type="text" id="fname" className="form-control" />
              </div>
              <div className="col-md-6 Text-Align">
                <label className="text-black Text-Align" for="lname">Last Name</label>
                <input type="text" id="lname" className="form-control" />
              </div>
            </div>

            <div className="row form-group">
              
              <div className="col-md-12 Text-Align">
                <label className="text-black" for="email">Email</label> 
                <input type="email" id="email" className="form-control" />
              </div>
            </div>

            <div className="row form-group">
              
              <div className="col-md-12 Text-Align">
                <label className="text-black" for="subject">Subject</label> 
                <input type="subject" id="subject" className="form-control" />
              </div>
            </div>

            <div className="row form-group ">
              <div className="col-md-12 Text-Align">
                <label className="text-black" for="message">Message</label> 
                <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12 Text-Align">
                <input type="submit" value="Send Message" className="btn btn-primary box py-2 px-4 text-white" />
              </div>
            </div>


          </form>
        </div>
        <div className="col-md-5">
          
          <div className="p-4 mb-3 bg-white">
            <p className="mb-0 font-weight-bold Text-Align">Address</p>
            <p className="mb-4 Text-Align text-color">203 Fake St. Mountain View, San Francisco, California, USA</p>

            <p className="mb-0 font-weight-bold Text-Align">Phone</p>
            <p className="mb-4 Text-Align"><Link className='Link text-color' to="#">+1 232 3235 324</Link></p>

            <p className="mb-0 font-weight-bold Text-Align text">Email Address</p>
            <p className="mb-0 Text-Align"><Link className='Link text-color' to="#">youremail@domain.com</Link></p>

          </div>
          
          <div className="p-4 mb-3 bg-white">
            <h3 className="h5 text-black mb-3 Text-Align">More Info</h3>
            <p className='Text-Align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
            <p><Link  to="#" className="btn btn-primary px-4 py-2 text-white Link Text-Align box">Learn More</Link></p>
          </div>

        </div>
      </div>
    </div>
  </div></>
   
  )
}

export default Contact
