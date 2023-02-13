import React from 'react';
import {CTA , Brand , Navbar} from './components'
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className='gradient-bg'>
        <Navbar />
        <Header />
        </div>
        <div>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
      </div>
  );
}

export default App;
