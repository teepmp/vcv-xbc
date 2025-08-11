'use client';

import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { ChevronsUpDown, Languages, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface VerseExplanationProps {
  explanation: {
    eng: string;
    lao: string;
  };
}

type Language = 'lao' | 'eng';

export default function VerseExplanation({ explanation }: VerseExplanationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>('lao');

  const textToRender = selectedLang === 'lao' ? explanation.lao : explanation.eng;
  const content = textToRender.split('\n\n').map((paragraph, pIndex) => (
    <div key={pIndex} className="mb-2 last:mb-0">
      {paragraph.split('\n').map((line, lIndex) => {
        if (line.startsWith('•')) {
          return (
            <div key={lIndex} className="flex items-start">
              <span className="mr-2 mt-1">∙</span>
              <p className="flex-1 text-muted-foreground text-sm">{line.substring(1).trim()}</p>
            </div>
          );
        }
        if (line.startsWith('**') && line.endsWith('**')) {
           return <p key={lIndex} className="text-muted-foreground text-sm font-bold mt-2">{line.substring(2, line.length - 2)}</p>
        }
        return <p key={lIndex} className="text-muted-foreground text-sm">{line}</p>;
      })}
    </div>
  ));
  

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full mt-4"
    >
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm" className="w-full justify-between">
          <div className='flex items-center gap-2'>
            <BookOpen className="h-4 w-4" />
            <span>ຄຳອະທິບາຍ</span>
          </div>
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-2">
            <CardHeader className='p-4'>
                 <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                        <Languages className="h-5 w-5" />
                        <span>{selectedLang === 'lao' ? 'ພາສາລາວ' : 'English'}</span>
                    </CardTitle>
                    <div className="flex items-center space-x-1 rounded-lg bg-secondary p-1">
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
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                {content}
            </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}
