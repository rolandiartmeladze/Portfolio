import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutStatsSection from '@/app/components/AboutStatsSection';
import SkillsDashboard from '@/app/components/SkillsDashboard';
import ExperienceSection from '@/app/components/ExperienceSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import EducationSection from '@/app/components/EducationSection';

/* ==========================================================================
   HOME PAGE COMPONENT (პორტფოლიოს მთავარი გვერდი)
   ========================================================================== 
   ეს არის აპლიკაციის მთავარი Landing Page, რომელიც აერთიანებს პორტფოლიოს
   ყველა ძირითად სექციას, გლობალურ ვიზუალურ ეფექტებსა და ნავიგაციას.
*/
export default function HomePage() {
  return (
    <>
      {/* 
         1. NOISE TEXTURE OVERLAY (ხმაურის ტექსტურის ფენა):
         ქმნის რბილ, მარცვლოვან (Grainy/Noise) ეფექტს მთელ გვერდზე.
         aria-hidden="true" უზრუნველყოფს, რომ Screen Reader-ებმა გამოტოვონ ეს დეკორატიული ელემენტი.
      */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* 
         2. GRID BACKGROUND LINES (ფონური ბადის ხაზები):
         აბსოლუტურად პოზიციონირებული ვერტიკალური ხაზები თანამედროვე Tech UI / Grid დიზაინისთვის.
         მობილურზე ჩანს 2 ხაზი, ხოლო md და lg ბრეიკპოინტებზე ემატება დამატებითი ხაზები.
      */}
      <div className="grid-bg-lines" aria-hidden="true">
        <div className="grid-bg-inner">
          <div className="grid-bg-line" />
          <div className="grid-bg-line hidden md:block" />
          <div className="grid-bg-line hidden lg:block" />
          <div className="grid-bg-line" />
        </div>
      </div>

      {/* 3. HEADER (მთავარი ნავიგაციის ზოლი) */}
      <Header />

      {/* 
         4. MAIN CONTENT CONTAINER (ძირითადი კონტენტის ზონა):
         relative z-10 უზრუნველყოფს, რომ კონტენტი განთავსდეს 
         ფონური Grid ხაზებისა და Noise ოვერლეის ზემოთ.
      */}
      <main className="relative z-10">
        {/* Hero Section — მთავარი წარდგენა და მისალმება */}
        <HeroSection />

        {/* About & Stats Section — მოკლე ბიოგრაფია და ძირითადი სტატისტიკა */}
        <AboutStatsSection />

        {/* Skills Dashboard — ტექნოლოგიური უნარებისა და ინსტრუმენტების დაფა */}
        <SkillsDashboard />

        {/* Experience Section — სამუშაო გამოცდილების ქრონოლოგია */}
        <ExperienceSection />

        {/* Projects Section — შესრულებული პროექტების გალერეა */}
        <ProjectsSection />

        {/* Education Section — განათლება, სერტიფიკატები, ენები და მიმდინარე სტეკი */}
        <EducationSection />
      </main>

      {/* 5. FOOTER (გვერდის ქვედა ნაწილი — საკონტაქტო ბმულები და საავტორო უფლებები) */}
      <Footer />
    </>
  );
}
