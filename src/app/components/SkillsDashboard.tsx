'use client';

import React, { useState } from 'react';
import { Filter } from 'lucide-react';

/* ==========================================================================
   1. TYPES & DATA STRUCTURES (ტიპები და მონაცემთა სტრუქტურები)
   ========================================================================== 
   განსაზღვრავს უნარების კატეგორიების შესაძლო მნიშვნელობებს.
*/
type SkillCategory = 'all' | 'frontend' | 'backend' | 'databases' | 'tools';

/* 
   უნარების მონაცემთა ბაზა (Record ტიპით, სადაც გასაღები კატეგორიაა).
   თითოეულ უნარს აქვს:
   - name: ტექნოლოგიის დასახელება
   - category: შესაბამისი კატეგორია
   - relatedProjects: პროექტების ID-ების მასივი, სადაც ეს ტექნოლოგიაა გამოყენებული
*/
const SKILLS: Record<
  string,
  { name: string; category: SkillCategory; relatedProjects: string[] }[]
> = {
  frontend: [
    {
      name: 'Angular',
      category: 'frontend',
      relatedProjects: ['petc-dashboard', 'gorespo-tracker'],
    },
    { name: 'React.js', category: 'frontend', relatedProjects: ['social-chat', 'artoa-pages'] },
    { name: 'Next.js', category: 'frontend', relatedProjects: ['portfolio', 'artoa-pages'] },
    { name: 'Vue.js', category: 'frontend', relatedProjects: ['blog-engine'] },
    {
      name: 'TypeScript',
      category: 'frontend',
      relatedProjects: ['social-chat', 'portfolio', 'blog-engine', 'nestjs-micro'],
    },
    { name: 'JavaScript', category: 'frontend', relatedProjects: ['social-chat', 'artoa-pages'] },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      relatedProjects: ['portfolio', 'artoa-pages', 'blog-engine'],
    },
    { name: 'Framer Motion', category: 'frontend', relatedProjects: ['portfolio'] },
  ],
  backend: [
    { name: 'Node.js', category: 'backend', relatedProjects: ['social-chat', 'freelance-tracker'] },
    { name: 'Express', category: 'backend', relatedProjects: ['social-chat', 'freelance-tracker'] },
    { name: 'NestJS', category: 'backend', relatedProjects: ['nestjs-micro'] },
    { name: 'Django (DRF)', category: 'backend', relatedProjects: ['django-blog'] },
    { name: 'Python', category: 'backend', relatedProjects: ['django-blog'] },
    { name: 'PHP / Laravel', category: 'backend', relatedProjects: ['laravel-mvc'] },
    { name: 'Socket.IO', category: 'backend', relatedProjects: ['social-chat'] },
    {
      name: 'REST API',
      category: 'backend',
      relatedProjects: ['blog-engine', 'django-blog', 'laravel-mvc'],
    },
  ],
  databases: [
    { name: 'MongoDB', category: 'databases', relatedProjects: ['social-chat', 'nestjs-micro'] },
    {
      name: 'Mongoose',
      category: 'databases',
      relatedProjects: ['social-chat', 'freelance-tracker'],
    },
    { name: 'MySQL', category: 'databases', relatedProjects: ['laravel-mvc', 'gorespo-tracker'] },
    { name: 'Django ORM', category: 'databases', relatedProjects: ['django-blog'] },
    { name: 'SQLite', category: 'databases', relatedProjects: ['django-blog'] },
  ],
  tools: [
    { name: 'GitHub', category: 'tools', relatedProjects: [] },
    { name: 'GitLab', category: 'tools', relatedProjects: [] },
    { name: 'Postman', category: 'tools', relatedProjects: [] },
    { name: 'Vercel', category: 'tools', relatedProjects: ['portfolio', 'artoa-pages'] },
    { name: 'JWT Auth', category: 'tools', relatedProjects: ['laravel-mvc', 'nestjs-micro'] },
    { name: 'Google OAuth2', category: 'tools', relatedProjects: ['social-chat'] },
    { name: 'Pinia', category: 'tools', relatedProjects: ['blog-engine'] },
    { name: 'Vite', category: 'tools', relatedProjects: ['blog-engine'] },
  ],
};

/* კატეგორიების გამოსასახი დასახელებები UI-სთვის */
const CATEGORY_LABELS: Record<SkillCategory, string> = {
  all: 'All Skills',
  frontend: 'Frontend',
  backend: 'Backend',
  databases: 'Databases',
  tools: 'Tools & DevOps',
};

