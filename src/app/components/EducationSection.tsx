'use client';

import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

/* ==========================================================================
   1. EDUCATION & CERTIFICATIONS DATA (განათლებისა და სერტიფიკატების ბაზა)
   ========================================================================== 
   ინახავს ინფორმაციას აკადემიური ხარისხის, უნივერსიტეტის, სასერტიფიკატო 
   კურსებისა და შესაბამისი ორგანიზაციების შესახებ.
*/
const EDUCATION = [
  {
    id: 'gtu',
    degree: "Bachelor's in Computer Engineering",
    institution: 'Georgian Technical University',
    period: '2015 – 2019',
    type: 'degree',
    description:
      'Four-year program covering computer architecture, algorithms, data structures, software engineering principles, and full-stack development fundamentals.',
    icon: GraduationCap,
    accent: 'primary',
  },
];

const CERTIFICATIONS = [
  {
    id: 'codecademy',
    title: 'Node.js / Express / MongoDB Certificate',
    issuer: 'Codecademy',
    period: 'Feb – Mar 2024',
    link: '#',
    accent: 'accent',
  },
  {
    id: 'codehs',
    title: 'JavaScript Programming Certificate',
    issuer: 'CodeHS',
    period: 'Nov – Dec 2023',
    link: '#',
    accent: 'primary',
  },
];

/* ==========================================================================
   2. MAIN EDUCATION SECTION (მთავარი განათლების სექციის კომპონენტი)
   ========================================================================== 
   მოიცავს 3 ძირითად ბლოკს:
   1. აკადემიური განათლება (Bento Grid 2 სვეტი)
   2. პროფესიული სერტიფიკატები (Bento Grid 1 სვეტი)
   3. ენების ცოდნის დონეები (Progress Bars) და მიმდინარე სწავლების სტეკი
*/
export default function EducationSection() {
  return (
    <section id="education" className="relative z-10 py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        
        {/* სექციის სათაურის ბლოკი */}
        <div className="mb-10">
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">
            // education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Learning &amp; Growth
          </h2>
        </div>

        {/* 
           BENTO GRID — Academic Degree & Certifications:
           lg:grid-cols-3 უზრუნველყოფს 3-სვეტიან განლაგებას დესკტოპზე.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* აკადემიური ხარისხის ბარათი — იკავებს 2 სვეტს დესკტოპზე (lg:col-span-2) */}
          {EDUCATION?.map((edu) => (
            <div
              key={edu?.id}
              className="glass-card-hover rounded-xl p-7 lg:col-span-2 flex flex-col justify-between min-h-[200px]"
            >
              <div className="flex items-start gap-4">
                {/* ხატულას კონტეინერი აქცენტირებული ფონით */}
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                  <edu.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-primary tracking-widest uppercase mb-1">
                    {edu?.period}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu?.degree}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{edu?.institution}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-5">
                {edu?.description}
              </p>
            </div>
          ))}

          {/* პროფესიული სერტიფიკატების სვეტი — იკავებს 1 სვეტს (1 col stacked) */}
          <div className="flex flex-col gap-4">
            {CERTIFICATIONS?.map((cert) => (
              <div
                key={cert?.id}
                className="glass-card-hover rounded-xl p-5 flex-1 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  {/* დინამიური აქცენტირების ხატულა (Primary ან Accent ფერი) */}
                  <div
                    className={`p-2.5 rounded-lg flex-shrink-0 ${
                      cert?.accent === 'accent'
                        ? 'bg-accent/10 border border-accent/20'
                        : 'bg-primary/10 border border-primary/20'
                    }`}
                  >
                    <Award
                      size={16}
                      className={cert?.accent === 'accent' ? 'text-accent' : 'text-primary'}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-mono tracking-widest uppercase mb-1 ${
                        cert?.accent === 'accent' ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {cert?.period}
                    </p>
                    <h4 className="text-sm font-bold text-foreground leading-snug">
                      {cert?.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert?.issuer}</p>
                  </div>
                </div>

                {/* სერტიფიკატის გარეგანი ბმული */}
                <a
                  href={cert?.link}
                  className="mt-4 flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={11} />
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 
           ADDITIONAL INFO GRID — Languages & Currently Learning:
           2-სვეტიანი ქვედა ბლოკი ენებისა და მიმდინარე ტექნოლოგიური ინტერესებისთვის.
        */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* ენების ცოდნის დონეები (Progress Bars) */}
          <div className="glass-card rounded-xl p-5">
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
              // languages
            </p>
            <div className="space-y-3">
              {[
                { lang: 'Georgian', level: 'Native', pct: 100 },
                { lang: 'English', level: 'B2 Professional', pct: 72 },
                { lang: 'Russian', level: 'Conversational', pct: 45 },
              ]?.map((l) => (
                <div key={l?.lang}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-foreground font-medium">{l?.lang}</span>
                    <span className="text-xs font-mono text-muted-foreground">{l?.level}</span>
                  </div>
                  {/* პროგრესის ვიზუალური ინდიკატორი ხაზი */}
                  <div className="h-1 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${l?.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* მიმდინარე სწავლების სექცია (Currently Learning Tech Badges) */}
          <div className="glass-card rounded-xl p-5">
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
              // currently learning
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'GraphQL',
                'Docker',
                'Kubernetes',
                'AWS',
                'React Native',
                'Rust',
                'WebAssembly',
                'AI Engineering',
                'Python',
                'Google Cloud & APIs',
              ]?.map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-mono mt-4">
              Always expanding the stack. Currently deep-diving into cloud infrastructure and mobile development.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}