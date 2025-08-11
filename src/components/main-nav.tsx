'use client';

import type { Section } from '@/app/page';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MainNavProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export default function MainNav({ activeSection, setActiveSection }: MainNavProps) {
  const navItems: { id: Section; label: string }[] = [
    { id: 'basics', label: 'ພື້ນຖານ' },
    { id: 'beliefs', label: 'ຫຼັກຄວາມເຊື່ອ' },
    { id: 'pillars', label: 'ຫຼັກປະຕິບັດ' },
    { id: 'articles', label: 'ບົດຄວາມ' },
    { id: 'quran', label: 'ອັນກຸຣອານ' },
    { id: 'hadith', label: 'ຫະດີຊ' },
    { id: 'faq', label: 'ຄຳຖາມທີ່ພົບເລື້ອຍ' },
  ];

  const handleNavClick = (sectionId: Section) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="flex justify-center space-x-1 md:space-x-2 py-2 overflow-x-auto">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "nav-btn px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-sm",
                activeSection === item.id
                  ? 'bg-blue-100 text-blue-700 dark:bg-sky-700 dark:text-sky-100'
                  : 'hover:bg-blue-100/50 hover:text-blue-700 dark:hover:bg-sky-900/50 dark:hover:text-sky-300'
              )}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
