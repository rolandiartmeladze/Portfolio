'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Code2, Zap, Globe } from 'lucide-react';

/* ==========================================================================
   1. TBILISI CLOCK COMPONENT (ცოცხალი საათის კომპონენტი)
   ========================================================================== 
   ეს კომპონენტი ითვლის და აჩვენებს თბილისის მიმდინარე ადგილობრივ დროსა და თარიღს.
   გამოყენებულია UTC+4 დროის ზონა (Asia/Tbilisi).
*/
function TbilisiClock() {
  // ინახავს ფორმატირებულ დროის სტრიქონს (მაგ: "23:51:56")
  const [timeStr, setTimeStr] = useState('');
  // ინახავს ფორმატირებულ თარიღის სტრიქონს (მაგ: "Thursday, Sep 3, 2026")
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    // ფუნქცია, რომელიც ანახლებს დროისა და თარიღის მდგომარეობებს
    const update = () => {
      const now = new Date();
      // გადაჰყავს მიმდინარე დრო სპეციფიკურად თბილისის დროის ზონაში
      const tbilisiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tbilisi' }));

      // დროის ფორმატირება: 24-საათიანი ფორმატი (00:00:00)
      setTimeStr(
        tbilisiTime?.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );

      // თარიღის ფორმატირება: კვირის დღე, თვე, რიცხვი, წელი
      setDateStr(
        tbilisiTime?.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      );
    };

    // პირველადი გამოძახება კომპონენტის ჩატვირთვისთანავე
    update();

    // ყოველ 1 წამში (1000ms) იძახებს update ფუნქციას საათის განახლებისთვის
    const interval = setInterval(update, 1000);

    // ინტერვალის გასუფთავება (cleanup) კომპონენტის წაშლისას (unmount)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full">
      {/* ზედა სექცია: ლოკაციის დასახელება და იკონი */}
      <div className="flex items-center gap-2 mb-4">
        <MapPin size={14} className="text-primary" />
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          Tsalka, Georgia
        </span>
      </div>

      {/* შუა სექცია: მთავარი ციფრული საათი, თარიღი და სტატუსი */}
      <div>
        {/* ციფრული საათი — tabular-nums უზრუნველყოფს ციფრების თანაბარ სიგანეს ცვლილებისას */}
        <div className="font-mono text-4xl md:text-5xl font-bold text-foreground tracking-tight tabular-nums">
          {timeStr || '00:00:00'}
        </div>
        {/* მიმდინარე თარიღი */}
        <div className="font-mono text-xs text-muted-foreground mt-2">
          {dateStr || 'Loading...'}
        </div>
        {/* აქტიური დროის ზონის ინდიკატორი (მფეთქავი წერტილით) */}
        <div className="flex items-center gap-2 mt-3">
          <div className="pulsing-dot" />
          <span className="text-xs font-mono text-primary">UTC+4 · Active</span>
        </div>
      </div>

      {/* ქვედა სექცია: ადგილობრივი დროის ტეგი */}
      <div className="mt-4 flex items-center gap-2">
        <Clock size={12} className="text-muted-foreground" />
        <span className="text-xs text-muted-foreground font-mono">Local Time</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   2. TECH STACK CAROUSEL COMPONENT (ტექნოლოგიური სტეკის კარუსელი)
   ========================================================================== 
   12 ტექნოლოგია გადანაწილებულია ზუსტად თანაბრად: 3 სტრიქონი, 4 სვეტი (3x4).
   გამოყენებულია CSS Grid და flex-1, რათა ბარათებმა სრულად შეავსონ მშობელი ბლოკის სიმაღლე.
*/

const TECH_STACK = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'Next.js', color: '#e2e8f0' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'NestJS', color: '#E0234E' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Django', color: '#092E20' },
  { name: 'Vue.js', color: '#42B883' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MySQL', color: '#4479A1' },
];

function TechStackCard() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((i) => (i + 1) % TECH_STACK?.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* სექციის სათაური და იკონი */}
      <div className="flex items-center gap-2 mb-4">
        <Code2 size={14} className="text-accent" />
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          Tech Stack
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 flex-1 auto-rows-fr">
        {TECH_STACK?.map((tech, i) => {
          const isActive = i === activeIdx;
          
          return (
            <div
              key={tech?.name}
              className={`flex items-start justify-start p-2.5 rounded-lg border transition-all duration-300 font-mono text-xs ${
                isActive
                  ? 'shadow-[0_0_15px_rgba(0,0,0,0.3)] scale-[1.02]'
                  : 'border-border/50 bg-background/30 text-muted-foreground'
              }`}
              style={
                isActive
                  ? {
                      borderColor: tech?.color,
                      color: tech?.color,
                      backgroundColor: `${tech?.color}15`,
                    }
                  : {}
              }
            >
              <span className="truncate">{tech?.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ==========================================================================
   3. QUICK FACTS COMPONENT (სწრაფი ფაქტების კომპონენტი)
   ========================================================================== 
   აჩვენებს მოკლე საკვანძო ინფორმაციას გამოცდილების, ენებისა და სამუშაო ფორმატის შესახებ.
*/
const FACTS = [
  { icon: '⚡', label: '3+ Years Building Web Solutions' },
  { icon: '🧩', label: '20+ Reusable Components Shipped' },
  { icon: '🌐', label: 'B2 English & Native Georgian' },
  { icon: '🚀', label: 'Open for Hybrid / Remote Roles' },
];

function QuickFactsCard() {
  return (
    <div className="flex flex-col h-full">
      {/* სექციის სათაური */}
      <div className="flex items-center gap-2 mb-4">
        <Zap size={14} className="text-primary" />
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          Quick Facts
        </span>
      </div>

      {/* ფაქტების სიის რენდერი */}
      <ul className="space-y-3 flex-1">
        {FACTS?.map((fact) => (
          <li key={fact?.label} className="flex items-start gap-3">
            <span className="text-base leading-none mt-0.5">{fact?.icon}</span>
            <span className="text-sm text-muted-foreground leading-snug">{fact?.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================================================================
   4. TERMINAL JSON PROFILE COMPONENT (ტერმინალის JSON პროფილის კომპონენტი)
   ========================================================================== 
   პროფილის მონაცემების დემონსტრირება ტერმინალის/IDE-ს სტილში JSON ფორმატში.
*/
const JSON_LINES = [
  { text: '{', color: 'foreground' },
  { text: '  "name": "Roland Artmeladze",', color: 'accent' },
  { text: '  "role": "Full-Stack Developer",', color: 'accent' },
  { text: '  "location": "Tsalka, GE",', color: 'primary' },
  { text: '  "experience": "3+ years",', color: 'primary' },
  { text: '  "focus": "Frontend Architecture",', color: 'accent' },
  { text: '  "available": true,', color: 'foreground' },
  { text: '  "remote": true', color: 'foreground' },
  { text: '}', color: 'foreground' },
];

function TerminalJsonCard() {
  return (
    <div className="flex flex-col h-full">
      {/* ტერმინალის ზედა ზოლი (macOS სტილის ფერადი ღილაკებით) */}
      <div className="flex items-center gap-2 mb-1">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        </div>
        <span className="ml-2 text-xs font-mono text-muted-foreground">profile.json</span>
      </div>

      {/* JSON კოდის ხაზების რენდერინგი ფერების სინტაქსური გამოკვეთით */}
      <div className="flex-1 overflow-hidden">
        {JSON_LINES?.map((line, i) => (
          <div key={i} className="font-mono text-xs leading-relaxed">
            {line?.color === 'primary' ? (
              <span className="text-primary">{line?.text}</span>
            ) : line?.color === 'accent' ? (
              <span className="text-accent">{line?.text}</span>
            ) : (
              <span className="text-foreground/80">{line?.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   5. MAIN BENTO SECTION (მთავარი Bento Grid სექცია)
   ========================================================================== 
   მთავარი კომპონენტი, რომელიც აერთიანებს ყველა ბარათს Bento Grid განლაგებაში.
   უზრუნველყოფს ადაპტურ (Responsive) დიზაინს Mobile/Tablet/Desktop ეკრანებისთვის.
*/
export default function AboutStatsSection() {
  return (
    <section id="about" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* სექციის მთავარი სათაური და პრეფიქსი */}
        <div className="mb-10">
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">
            // about me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            At a Glance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          
          {/* ბარათი 1: თბილისის ცოცხალი საათი (სვეტი 1, სტრიქონი 1) */}
          <div className="glass-card-hover rounded-xl p-6 min-h-[220px] flex flex-col">
            <TbilisiClock />
          </div>

          {/* ბარათი 2: ტექნოლოგიური სტეკი (სვეტი 2, დესკტოპზე იკავებს 2 სტრიქონს - row-span-2) */}
          <div className="glass-card-hover rounded-xl p-6 min-h-[220px] lg:row-span-2 flex flex-col">
            <TechStackCard />
          </div>

          {/* ბარათი 3: სწრაფი ფაქტები (სვეტი 3, სტრიქონი 1) */}
          <div className="glass-card-hover rounded-xl p-6 min-h-[220px] flex flex-col">
            <QuickFactsCard />
          </div>

          {/* ბარათი 4: ტერმინალის JSON პროფილი (სვეტი 1, სტრიქონი 2) */}
          <div className="glass-card-hover rounded-xl p-6 min-h-[220px] lg:col-span-1 flex flex-col bg-muted/20">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={14} className="text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                Profile
              </span>
            </div>
            <TerminalJsonCard />
          </div>

          {/* ბარათი 5: ხელმისაწვდომობის სტატუსი (სვეტი 3, სტრიქონი 2 - ჩანს მხოლოდ lg ეკრანებზე) */}
          <div className="glass-card-hover rounded-xl p-6 min-h-[220px] flex flex-col justify-between hidden lg:flex">
            <div>
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
                // availability
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Remote Work', value: '✓ Available' },
                  { label: 'Hybrid Roles', value: '✓ Available' },
                  { label: 'Freelance', value: '✓ Available' },
                  { label: 'Full-time', value: '✓ Preferred' },
                ]?.map((item) => (
                  <div key={item?.label} className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground font-mono">{item?.label}</span>
                    <span className="text-xs text-primary font-mono">{item?.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* ქვედა სტატუსის ინდიკატორი */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="pulsing-dot mb-2" />
              <p className="text-xs text-muted-foreground font-mono">
                Currently accepting new opportunities
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}