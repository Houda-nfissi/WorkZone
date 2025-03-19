import React from 'react';
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero';
import PopularCategories from './components/PopularCategories';
import FeaturedFreelancers from './components/FeaturedFreelancers';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PopularCategories />
        <FeaturedFreelancers />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;