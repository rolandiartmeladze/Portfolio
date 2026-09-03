'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const handleScroll = () => setMenuOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [menuOpen]);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html?.classList?.remove('dark');
      html?.classList?.add('theme-light');
      html?.style?.setProperty('--background', '#f8fafc');
      html?.style?.setProperty('--foreground', '#0f172a');
      html?.style?.setProperty('--card', '#ffffff');
      html?.style?.setProperty('--muted', '#f1f5f9');
      html?.style?.setProperty('--border', 'rgba(0,0,0,0.08)');
    } else {
      html?.classList?.remove('theme-light');
      html?.classList?.add('dark');
      html?.style?.setProperty('--background', '#020617');
      html?.style?.setProperty('--foreground', '#e2e8f0');
      html?.style?.setProperty('--card', '#0f172a');
      html?.style?.setProperty('--muted', '#1e293b');
      html?.style?.setProperty('--border', 'rgba(255,255,255,0.08)');
    }
    setIsDark(!isDark);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        
        {/* 1. LOGO & BRAND NAME */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex items-center justify-center">
            <AppLogo size={28} />
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground hidden sm:inline-block">
            Roland<span className="text-primary">.</span>
          </span>
        </div>

        {/* 2. DESKTOP NAVIGATION (გაშლილი მენიუ) */}
        <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="px-4 py-2 text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-white transition-colors duration-200 relative group"
            >
              {link?.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </nav>

        {/* 3. RIGHT CONTROLS (Theme Toggle & Hire Me) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-primary/50 transition-all duration-200"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-[#0c9364] text-[#020617] px-6 py-2.5 text-xs font-bold tracking-wider uppercase rounded-lg transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle Button (ჩანს მხოლოდ პატარა ეკრანებზე) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0f172a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono tracking-widest uppercase text-slate-300 hover:text-primary transition-colors py-2"
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-primary text-[#020617] px-5 py-3 text-xs font-bold tracking-widest uppercase text-center rounded-lg shadow-md"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}