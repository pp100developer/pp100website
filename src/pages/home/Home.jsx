import React from 'react'
import HomeBanner from '../../components/HomeBanner'
import HomeAbout from '../../components/HomeAbout'
import HomeValues from '../../components/HomeValues'
import HomeCurri from '../../components/HomeCurri'
import FAQ from '../../components/FAQ'
import Feedb from '../../components/Feedb'
import Footer from '../../components/Footer'
import './home.css'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeAbout/>
      <HomeValues/>
      <HomeCurri/>
      <FAQ/>
      <Feedb/>
      <Footer/>
    </div>
  )
}

export default Home