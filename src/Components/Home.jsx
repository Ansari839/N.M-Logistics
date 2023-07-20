import React from 'react'
import Header from './Header'
import Offer from './Offer'
import ServiceCard from './ServiceCard'

const Home = () => {
  return (
    <div>
      {/* <h1 className='text-danger'>Header</h1> */}
      <Header  />
      <Offer />
      <ServiceCard />
    </div>
  )
}

export default Home
