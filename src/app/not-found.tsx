'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function NotFound() {
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.pathname);
    }
  }, []);

  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history?.back();
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#020617] text-[#e2e8f0] overflow-hidden p-4 sm:p-6 animated-gradient-bg">
      {/* 1. ფონის ხმაურის ეფექტი და ბადის ხაზები */}
      <div className="noise-overlay" />
      <div className="grid-bg-lines">
        <div className="grid-bg-inner">
          <div className="grid-bg-line" />
          <div className="grid-bg-line" />
          <div className="grid-bg-line" />
          <div className="grid-bg-line" />
        </div>
      </div>

      {/* 2. ფონის ნათების ბურთულები (Glow Orbs) */}
      <div className="hero-glow-orb-1 -top-20 -left-20 opacity-40 pointer-events-none" />
      <div className="hero-glow-orb-2 -bottom-20 -right-20 opacity-40 pointer-events-none" />

      {/* 3. მთავარი Glassmorphism კონტეინერი გასწორებული ფონით */}
      <div className="relative z-10 w-lg max-w-xl bg-[#0f172a]/80 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
        {/* 404 გრადიენტული სათაური */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative mb-3">
            <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tight text-gradient-primary select-none drop-shadow-md">
              404
            </h1>
            <span className="skill-badge inline-block mt-2 font-mono text-xs border border-[#5b5bd6]/40 text-[#5b5bd6] bg-[#5b5bd6]/10 px-2.5 py-0.5 rounded-full">
              HTTP_STATUS_NOT_FOUND
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Page Not Found</h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2 max-w-md leading-relaxed">
            The page you are looking for doesn't exist or has been moved temporarily.
          </p>
        </div>

        {/* 4. დეველოპერული ტერმინალის ბლოკი */}
        <div className="bg-[#020617]/90 rounded-xl p-4 border border-white/10 mb-6 font-mono text-xs text-[#e2e8f0] space-y-2 overflow-hidden shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[#64748b]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[11px]">system_diagnostics.log</span>
          </div>

          <div className="pt-1 flex items-center gap-2 text-[#0ea572] font-medium">
            <span>$&gt;</span>
            <span className="text-white">GET</span>
            <span className="text-[#5b5bd6] truncate max-w-[200px] sm:max-w-[300px]">
              {currentUrl || '/unknown-route'}
            </span>
            <span className="terminal-cursor" />
          </div>

          <div className="text-red-400 text-[11px] pt-1">
            ❌ Error: Failed to resolve route module. Page does not exist.
          </div>
        </div>

        {/* 5. გასწორებული ნავიგაციის ღილაკები მკაფიო კონტრასტით */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center justify-center gap-2 bg-[#1e293b] text-[#e2e8f0] hover:bg-[#334155] border border-white/10 px-5 py-3 rounded-xl font-medium transition-all duration-200 text-sm group"
          >
            <Icon
              name="ArrowLeftIcon"
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Go Back
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#0ea572] text-[#020617] hover:bg-[#0ea572]/90 font-semibold px-5 py-3 rounded-xl glow-primary transition-all duration-200 text-sm"
          >
            <Icon name="HomeIcon" size={18} />
            Back to Home
          </Link>
        </div>

        {/* 6. ხარვეზის დაფიქსირების სექცია */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-[#94a3b8]">
            <span className="pulsing-dot" />
            <span>Think this is a system error?</span>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-[#0ea572] hover:underline font-mono font-medium transition-colors"
          >
            <Icon name="ExclamationTriangleIcon" size={15} />
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
}