import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Discount from '../components/Discount'

const Home = () => {
  return (
    <div>
      <Hero />
       <LatestCollection />
       <BestSeller />
       <OurPolicy />
       <Discount />
    </div>
  )
}

export default Home