/* კატეგორიების მიხედვით ვიზუალური ფერების და Borde-ების სტილები (Tailwind CSS) */
const CATEGORY_COLORS: Record<string, string> = {
  frontend: 'text-primary border-primary/30 bg-primary/5',
  backend: 'text-accent border-accent/30 bg-accent/5',
  databases: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  tools: 'text-muted-foreground border-border bg-muted/20',
};

/* ==========================================================================
   2. MAIN COMPONENT (მთავარი SKILLS DASHBOARD კომპონენტი)
   ========================================================================== 
*/
export default function SkillsDashboard() {
  // ინახავს ამჟამად არჩეულ კატეგორიის ფილტრს (ნაგულისხმევად 'all')
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  // ინახავს იმ ტექნოლოგიის დასახელებას, რომელზეც მომხმარებელმა მაუსი გადაატარა (Hover)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // ინახავს იმ პროექტების სიას, რომლებიც დაკავშირებულია active/hovered ტექნოლოგიასთან
  const [highlightedProjects, setHighlightedProjects] = useState<string[]>([]);

  /* 
    ჰენდლერი, რომელიც იმართება მაუსის მიტანისას (onMouseEnter) და მოშორებისას (onMouseLeave).
    ანახლებს შესაბამის State-ებს დაკავშირებული პროექტების საჩვენებლად.
  */
  const handleSkillHover = (skill: { name: string; relatedProjects: string[] } | null) => {
    if (skill) {
      setHoveredSkill(skill.name);
      setHighlightedProjects(skill.relatedProjects);
    } else {
      setHoveredSkill(null);
      setHighlightedProjects([]);
    }
  };

  return (
    <section id="skills" className="relative z-10 py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* სექციის ზედა ზოლი (Header): სათაური, პრეფიქსი და მინიშნება */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">
              // skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Expertise</h2>
          </div>
          {/* მაუსის გადატარების ინსტრუქცია */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Filter size={12} />
            <span>Hover a skill to see related projects</span>
          </div>
        </div>

        {/* 
           კატეგორიების ფილტრაციის ღილაკები
           თითოეულ ღილაკზე დაჭერით იცვლება activeCategory State-ი
        */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(Object.keys(CATEGORY_LABELS) as SkillCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* 
           ტექნოლოგიების ბადე (Grid Layout):
           - თუ არჩეულია 'all', დარენდერდება ყველა კატეგორიის ბარათი.
           - თუ არჩეულია კონკრეტული კატეგორია, გამოჩნდება მხოლოდ ის ბარათი.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeCategory === 'all'
            ? Object.entries(SKILLS)
            : [[activeCategory, SKILLS[activeCategory]]]
          ).map(([category, skills]) => {
            // მკაფიოდ განვსაზღვრავთ კატეგორიის გასაღებს სტრიქონად
            const categoryKey = category as string;

            return (
              <div key={categoryKey} className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded border ${
                      CATEGORY_COLORS[categoryKey] || ''
                    }`}
                  >
                    {CATEGORY_LABELS[categoryKey as SkillCategory]}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(skills as { name: string; relatedProjects: string[] }[])?.map((skill) => (
                    <button
                      key={skill.name}
                      onMouseEnter={() => handleSkillHover(skill)}
                      onMouseLeave={() => handleSkillHover(null)}
                      className={`skill-badge transition-all duration-200 ${
                        hoveredSkill === skill.name ? 'active' : ''
                      }`}
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 
           დაკავშირებული პროექტების ინდიკატორი:
           ჩნდება მხოლოდ მაშინ, როდესაც მაუსი გადატარებულია ტექნოლოგიაზე 
           და იმ ტექნოლოგიას აქვს მითითებული 1 ან მეტი დაკავშირებული პროექტი.
        */}
        {highlightedProjects.length > 0 && (
          <div className="mt-6 glass-card rounded-lg px-5 py-4 flex items-center gap-3 border-primary/20">
            {/* მფეთქავი წერტილის ანიმაცია */}
            <div className="pulsing-dot flex-shrink-0" />
            <span className="text-xs font-mono text-muted-foreground">
              Related projects:{' '}
              <span className="text-primary">{highlightedProjects.join(', ')}</span>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
