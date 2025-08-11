'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Sparkles, LoaderCircle } from 'lucide-react';
import { summarizeFaqAnswer } from '@/ai/flows/faq-answer-summarization';
import { useToast } from '@/hooks/use-toast';

const faqs = [
    {
        question: 'ສາສະໜາອິດສະລາມແຕກຕ່າງຈາກສາສະໜາອື່ນແນວໃດ?',
        answer: 'ສາສະໜາອິດສະລາມເນັ້ນການນະມັດສະການພະເຈົ້າອົງດຽວ (ອັນລໍຮ໌) ໂດຍບໍ່ມີຄູ່ຄອງ ຫຼື ລູກ, ມີຄຳພີອັນກຸรอานເປັນຄຳສອນສຸດທ້າຍ, ແລະ ມຸຮຳມັດເປັນນະບີທ່ານສຸດທ້າຍ'
    },
    {
        question: 'ການເຂົ້າຮັບອິດສະລາມເຮັດແນວໃດ?',
        answer: 'ການເຂົ້າຮັບອິດສະລາມເຮັດໄດ້ໂດຍການກ່າວຄຳປະຕິຍານ (ຊະຮາດະຮ໌) ດ້ວຍຄວາມເຂົ້າໃຈ ແລະ ຄວາມເຊື່ອທີ່ແທ້ຈິງ. ຄວນປຶກສາຜູ້ຮູ້ ຫຼື ໄປທີ່ມັດສະຍິດໃກ້ບ້ານ'
    },
    {
        question: 'ແມ່ຍິງໃນອິດສະລາມມີສິດແນວໃດ?',
        answer: 'ອິດສະລາມໃຫ້ກຽດແມ່ຍິງໃນຖານະແມ່, ພັນລະຍາ, ແລະ ລູກສາວ. ມີສິດໃນການສຶກສາ, ເຮັດວຽກ, ເປັນເຈົ້າຂອງຊັບສິນ, ແລະ ມີສ່ວນຮ່ວມໃນສັງຄົມ'
    },
    {
        question: 'ອິດສະລາມກັບສາສະໜາອື່ນຢູ່ຮ່ວມກັນໄດ້ບໍ່?',
        answer: 'ອິດສະລາມສອນໃຫ້ເຄົາລົບສາສະໜາອື່ນ, ໂດຍສະເພາະຄຣິສ ແລະ ຢິວ, ທີ່ເອີ້ນວ່າ "ອະຮ໌ລຸນກິຕາບ" (ຊາວຄຳພີ), ແລະ ສົ່ງເສີມການຢູ່ຮ່ວມກັນຢ່າງສັນຕິ'
    },
    {
        question: 'ຈະຮຽນຮູ້ເພີ່ມເຕີມໄດ້ຢູ່ໃສ?',
        answer: 'ສາມາດໄປທີ່ມັດສະຍິດໃກ້ບ້ານ, ອ່ານປຶ້ມ, ເຂົ້າຮ່ວມກິດຈະກຳສາສະໜາ, ຫຼື ປຶກສາຜູ້ຮູ້ໃນຊຸມຊົນມຸດສະລິມ'
    }
];

interface FaqItem {
  question: string;
  answer: string;
}

const FaqItemComponent = ({ faq }: { faq: FaqItem }) => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async (answer: string) => {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeFaqAnswer({ faqAnswer: answer });
      setSummary(result.summary);
    } catch (error) {
      console.error("Error summarizing FAQ:", error);
      toast({
        title: "Error",
        description: "Failed to summarize the answer. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AccordionItem value={faq.question} className="bg-card rounded-xl shadow-lg border-b-0">
      <AccordionTrigger className="p-6 text-left hover:no-underline text-lg font-semibold text-foreground/90">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 space-y-4">
        <p className="text-muted-foreground">{faq.answer}</p>
        <div className="flex flex-col items-start space-y-2">
          <Button variant="outline" size="sm" onClick={() => handleSummarize(faq.answer)} disabled={isLoading}>
            {isLoading ? (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            ສະຫຼຸບດ້ວຍ AI
          </Button>
          {summary && (
            <div className="mt-2 p-3 bg-primary/10 rounded-lg border border-primary/20 text-sm text-foreground">
              <p>{summary}</p>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};


export default function FaqSection() {
  return (
    <section id="faq" className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold text-foreground/90 mb-4">ຄຳຖາມທີ່ພົບເລື້ອຍ</h2>
        <p className="text-lg text-muted-foreground">ຄຳຕອບສຳລັບຄຳຖາມທົ່ວໄປ</p>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FaqItemComponent key={index} faq={faq} />
        ))}
      </Accordion>
    </section>
  );
}
