import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="floating-elements">
        <div className="floating-element" style={{
          width: '300px',
          height: '300px',
          top: '20%',
          left: '10%',
          animationDelay: '0s'
        }}></div>
        <div className="floating-element" style={{
          width: '400px',
          height: '400px',
          top: '60%',
          left: '70%',
          animationDelay: '2s'
        }}></div>
        <div className="floating-element" style={{
          width: '200px',
          height: '200px',
          top: '30%',
          left: '80%',
          animationDelay: '4s'
        }}></div>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;