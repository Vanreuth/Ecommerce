import React from 'react'
import Hero from '../components/Hero'
import LastCollection from '../components/LastCollection'
import BestSaller from '../components/BestSaller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LastCollection/>
      <BestSaller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home