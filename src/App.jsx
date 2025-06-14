import React from 'react'
import HeroSection from './components/HeroSection'
import PopularDestinations from './components/PopularDestinations'
import AdvantagesSection from './components/AdvantagesSection'
import TopPackages from './components/TopPackages'
import TestimonialsSection from './components/TestimonialsSection'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection/>
      
      <PopularDestinations/>
      <AdvantagesSection/>
      <TopPackages/>
      <TestimonialsSection/>

    
    </div>
  )
}

export default App
