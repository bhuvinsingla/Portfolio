import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-brand-500/30 selection:text-brand-100">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
