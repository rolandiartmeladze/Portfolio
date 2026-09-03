'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';

/* ==========================================================================
   1. EXPERIENCES DATA (სამუშაო გამოცდილების მონაცემთა ბაზა)
   ========================================================================== 
   ინახავს ინფორმაციას კომპანიების, პოზიციების, პერიოდების, მიღწევებისა 
   და გამოყენებული ტექნოლოგიების შესახებ.
*/
const EXPERIENCES = [
  {
    id: '1',
    role: 'Angular Frontend Developer',
    company: 'Petc',
    period: 'Jul 2025 – Feb 2026',
    type: 'Full-time',
    color: 'primary',
    highlights: [
      'Built 20+ scalable Angular components, cutting delivery time by 30%',
      'Optimized user and admin dashboards for performance and UX',
      'Collaborated closely with backend teams on API integration',
      'Implemented reactive state management with RxJS',
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
  },
  {
    id: '2',
    role: 'Frontend Web Developer',
    company: 'Artoa',
    period: 'Oct 2024 – Feb 2025',
    type: 'Full-time',
    color: 'accent',
    highlights: [
      'Delivered 15+ responsive pages in React/Next.js (30% faster load times)',
      'Refactored UI component library, reducing dev time by 25%',
      'Achieved pixel-perfect implementation from Figma designs',
      'Integrated REST APIs with React Query for data fetching',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '3',
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: 'Jun 2023 – Aug 2023',
    type: 'Freelance',
    color: 'primary',
    highlights: [
      'Built purchase/sales tracking app handling 2000+ monthly transactions',
      'Reduced input errors by 45% via comprehensive front-end validations',
      'Managed full product lifecycle from requirements to deployment',
      'Implemented real-time data sync with WebSocket connections',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'React'],
  },
  {
    id: '4',
    role: 'Frontend Web Developer',
    company: 'Gorespo',
    period: 'Apr 2023 – Jun 2023',
    type: 'Full-time',
    color: 'accent',
    highlights: [
      'Built real-time stock tracking app managing 5000+ products',
      'Improved supply chain monitoring efficiency by 35%',
      'Implemented live inventory dashboards with WebSocket updates',
      'Worked with cross-functional teams on data visualization',
    ],
    tech: ['Angular', 'TypeScript', 'MySQL', 'REST API'],
  },
];

/* ==========================================================================
   2. EXPERIENCE CARD COMPONENT (გამოცდილების ინდივიდუალური ბარათი)
   ========================================================================== 
   პასუხისმგებელია მარჯვენა მხარეს თითოეული სამუშაო ადგილის დეტალების რენდერზე.
   isActive პროპის მიხედვით იცვლება გამჭვირვალობა (opacity) და ტექსტის ეფექტები.
*/
function ExperienceCard({
  exp,
  isActive,
}: {
  exp: (typeof EXPERIENCES)[0];
  isActive: boolean;
}) {
  return (
    <div
      className={`workflow-step-content min-h-[50vh] flex flex-col justify-center px-0 lg:px-16 py-12 lg:py-16 border-b border-border relative transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-60'
      }`}
      data-exp={exp.id}
    >
      {/* 
        SVG Noodle Connector (ვიზუალური დამაკავშირებელი ხაზი დესკტოპისთვის):
        დეკორატიული მრუდი ხაზები, რომლებიც ბარათს აკავშირებს მარცხენა პანელთან.
      */}
      <div className="absolute left-0 lg:left-6 top-0 bottom-0 w-8 hidden lg:block pointer-events-none">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <path
            d="M 1 0 V 45 C 1 80 30 80 40 80"
            className="noodle-line"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 1 0 V 45 C 1 80 30 80 40 80"
            className="noodle-beam-path"
            vectorEffect="non-scaling-stroke"
            style={{ animationDelay: `${Number(exp.id) * 0.8}s` }}
          />
        </svg>
      </div>

      <div className="relative lg:pl-10">
        {/* Ghost Number (ფონური დიდი ინდექსის ნომერი, მაგ: 01, 02) */}
        <span
          className="text-8xl font-bold absolute -left-2 -top-8 select-none pointer-events-none"
          style={{ color: 'rgba(255,255,255,0.02)' }}
        >
          0{exp.id}
        </span>

        {/* Period Badge (თარიღის დიაპაზონი და სამუშაო ტიპის ბეჯი) */}
        <div className="flex items-center gap-3 mb-4">
          <Calendar size={12} className="text-muted-foreground" />
          <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
          <span
            className={`text-xs font-mono px-2 py-0.5 rounded border ${
              exp.type === 'Freelance'
                ? 'border-yellow-400/30 text-yellow-400 bg-yellow-400/5'
                : 'border-primary/30 text-primary bg-primary/5'
            }`}
          >
            {exp.type}
          </span>
        </div>

        {/* Role & Company (პოზიციის დასახელება და კომპანია) */}
        <h3
          className={`text-2xl md:text-3xl font-bold mb-1 relative z-10 ${
            isActive ? 'text-shimmer' : 'text-foreground/60'
          }`}
        >
          {exp.role}
        </h3>
        <div className="flex items-center gap-2 mb-6">
          <Briefcase size={13} className="text-muted-foreground" />
          <span className="text-base font-medium text-muted-foreground">{exp.company}</span>
          <ArrowUpRight size={13} className="text-muted-foreground" />
        </div>

        {/* Highlights (მთავარი მიღწევებისა და მოვალეობების ჩამონათვალი) */}
        <ul className="space-y-3 mb-6">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1 flex-shrink-0 text-xs">▸</span>
              <span className="text-sm text-muted-foreground leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech Tags (გამოყენებული ტექნოლოგიების ბეჯები) */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span key={t} className="skill-badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. MAIN EXPERIENCE SECTION (მთავარი გამოცდილების სექციის კომპონენტი)
   ========================================================================== 
   იყენებს 2-სვეტიან განლაგებას:
   - მარცხნივ: Sticky პანელი, რომელიც ეკრანზე ჩერდება სქროლვისას.
   - მარჯვნივ: სქროლვადი ბარათების ჩამონათვალი.
   IntersectionObserver თვალყურს ადევნებს, თუ რომელი ბარათია ეკრანის ცენტრში.
*/
export default function ExperienceSection() {
  // ინახავს ამჟამად აქტიური (ეკრანზე გამოჩენილი) გამოცდილების ID-ს
  const [activeExp, setActiveExp] = useState('1');

  useEffect(() => {
    /* 
      IntersectionObserver-ის კონფიგურაცია:
      rootMargin: '-40% 0px -40% 0px' უზრუნველყოფს, რომ ბარათი ჩაითვალოს 
      აქტიურად მხოლოდ მაშინ, როდესაც ის მოხვდება ეკრანის შუა 20%-იან ზონაში.
    */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.exp;
            if (id) setActiveExp(id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    // პოულობს ყველა ელემენტს 'data-exp' ატრიბუტით და რთავს მეთვალყურეობას
    const steps = document.querySelectorAll('[data-exp]');
    steps.forEach((el) => observer.observe(el));

    // Cleanup: მეთვალყურეობის გათიშვა კომპონენტის წაშლისას
    return () => observer.disconnect();
  }, []);

  // პოულობს აქტიური გამოცდილების სრულ ობიექტს მარცხენა პანელის პრევოუსთვის
  const activeData = EXPERIENCES.find((e) => e.id === activeExp);

  return (
    <section id="experience" className="relative z-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row">
          
          {/* 
             STATIONARY / STICKY LEFT SIDE (მარცხენა გაჩერებული პანელი):
             lg:sticky lg:top-0 lg:h-screen - უზრუნველყოფს პანელის ეკრანზე 
             დაფიქსირებას მარჯვენა მხარის სქროლვის პარალელურად.
          */}
          <div className="lg:w-5/12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-12 lg:py-0 pr-0 lg:pr-12 border-r border-border/0 lg:border-border">
            
            {/* სექციის სათაური */}
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">
              // experience
            </p>
            <h2 className="text-shimmer text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Where I&apos;ve
              <br />
              <span className="text-muted-foreground/40">Made Impact</span>
            </h2>

            {/* Step Navigation (ნავიგაცია დესკტოპისთვის) */}
            <div className="hidden lg:block border-l border-border pl-6 relative space-y-5">
              <div className="vertical-beam" />
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="relative flex items-start gap-4 cursor-pointer group"
                  data-trigger={exp.id}
                >
                  {/* აქტიური ნაბიჯის ვერტიკალური ინდიკატორი ხაზი */}
                  <div
                    className="step-indicator-line"
                    style={{
                      background: exp.color === 'primary' ? 'var(--primary)' : 'var(--accent)',
                      height: activeExp === exp.id ? '100%' : '0%',
                      boxShadow:
                        activeExp === exp.id
                          ? exp.color === 'primary'
                            ? '0 0 10px rgba(14,165,114,0.6)'
                            : '0 0 10px rgba(91,91,214,0.6)'
                          : 'none',
                    }}
                  />
                  <div>
                    <h3
                      className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                        activeExp === exp.id ? 'text-foreground' : 'step-title-inactive'
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      {exp.company} · {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Preview (აქტიური პოზიციის ტექნოლოგიების დესკტოპ პრევიუ) */}
            {activeData && (
              <div className="hidden lg:block mt-8 glass-card rounded-xl p-5 border-primary/10">
                <div className="flex flex-wrap gap-2">
                  {activeData.tech.map((t) => (
                    <span key={t} className="skill-badge active">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 
             SCROLLING RIGHT SIDE (მარჯვენა სქროლვადი მხარე):
             შეიცავს ყველა გამოცდილების ბარათს.
          */}
          <div className="lg:w-7/12">
            <div className="hidden lg:block" style={{ height: '10vh' }} />
            {EXPERIENCES.map((exp) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                isActive={activeExp === exp.id}
              />
            ))}
            <div className="hidden lg:block" style={{ height: '10vh' }} />
          </div>

        </div>
      </div>
    </section>
  );
}
