'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Download, ArrowDown } from 'lucide-react';

// LinkedIn-ის SVG იკონის კომპონენტი
function LinkedinIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// GitHub-ის SVG იკონის კომპონენტი
function GithubIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

// ტერმინალში დასაბეჭდი ხაზების მასივი
const TERMINAL_LINES = [
  '> const roland = {',
  '>   role: "Frontend Full-Stack Developer",',
  '>   location: "Tsalka, Georgia 🇬🇪",',
  '>   stack: ["React", "Angular", "Next.js", "Node.js"],',
  '>   backend: ["NestJS", "Django", "Express"],',
  '>   databases: ["MongoDB", "MySQL", "PostgreSQL"],',
  '>   status: "Open for hybrid/remote roles",',
  '>   english: "B2 Professional",',
  '> }',
  '> console.log("Let\'s build something great!");',
];

// ----------------------------------------------------
// 1. TYPING TERMINAL კომპონენტი (Typewriter ეფექტით)
// ----------------------------------------------------
function TypingTerminal() {
  // ეკრანზე გამოჩენილი ხაზების მასივი
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  // მიმდინარე ხაზის ინდექსი
  const [currentLine, setCurrentLine] = useState(0);
  // მიმდინარე სიმბოლოს ინდექსი ხაზში
  const [currentChar, setCurrentChar] = useState(0);
  // დასრულდა თუ არა ბეჭდვის პროცესი
  const [done, setDone] = useState(false);
  // Ref ტერმინალის ავტომატური სქროლისთვის
  const containerRef = useRef<HTMLDivElement>(null);

  // Typewriter ლოგიკა - სიმბოლო-სიმბოლო ბეჭდვა
  useEffect(() => {
    if (done) return;

    // თუ ყველა ხაზი დაიბეჭდა, გავაჩეროთ პროცესი
    if (currentLine >= TERMINAL_LINES.length) {
      setDone(true);
      return;
    }

    const line = TERMINAL_LINES[currentLine];

    // ჯერ კიდევ თუ დარჩა სიმბოლოები მიმდინარე ხაზში
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] || '') + line[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, 22); // სიმბოლოს აკრეფის სიჩქარე (მგ)
      return () => clearTimeout(timeout);
    } else {
      // ხაზის დასრულების შემდეგ გადავდივართ შემდეგ ხაზზე მცირე პაუზით
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, done]);

  // ტერმინალში ახალი ხაზის დამატებისას ავტომატურად ქვემოთ სქროლი
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div className="glass-card rounded-xl overflow-hidden border border-border">
      {/* ტერმინალის ზედა ზოლი (Header) */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-primary/70" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">roland.config.ts</span>
      </div>

      {/* ტერმინალის შიგთავსი (Body) */}
      <div
        ref={containerRef}
        className="p-5 min-h-[220px] max-h-[280px] overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {displayedLines.map((line, i) => (
          <div key={i} className="font-mono text-xs leading-relaxed">
            {line.startsWith('>   ') ? (
              <span>
                <span className="text-muted-foreground">&gt; </span>
                {line.startsWith('>   role') || line.startsWith('>   status') ? (
                  <>
                    <span className="text-accent">
                      {line.slice(4, line.indexOf(':'))}
                    </span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-primary"> {line.slice(line.indexOf(':') + 1)}</span>
                  </>
                ) : (
                  <>
                    <span className="text-accent">
                      {line.slice(4, line.indexOf(':'))}
                    </span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-foreground"> {line.slice(line.indexOf(':') + 1)}</span>
                  </>
                )}
              </span>
            ) : line.startsWith('> console') ? (
              <span>
                <span className="text-muted-foreground">&gt; </span>
                <span className="text-primary">{line.slice(2)}</span>
              </span>
            ) : (
              <span className="text-foreground">{line}</span>
            )}
          </div>
        ))}

        {/* კურსორი, რომელიც ციმციმებს ბეჭდვისას */}
        {!done && (
          <div className="font-mono text-xs">
            <span className="text-muted-foreground">&gt; </span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 2. HERO SECTION მთავარი კომპონენტი
// ----------------------------------------------------
export default function HeroSection() {
  // State ანიმაციის/კომპონენტის ჩატვირთვის დასაფიქსირებლად (Client Side-ზე)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden animated-gradient-bg"
    >
      {/* ფონის ნათების ეფექტები (Atmospheric Orbs) */}
      <div
        className="hero-glow-orb-1"
        style={{ top: '-10%', right: '-5%' }}
        aria-hidden="true"
      />
      <div
        className="hero-glow-orb-2"
        style={{ bottom: '10%', left: '-8%' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ==========================================
              მარცხენა სვეტი: ტექსტები, ღილაკები და სტატისტიკა
             ========================================== */}
          <div className="lg:col-span-7">
            
            {/* სტატუსის ბეჯი (Active & Open for Roles) */}
            <div
              className="inline-flex items-center gap-3 glass-card px-4 py-2 rounded-full mb-8 border border-primary/20"
              style={mounted ? { opacity: 1 } : { opacity: 0 }}
            >
              <div className="pulsing-dot" />
              <span className="text-xs font-mono text-primary tracking-wide">
                Active &amp; Open for Hybrid/Remote Roles
              </span>
            </div>

            {/* მთავარი სათაური (სახელი და გვარი) */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6">
              <span className="block text-foreground">Roland</span>
              <span className="block text-gradient-primary">Artmeladze</span>
            </h1>

            {/* ქვესათაური / მოკლე აღწერა */}
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mb-10">
              Frontend-focused Full-Stack Developer shaping{' '}
              <span className="text-foreground font-medium">scalable React &amp; Angular</span>{' '}
              architectures from{' '}
              <span className="text-primary font-medium">Tsalka, Georgia</span>.
            </p>

            {/* Call To Action (CTA) ღილაკები */}
            <div className="flex flex-wrap gap-4">
              {/* რეზიუმეს ჩამოტვირთვის ღილაკი Google Drive-ის პირდაპირი ბმულით */}
              <a
                href="https://drive.google.com/uc?export=download&id=1GfJb0eRnapudkINcptm4QKnHC7uHt1VA"
                download
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:shadow-lg"
                style={{ boxShadow: '0 0 20px rgba(14, 165, 114, 0.25)' }}
              >
                <Download size={15} />
                Download Resume
              </a>

              {/* LinkedIn პროფილის ბმული */}
              <a
                href="https://www.linkedin.com/in/roland-artmeladze"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 glass-card-hover px-6 py-3 rounded-lg font-semibold text-sm text-foreground"
              >
                <LinkedinIcon size={15} className="text-accent" />
                LinkedIn
              </a>

              {/* GitHub პროფილის ბმული */}
              <a
                href="https://github.com/rolandiartmeladze"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 glass-card-hover px-6 py-3 rounded-lg font-semibold text-sm text-foreground"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
            </div>

            {/* სწრაფი სტატისტიკის ზოლი (Quick Stats Row) */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '20+', label: 'Components Shipped' },
                { value: '6', label: 'Projects Built' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono tracking-wide mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==========================================
              მარჯვენა სვეტი: ინტერაქტიული ტერმინალი და ტექნოლოგიების ბეჯები
             ========================================== */}
          <div className="lg:col-span-5">
            {/* ტერმინალის კომპონენტი */}
            <TypingTerminal />

            {/* ტექნოლოგიების სტეკის ბეჯები (Skill Badges) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Angular', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'MongoDB'].map(
                (tech, i) => (
                  <span
                    key={tech}
                    className="skill-badge"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* ქვემოთ ჩასქროლვის ინდიკატორი (Scroll Indicator) */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}