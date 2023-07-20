import React from 'react'
import Pic from './images/img_1.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ServiceCard = () => {
    const { cards } = useSelector(state => state.detailPageReducer)
    console.log(cards)
    return (
        <div className="site-section block-13">
            <div className="owl-carousel nonloop-block-13">
                {cards.map((items, ind) => (
                    <div key={ind}>
                        <Link to='/' className="unit-1 text-center">
                            <img src={`/image/${items.Pic}`} alt={items.name} className="img-fluid" />
                            <div className="unit-1-text">
                                <h3 className="unit-1-heading">{items.name} </h3>
                                <p className="px-5">{items.des}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>


        </div>

    )
}

export default ServiceCard
