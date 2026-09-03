import React from 'react';
import Header from '@/components/Header';

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

      <main className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4">
      </main>
    </>
  );
}
