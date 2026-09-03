'use client';

import React, { useState } from 'react';
import { X, ExternalLink, GitBranch as Github, ChevronRight, Layers } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

/* ==========================================================================
   1. TYPES & DATA STRUCTURE (ტიპების განმარტება და პროექტების ბაზა)
   ========================================================================== 
   Project ტიპი განსაზღვრავს თითოეული პროექტის სტრუქტურას.
   შეიცავს როგორც ზოგად ინფოს (title, description), ასევე STAR მეთოდოლოგიის 
   ველებს (situation, task, action, result) დეტალური ქეისების წარმოსაჩენად.
*/
type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  situation: string; // STAR: სიტუაცია / პრობლემა
  task: string;      // STAR: ამოცანა
  action: string;    // STAR: შესრულებული მოქმედება
  result: string;    // STAR: მიღწეული შედეგი
  tech: string[];
  links: { github?: string; live?: string };
  colSpan?: string;  // Grid ბადეში სვეტების გაფართოების კლასი
  rowSpan?: string;
  accent: 'primary' | 'accent' | 'yellow'; // აქცენტირებული ფერები
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: 'social-chat',
    title: 'Social Chat Integration Platform',
    subtitle: 'MERN Stack · Real-time',
    description: 'Real-time multi-platform chat aggregator unifying Telegram, Messenger, and Instagram into a single interface.',
    situation: 'Businesses managing customer support across 3+ platforms faced fragmented communication, losing context and slowing response times.',
    task: 'Build a unified chat dashboard that aggregates messages from Telegram, Facebook Messenger, and Instagram in real-time.',
    action: 'Architected a MERN stack solution with Socket.IO for <100ms message sync, Google OAuth2 for authentication, and a responsive React dashboard with platform-specific message threading.',
    result: 'Achieved sub-100ms message sync latency across all platforms. Reduced context-switching for support teams by 70%. Successfully handling concurrent multi-platform sessions.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO', 'Google OAuth2'],
    links: { github: 'https://github.com/rolandiartmeladze' },
    colSpan: 'lg:col-span-2', // Bento Grid-ში იკავებს 2 სვეტს დესკტოპზე
    accent: 'primary',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecdb04eb-1773041188193.png",
    imageAlt: 'Dark server room with glowing network cables and blinking lights, atmospheric blue and green lighting'
  },
  {
    id: 'portfolio',
    title: 'Interactive Personal Portfolio',
    subtitle: 'Next.js · TypeScript',
    description: 'High-performance portfolio with Framer Motion animations and full SEO optimization.',
    situation: 'Needed a portfolio that itself demonstrates frontend expertise rather than just listing it.',
    task: 'Build a visually impressive, performant portfolio with advanced animations and perfect Lighthouse scores.',
    action: 'Used Next.js App Router with TypeScript, Framer Motion for physics-based animations, and systematic SEO with structured data schemas.',
    result: 'Achieved 98+ Lighthouse performance score. Portfolio itself became a conversation starter in interviews.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: { live: '#', github: 'https://github.com/rolandiartmeladze' },
    accent: 'accent',
    image: "https://images.unsplash.com/photo-1731937389219-0482470c099e",
    imageAlt: 'Dark coding environment with colorful syntax highlighting on monitor, dim ambient light, deep shadows'
  },
  {
    id: 'blog-engine',
    title: 'Blog Frontend Engine',
    subtitle: 'Vue 3 · Pinia',
    description: 'Full-featured blog frontend with Vue 3 Composition API, Pinia state management, and REST API integration.',
    situation: 'Client needed a modern blog platform replacing a legacy WordPress installation.',
    task: 'Build a Vue 3 frontend that consumed an existing REST API with fast navigation and smooth UX.',
    action: 'Implemented Vue 3 with Composition API, Pinia for global state, Vite for lightning-fast builds, and Tailwind CSS for styling.',
    result: 'Cut page load times by 60% vs old WordPress. Clean component architecture enabled the client to self-maintain the codebase.',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Pinia', 'REST API'],
    links: { github: 'https://github.com/rolandiartmeladze' },
    accent: 'primary',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10cefad5f-1772164263588.png",
    imageAlt: 'Dark terminal window with code, dim workspace with single monitor glow, moody developer setup'
  },
  {
    id: 'nestjs-micro',
    title: 'NestJS Microservice Architecture',
    subtitle: 'NestJS · MongoDB',
    description: 'Production-ready microservice boilerplate with DTOs, routing guards, and validation schemas.',
    situation: 'Team needed a scalable backend architecture pattern for rapid feature development.',
    task: 'Design and implement a NestJS microservice template with proper validation, auth guards, and DTO patterns.',
    action: 'Built modular NestJS architecture with TypeScript DTOs, class-validator schemas, JWT routing guards, and MongoDB with Mongoose ODM.',
    result: 'Template reduced new service spin-up time from days to hours. Adopted as team standard for all new backend services.',
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'JWT', 'class-validator'],
    links: { github: 'https://github.com/rolandiartmeladze' },
    accent: 'accent',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e1c57163-1765389098596.png",
    imageAlt: 'Dark data center with rows of server racks, deep shadows, cool blue ambient lighting, industrial atmosphere'
  },
  {
    id: 'django-blog',
    title: 'Django REST API Blog Core',
    subtitle: 'Python · DRF',
    description: 'Robust REST API backend for blog platform using Django REST Framework and SQLite.',
    situation: 'Frontend team needed a reliable API backend for a content management platform.',
    task: 'Build a fully-featured REST API with authentication, CRUD operations, and proper serialization.',
    action: 'Implemented Django REST Framework with custom serializers, ViewSets, token authentication, and comprehensive API documentation.',
    result: 'API supported 50+ endpoints with full CRUD. Zero downtime deployment on production. Used as learning reference by junior developers.',
    tech: ['Python', 'Django', 'DRF', 'SQLite', 'REST API'],
    links: { github: 'https://github.com/rolandiartmeladze' },
    accent: 'yellow',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_158aa6d4a-1771582449736.png",
    imageAlt: 'Dark matrix-style code waterfall on black screen, deep shadows, minimal ambient green glow'
  },
  {
    id: 'laravel-mvc',
    title: 'Laravel MVC Core Engine',
    subtitle: 'PHP · Laravel',
    description: 'Clean MVC implementation with JWT authentication, REST API, and MySQL database.',
    situation: 'Legacy PHP codebase needed modernization to Laravel with proper authentication.',
    task: 'Migrate spaghetti PHP to clean Laravel MVC with JWT auth and RESTful API design.',
    action: 'Implemented Laravel MVC with Eloquent ORM, JWT authentication middleware, RESTful resource controllers, and MySQL optimized queries.',
    result: 'Reduced codebase by 40% while adding features. API response times improved by 3x. Full test coverage added.',
    tech: ['PHP', 'Laravel', 'MySQL', 'JWT', 'REST API'],
    links: { github: 'https://github.com/rolandiartmeladze' },
    accent: 'primary',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c34e7a82-1773075088512.png",
    imageAlt: 'Dark laptop screen with code editor open, dim room with subtle backlighting, focused developer atmosphere'
  }
];

