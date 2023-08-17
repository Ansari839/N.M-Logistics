import React from 'react'
import { Link } from 'react-router-dom'

const Teams = () => {
    const teams = [
        {
            Name: "John Smith 3",
            Role: "Co-Founder",
            Picture: "person_3.jpg",
            Social: [{ icon: "icon-facebook", Link: '/', className: "pl-0 pr-3 Link" },
            { icon: "icon-twitter", Link: '/', className: "pl-3 pr-3 Link" },
            { icon: "icon-instagram", Link: '/', className: "pl-3 pr-3 Link" },
            { icon: "icon-linkedin", Link: '/', className: "pl-3 pr-3 Link" },

            ]
        },
        {
            Name: "John Smith 2",
            Role: "Co-Founder",
            Picture: "person_2.jpg",
            Social: [{ icon: "icon-facebook", Link: '/', className: "pl-0 pr-3 Link" },
            { icon: "icon-twitter", Link: '/', className: "pl-3 pr-3 Link" },
            { icon: "icon-instagram", Link: '/', className: "pl-3 pr-3 Link" },
            { icon: "icon-linkedin", Link: '/', className: "pl-3 pr-3 Link" },

            ]
        },
    ]
    return (
        <div className="site-section border-bottom">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center border-primary">
                        <h2 className="font-weight-light text-color" data-aos="fade">Our Team</h2>
                    </div>
                </div>
                <div className="row">
                    {teams.map((item, ind) => (
                        <div key={ind} className="col-md-6 col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                            <div className="person">
                                <img src={`image/${item.Picture}`} alt="Image" className="img-fluid rounded mb-5" />
                                <h3>{item.Name} </h3>
                                <p className="position text-muted">{item.Role} </p>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                {item.Social.map((item, ind) => (
                                    <ul className="ul-social-circle Text-Align">
                                        <li key={ind} className='Text-Align'>
                                            <Link to={item.Link} className='Link Text-Align'>
                                                <span className={item.icon}></span>
                                            </Link>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Teams
