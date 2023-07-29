import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
    
            <div className="site-wrap">

                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <div className="site-navbar py-3" role="banner">

                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-11 col-xl-2">
                                <h1 className="mb-0"><Link to="index.html" className="text-white h2 mb-0 Link">Logistics</Link></h1>
                            </div>
                            <div className="col-12 col-md-10 d-none d-xl-block">
                                <nav className="site-navigation position-relative text-right" role="navigation">

                                    <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                        <li className="active"><Link to="index.html" className='Link'>Home</Link></li>
                                        <li><Link to="about.html" className='Link'>About Us</Link></li>
                                        <li className="has-children">
                                            <Link to="services.html" className='Link'>Services</Link>
                                            <ul className="dropdown">
                                                <li><Link to="#" className='Link'>Air Freight</Link></li>
                                                <li><Link to="#" className='Link'>Ocean Freight</Link></li>
                                                <li><Link to="#" className='Link'>Ground Shipping</Link></li>
                                                <li><Link to="#" className='Link'>Warehousing</Link></li>
                                                <li><Link to="#" className='Link'>Storage</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="industries.html" className='Link'>Industries</Link></li>
                                        <li><Link to="blog.html" className='Link'>Blog</Link></li>
                                        <li><Link to="contact.html" className='Link'>Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>


                            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" 
                            // style="position: relative; top: 3px;"
                            style={{position: "relative; top: 3px;"}}
                            ><Link to="#" className="site-menu-toggle js-menu-toggle text-white Link"><span className="icon-menu h3"></span></Link></div>

                        </div>

                    </div>
                </div>

            </div>
        
    )
}

export default Navbar
