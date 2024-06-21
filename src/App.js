// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
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
        <Schedule />
        <Ubication />
        <Contact />
        <a href="#inicio" className="volver">Volver a Inicio</a>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
