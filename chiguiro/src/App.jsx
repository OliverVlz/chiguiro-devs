import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Carp_Categories/Categories';
import Awards from './pages/Carp_Awards/Awards';
import AwardsFutbol from './pages/Carp_AwardsFutbol/AwardsFutbol';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Ubication from './pages/Ubication';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <Categories />
        <Awards />
        <AwardsFutbol />
        <Schedule />
        <Ubication />
        <Contact />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
