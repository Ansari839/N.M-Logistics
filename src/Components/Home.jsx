import React from 'react'
import Header from './Header'
import Offer from './Offer'
import ServiceCard from './ServiceCard'
import MoreOffer from './Moreoffer'
import OurClients from './OurClients'

const Home = () => {
  return (
    <div>
      {/* <h1 className='text-danger'>Header</h1> */}
      <Header  />
      <Offer />
      <ServiceCard />
      <MoreOffer />
      <OurClients />
    </div>
  )
}

export default Home
