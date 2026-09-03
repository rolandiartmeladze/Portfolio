import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutStatsSection from '@/app/components/AboutStatsSection';
import SkillsDashboard from '@/app/components/SkillsDashboard';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';


export default function HomePage() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      {/* Grid background lines */}
      <div className="grid-bg-lines" aria-hidden="true">
        <div className="grid-bg-inner">
          <div className="grid-bg-line" />
          <div className="grid-bg-line hidden md:block" />
          <div className="grid-bg-line hidden lg:block" />
          <div className="grid-bg-line" />
        </div>
      </div>

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <AboutStatsSection />
        <SkillsDashboard />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <Footer />
    </>
  );
}
