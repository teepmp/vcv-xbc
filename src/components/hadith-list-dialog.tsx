'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import HadithDetailDialog from '@/components/hadith-detail-dialog';

interface Hadith {
  id: number;
  title_en: string;
  title_lo: string;
  arabic: string;
  translation_en: string;
  translation_lo: string;
}

interface HadithListDialogProps {
  isOpen: boolean;
  onClose: () => void;
  hadiths: Hadith[];
}

export default function HadithListDialog({ isOpen, onClose, hadiths }: HadithListDialogProps) {
  const [selectedHadith, setSelectedHadith] = useState<Hadith | null>(null);

  const handleHadithClick = (hadith: Hadith) => {
    setSelectedHadith(hadith);
  };

  const handleDetailClose = () => {
    setSelectedHadith(null);
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-headline text-primary mb-2">40 ຫະດີຊ ນາວາວີ</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              ເລືອກຫະດີຊທີ່ທ່ານຕ້ອງການອ່ານ
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
              {hadiths.map((hadith) => (
                <Card 
                  key={hadith.id}
                  className="card-hover cursor-pointer"
                  onClick={() => handleHadithClick(hadith)}
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <p className="font-bold text-primary text-lg">ຫະດີຊທີ {hadith.id}</p>
                    <p className="text-sm text-foreground/90 mt-1">{hadith.title_lo}</p>
                    <p className="text-xs text-muted-foreground mt-1">{hadith.title_en}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {selectedHadith && (
        <HadithDetailDialog 
          isOpen={!!selectedHadith}
          onClose={handleDetailClose}
          hadith={selectedHadith}
        />
      )}
    </>
  );
}
