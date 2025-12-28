import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Designs } from './components/Designs';
import { Footer } from './components/Footer';
import { DesignView } from './components/DesignView';

function HomePage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-brand-500/30 selection:text-brand-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Designs />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design/:designId" element={<DesignView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
