// src/App.js
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import FunFacts from './components/FunFacts';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Introduction />
      <FunFacts />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;