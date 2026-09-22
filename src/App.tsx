import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { CareerGoal } from './components/CareerGoal';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070c18] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 1. Navigation Bar (Sticky top) */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me */}
        <About />

        {/* 4. Skills / Learning */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Education */}
        <Education />

        {/* 7. Career Goal */}
        <CareerGoal />

        {/* 8. Learning Journey */}
        <LearningJourney />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

