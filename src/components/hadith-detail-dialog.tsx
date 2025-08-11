'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';

interface Hadith {
  id: number;
  title_lo: string;
  arabic: string;
  translation_lo: string;
  translation_en: string;
}

interface HadithDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  hadith: Hadith | null;
}

type Language = 'lao' | 'eng';

export default function HadithDetailDialog({ isOpen, onClose, hadith }: HadithDetailDialogProps) {
  const [selectedLang, setSelectedLang] = useState<Language>('lao');
  
  if (!hadith) {
    return null;
  }

  const translation = selectedLang === 'lao' ? hadith.translation_lo : hadith.translation_en;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-headline text-primary mb-2">
            ຫະດີຊທີ {hadith.id}: {hadith.title_lo}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-6">
          <div className="space-y-6 py-4">
            <div className="bg-card p-4 rounded-lg border">
              <p className="text-2xl text-right font-arabic text-foreground/90 leading-loose mb-4 whitespace-pre-wrap">
                {hadith.arabic}
              </p>
              <Separator />
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-end space-x-1 rounded-lg bg-secondary p-1 w-fit mb-4">
                    <Button 
                        size="sm" 
                        variant={selectedLang === 'lao' ? 'default' : 'ghost'} 
                        onClick={() => setSelectedLang('lao')}
                        className="h-7 px-2"
                    >
                        ລາວ
                    </Button>
                    <Button 
                        size="sm" 
                        variant={selectedLang === 'eng' ? 'default' : 'ghost'} 
                        onClick={() => setSelectedLang('eng')}
                        className="h-7 px-2"
                    >
                        ENG
                    </Button>
                </div>
                <p className="text-md text-muted-foreground whitespace-pre-wrap">
                  {translation}
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
