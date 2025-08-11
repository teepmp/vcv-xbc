'use client';

import { useState } from 'react';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import MainNav from '@/components/main-nav';
import BasicsSection from '@/components/basics-section';
import PillarsSection from '@/components/pillars-section';
import BeliefsSection from '@/components/beliefs-section';
import ArticlesSection from '@/components/articles-section';
import FaqSection from '@/components/faq-section';
import QuranSection from '@/components/quran-section';
import HadithSection from '@/components/hadith-section';

export type Section = 'basics' | 'beliefs' | 'pillars' | 'articles' | 'quran' | 'hadith' | 'faq';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('basics');

  const renderSection = () => {
    switch (activeSection) {
      case 'basics':
        return <BasicsSection />;
      case 'beliefs':
        return <BeliefsSection />;
      case 'pillars':
        return <PillarsSection />;
      case 'articles':
        return <ArticlesSection />;
      case 'quran':
        return <QuranSection />;
      case 'hadith':
        return <HadithSection />;
      case 'faq':
        return <FaqSection />;
      default:
        return <BasicsSection />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <MainNav activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto flex-grow px-4 sm:px-6 py-8">
        {renderSection()}
      </main>
      <SiteFooter />
    </div>
  );
}
