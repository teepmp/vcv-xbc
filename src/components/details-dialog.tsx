import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";
import VerseExplanation from "./verse-explanation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


interface DetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  details: {
    title: string;
    introduction: string;
    sections?: {
      heading: string;
      points: string[];
    }[];
    accordion?: {
      category: string;
      terms: { term: string; definition: string }[];
    }[];
    verses?: {
      arabic: string;
      lao: string;
      english: string;
      explanation?: {
        eng: string;
        lao: string;
      };
    }[];
  } | null;
  surahNumber?: number;
}

const isQuote = (text: string) => /^\s*".+"\s*\(([^)]+)\)\s*$/.test(text);
const isHtml = (text: string) => /<[a-z][\s\S]*>/i.test(text);

export default function DetailsDialog({ isOpen, onClose, details, surahNumber }: DetailsDialogProps) {
  if (!details) {
    return null;
  }

  const isBulletedList = (heading: string) => {
    return heading === 'ມຸດສະລິມໝາຍເຖິງຫຍັງ?' || heading === 'ເປັນຫຍັງຕ້ອງມີສາດສະດາ?' || heading === 'ສາດສະດາໃນປະຫວັດສາດ' || heading === 'ບົດບາດຂອງສາດສະດາໃນຊີວິດຂອງພວກເຮົາ' || heading === 'ເປັນຫຍັງຕ້ອງເອີ້ນພະເຈົ້າວ່າ "ອັນລໍຮ໌"?' || heading === 'ຄຸນລັກສະນະຂອງອັນລໍຮ໌ໃນອິດສະລາມ' || heading === 'ຄວາມສຳຄັນຂອງມັດສະຍິດໃນອິດສະລາມ';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl p-0">
        <ScrollArea className="max-h-[80vh]">
          <div className="p-6">
            <DialogHeader className="mb-4 text-left">
              <DialogTitle className="text-2xl font-bold font-headline text-primary mb-2">{details.title}</DialogTitle>
              {details.introduction && (
                <DialogDescription className="text-lg text-muted-foreground text-left">
                  {details.introduction}
                </DialogDescription>
              )}
            </DialogHeader>
          
            <div className="space-y-6">
              {details.sections && details.sections.map((section, index) => (
                <div key={index}>
                  {section.heading && <h3 className="text-xl font-semibold font-headline text-foreground/90 mb-3">{section.heading}</h3>}
                  <div className="space-y-2 text-muted-foreground">
                      {section.points.map((point, pointIndex) => {
                        if (isHtml(point)) {
                          return (
                              <blockquote key={pointIndex} className="p-4 my-4 border-l-4 border-primary/50 bg-primary/10">
                                  <div dangerouslySetInnerHTML={{ __html: point }} />
                              </blockquote>
                          )
                        }
                        if (isQuote(point)) {
                          const quoteMatch = point.match(/"([^"]+)"\s*\(([^)]+)\)/);
                          if (quoteMatch) {
                            const [_, quote, source] = quoteMatch;
                             const isDarkStyle = source.includes("ອັນກຸຣອານ 49:13");
                            return (
                              <blockquote key={pointIndex} className={`p-4 my-4 border-l-4 ${isDarkStyle ? 'border-foreground/50 bg-foreground text-background' : 'border-primary/50 bg-primary/10'}`}>
                                    <p className="text-md italic font-medium leading-relaxed">"{quote}"</p>
                                    <cite className={`block text-right mt-2 text-sm ${isDarkStyle ? 'text-muted' : 'text-muted-foreground'}`}>- {source}</cite>
                                </blockquote>
                            )
                          }
                        }
                        
                        if (isBulletedList(section.heading) || point.startsWith('• ')) {
                          return (
                            <div key={pointIndex} className="flex items-start">
                                <span className="mr-2 mt-1.5 shrink-0">∙</span>
                                <p className="flex-1 leading-relaxed">{point.replace('• ', '')}</p>
                            </div>
                          );
                        }
                        
                        return <p key={pointIndex} className="leading-relaxed">{point}</p>;
                      })}
                    </div>
                </div>
              ))}
              {details.accordion && (
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {details.accordion.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border">
                       <AccordionTrigger className="p-4 text-left hover:no-underline font-semibold text-foreground/90">
                        {item.category}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="space-y-2">
                          {item.terms.map((term, termIndex) => (
                            <div key={termIndex} className="flex flex-col sm:flex-row">
                              <p className="font-semibold text-foreground w-full sm:w-1/3 pr-2">{term.term}:</p>
                              <p className="text-muted-foreground w-full sm:w-2/3">{term.definition}</p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
              {details.verses && details.verses.map((verse, index) => (
                <div key={index} className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border">
                      <p className="text-2xl text-right font-arabic text-foreground/90 leading-loose mb-4">
                        {verse.arabic}
                      </p>
                      <Separator />
                      <div className="mt-4 space-y-2">
                          <p className="text-md text-muted-foreground">
                            <span className="font-bold text-primary mr-2">{surahNumber}:{index + 1}</span> 
                            {verse.lao}
                          </p>
                          <p className="text-md text-muted-foreground italic">
                            <span className="font-bold text-primary mr-2">{surahNumber}:{index + 1}</span> 
                            {verse.english}
                          </p>
                      </div>
                      {verse.explanation && (
                          <VerseExplanation explanation={verse.explanation} />
                      )}
                  </div>
                  {index < details.verses.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
