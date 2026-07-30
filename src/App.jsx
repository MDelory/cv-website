import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PDFTemplate from './components/PDFTemplate';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <PDFTemplate />
    </div>
  );
}

export default App;
