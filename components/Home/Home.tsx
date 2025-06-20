import React from 'react'
import Hero from './Hero/Hero'
import Section1 from './Pages/Section1'
import Section2 from './Pages/Section2'
import Section3 from './Pages/Section3'
import Section4 from './Pages/Section4'
import Footer from './Pages/Section14'
import Section5 from './Pages/Section5'
import Section6 from './Pages/Section6'
import RequestQuote from './Pages/RequestQuote'
import Section7 from './Pages/Section7'
import Section8 from './Pages/Section8'
import Section9 from './Pages/Section9'
import Section10 from './Pages/Section10'
import Section11 from './Pages/Section11'
import Section12 from './Pages/Section12'
import Section13 from './Pages/Section13'
import Section14 from './Pages/Section14'
import AppDownload from './Pages/AppDownload'
import Memories from './Pages/Memories'


const Home = () => {
  return (
    <div className="overflow-hidden ">
      
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <RequestQuote/>
      <AppDownload/>
      <Memories/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Section11/>
      <Section12/>
      <Section13/>

      <Section14/>
    </div>
  )
}

export default Home
