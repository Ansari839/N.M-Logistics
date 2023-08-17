import React from 'react'
const testimonial = [
    {
      Name: "John Smith 3",
      Qoute: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
      Link: '/',
      Picture: "person_3.jpg"
    },
    {
        Name: "John Smith 2",
        Qoute: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        Link: '/',
        Picture: "person_2.jpg"
      },
      {
        Name: "John Smith 1",
        Qoute: "orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        Link: '/',
        Picture: "person_1.jpg"
      },
   

  ]
const OurClients = () => {
    return (
        <div className="site-section border-bottom">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center border-primary">
                        <h2 className="font-weight-light text-color">Clients Testimonals</h2>
                    </div>
                </div>
                <div className="slide-one-item home-slider owl-carousel">
                    {testimonial.map((item,index)=>(
                    <div key={index}>
                    <div className="testimonial">
                        <figure className="mb-4">
                            <img src={`/image/${item.Picture}`} alt={item.Picture} className="img-fluid mb-3" />
                            <p>{item.Name}</p>
                        </figure>
                        <blockquote>
                            <p>&ldquo;{item.Qoute} &rdquo;</p>
                        </blockquote>
                    </div>
                </div>    
                    ))}
                    
                </div>
            </div>
        </div>

    )
}

export default OurClients