/* ==========================================================================
   2. PROJECT MODAL COMPONENT (STAR Case Study მოდალური ფანჯარა)
   ========================================================================== 
   გამოჩნდება პროექტის ბარათზე დაწკაპუნებისას.
   წარმოადგენს პროექტის დეტალურ ანალიზს STAR (Situation, Task, Action, Result) 
   მეთოდოლოგიით, ტექნოლოგიურ სტეკსა და ბმულებს (GitHub / Live Demo).
*/
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4"
      onClick={onClose} // ფონზე დაწკაპუნებისას მოდალის დახურვა
    >
      {/* ფონის დაბურვა (Backdrop Blur Effect) */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
      
      {/* მოდალის ძირითადი კონტეინერი */}
      <div
        className="relative z-10 glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // შიდა კონტენტზე დაწკაპუნებისას დახურვის პრევენცია
        style={{ scrollbarWidth: 'none' }}
      >
        {/* ჰედერის სურათი Gradient Over-ით */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <AppImage
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          
          {/* დახურვის ღილაკი */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-background/60 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* მოდალის შიდა შინაარსი */}
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">
              {project.subtitle}
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* STAR Method Section (პრობლემა, ამოცანა, მოქმედება, შედეგი) */}
          <div className="space-y-5 mb-6">
            {[
              { label: 'Situation', content: project.situation, color: 'text-yellow-400' },
              { label: 'Task', content: project.task, color: 'text-accent' },
              { label: 'Action', content: project.action, color: 'text-primary' },
              { label: 'Result', content: project.result, color: 'text-primary' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-lg p-4">
                <p className={`text-xs font-mono font-bold tracking-widest uppercase mb-2 ${item.color}`}>
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* სრული ტექნოლოგიური სტეკი */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="skill-badge active">
                {t}
              </span>
            ))}
          </div>

          {/* გარეთ გადასასვლელი ბმულები */}
          <div className="flex gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass-card-hover px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. MAIN PROJECTS SECTION (მთავარი პროექტების სექციის კომპონენტი)
   ========================================================================== 
   ორგანიზებულია Bento Grid სტრუქტურით (1/2/3 სვეტიანი ბადე ეკრანის მიხედვით).
   ინახავს არჩეული პროექტის მდგომარეობას (`selectedProject`) მოდალის ასასახად.
*/
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // დინამიური საზღვრებისა და ტექსტის ფერების რუკა (Accent mappings)
  const accentBorderMap = {
    primary: 'hover:border-primary/40',
    accent: 'hover:border-accent/40',
    yellow: 'hover:border-yellow-400/40',
  };

  const accentTextMap = {
    primary: 'text-primary',
    accent: 'text-accent',
    yellow: 'text-yellow-400',
  };

  return (
    <section id="projects" className="relative z-10 py-16 px-6 border-t border-border">
      {/* აქტიური პროექტის არსებობისას რენდერდება მოდალური ფანჯარა */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <div className="max-w-7xl mx-auto">
        {/* სექციის ჰედერი */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">
              // projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What I&apos;ve Built
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Layers size={12} />
            <span>Click any project for STAR case study</span>
          </div>
        </div>

        {/* Bento Grid layout (1 cols mobile, 2 cols tablet, 3 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group glass-card-hover rounded-xl overflow-hidden text-left transition-all duration-300 cursor-pointer ${
                project.colSpan || ''
              } ${accentBorderMap[project.accent]}`}
              aria-label={`View ${project.title} case study`}
            >
              {/* ბარათის სურათის ბლოკი */}
              <div className="relative h-40 overflow-hidden">
                <AppImage
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Hover-ზე გამოჩენადი ისრის ინდიკატორი */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 rounded-lg bg-background/60 backdrop-blur-sm">
                    <ChevronRight size={14} className={accentTextMap[project.accent]} />
                  </div>
                </div>
              </div>

              {/* ბარათის ძირითადი ტექსტური კონტენტი */}
              <div className="p-5">
                <p className={`text-xs font-mono tracking-widest uppercase mb-2 ${accentTextMap[project.accent]}`}>
                  {project.subtitle}
                </p>
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* ტექნოლოგიების ბეჯები (მაქსიმუმ 4, დანარჩენი +N ინდიკატორით) */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="skill-badge text-[10px] px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="skill-badge text-[10px] px-2 py-0.5 text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}