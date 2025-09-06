import React from 'react'

import Hero from './components/Hero-section'
import RevealText from './components/Reveal-text'
import StartPage from './components/StartPage'
import EssenceHero from './components/Showcasecard'
import TerraSection from './components/ManScent'
import WomenScent from './components/WomenScent'
import VintageScent from './components/VintageScent'
import Footer from './components/Footer'
import FooterVideo from './components/FooterVideo'

const Home: React.FC = () => {
  return (
    <div>
      <Hero/>
      <RevealText/>
      <StartPage/>
       <EssenceHero/>
       <TerraSection/>
       <WomenScent/>
       <VintageScent/>
       <FooterVideo/>
       <Footer/>
    </div>
  )
}

export default Home