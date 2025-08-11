'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { User, Ship, Moon, ScrollText, Fish, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailsDialog from '@/components/details-dialog';

const prophets = [
  {
    icon: <User className="h-8 w-8 text-primary" />,
    title: 'ນະບີອາດຳ (عليه السلام)',
    details: {
      title: 'ນະບີອາດຳ (عليه السلام) - ບິດາຂອງມະນຸດຊາດ',
      introduction: 'ອັນລໍຮ໌ໄດ້ສ້າງນະບີອາດຳຈາກດິນ ແລະ ໄດ້ສອນຊື່ຂອງທຸກສິ່ງໃຫ້ແກ່ເພິ່ນ. ເພິ່ນແລະຄູ່ຄອງ (ເຮົາວາ) ໄດ້ອາໄສຢູ່ໃນສວນສະຫວັນ ກ່ອນທີ່ຈະຖືກສົ່ງລົງມາຍັງໂລກນີ້.',
      sections: [
        {
          heading: 'ບົດຮຽນສຳຄັນ',
          points: [
            'ການສຳນຶກຜິດ: ເມື່ອທັງສອງໄດ້ເຮັດຜິດพลาด, ພວກເຂົາໄດ້ສຳນຶກຜິດ ແລະ ຂໍອະໄພໂທດຕໍ່ອັນລໍຮ໌ทันที.',
            'ການເປັນຕົວແທນ: ການຖືກສົ່ງລົງມາໃນໂລກນີ້ ເປັນການເລີ່ມຕົ້ນພາລະກິດຂອງມະນຸດໃນຖານະຜູ້ຄຸ້ມຄອງ (ຄໍລິຟະฮ์) ເທິງໜ້າແຜ່ນດິນ.',
          ],
        },
      ],
    },
  },
  {
    icon: <Ship className="h-8 w-8 text-primary" />,
    title: 'ນະບີນູຮ໌ (عليه السلام)',
    details: {
      title: 'ນະບີນູຮ໌ (عليه السلام) - ຜູ້ຮຽກຮ້ອງเชิญชวนอันยาวนาน',
      introduction: 'ນະບີນູຮ໌ໄດ້ໃຊ້ເວລາ 950 ປີ ໃນการเรียกร้องผู้คนของเขาสู่การเคารพภักดีต่ออัลลอฮ์องค์เดียว แต่มีเพียงส่วนน้อยเท่านั้นที่เชื่อฟัง.',
      sections: [
        {
          heading: 'ບົດຮຽນສຳຄັນ',
          points: [
            'ຄວາມອົດທົນ: ເພິ່ນໄດ້ສະແດງໃຫ້ເຫັນເຖິງຄວາມອົດທົນທີ່ສຸດຍອດໃນການເຜີຍແຜ່ສາດສະໜາ.',
            'ການໄວ້ວາງใจในอัลลอฮ์: ເຖິງແມ່ນຈະຖືກເຍາະເຍີ້ຍ, ເພິ່ນยังคงสร้างเรือตามคำสั่งของอัลลอฮ์, แสดงถึงการมอบความไว้วางใจอย่างสมบูรณ์.',
          ],
        },
      ],
    },
  },
    {
    icon: <Moon className="h-8 w-8 text-primary" />,
    title: 'ນະບີອິບຣໍຮີມ (عليه السلام)',
    details: {
      title: 'ນະບີອິບຣໍຮີມ (عليه السلام) - ເພື່ອນຂອງອັນລໍຮ໌',
      introduction: 'ນະບີອິບຣໍຮີມຖືກຍົກຍ້ອງໃນກຸรอานວ່າເປັນແບບຢ່າງແຫ່ງການຍອມຈຳນົນ. ເພິ່ນໄດ້ຄົ້ນຫາความจริงด้วยสติปัญญา และยืนหยัดต่อต้านการบูชารูปปั้นของสังคม.',
      sections: [
        {
          heading: 'ບົດຮຽນສຳຄັນ',
          points: [
            'ການສະແຫວງຫາຄວາມຈິງ: ເພິ່ນใช้การสังเกตดวงดาว, ดวงจันทร์, และดวงอาทิตย์ เพื่อนำทางผู้คนของเขาสู่การรู้จักพระเจ้าผู้ทรงสร้างที่แท้จริง.',
            'ການເສຍສະຫຼະ: ການเตรียมพร้อมที่จะเชือดพลีบุตรชาย (อิสมาอีล) ตามคำสั่งของอัลลอฮ์ คือสุดยอดแห่งการยอมจำนนและการเชื่อฟัง.',
            'ການສ້າງກະອ໌ບະຮ໌: ເພິ່ນແລະบุตรชายได้ร่วมกันสร้างวิหารกะอ์บะฮ์ขึ้นมาใหม่ เพื่อเป็นศูนย์กลางแห่งการเคารพภักดีต่ออัลลอฮ์องค์เดียว.',
          ],
        },
      ],
    },
  },
  {
    icon: <ScrollText className="h-8 w-8 text-primary" />,
    title: 'ນະບີມູຊາ (عليه السلام)',
    details: {
      title: 'ນະບີມູຊາ (عليه السلام) - ຜູ້ປົດປ່ອຍ',
      introduction: 'เรื่องราวของนะบีมูซาถูกกล่าวถึงบ่อยที่สุดในอัลกุรอาน. ท่านถูกส่งมาเพื่อปลดปล่อยวงศ์วานอิสราเอลจากการกดขี่ของฟาโรห์แห่งอียิปต์.',
      sections: [
        {
          heading: 'ບົດຮຽນສຳຄັນ',
          points: [
            'ຄວາມກ້າຫານ: ເພິ່ນเผชิญหน้ากับฟาโรห์, ผู้ปกครองที่ทรงอำนาจที่สุดในยุคนั้น, ด้วยความช่วยเหลือจากอัลลอฮ์.',
            'การอัศจรรย์: อัลลอฮ์ได้ประทานการอัศจรรย์มากมายให้แก่ท่าน, รวมถึงการแยกทะเลแดง.',
            'ความอดทนต่อผู้คน: ท่านต้องอดทนต่อการดื้อรั้นและการไม่เชื่อฟังของวงศ์วานอิสราเอล.',
          ],
        },
      ],
    },
  },
  {
    icon: <User className="h-8 w-8 text-primary" />,
    title: 'ນະບີອີຊາ (عليه السلام)',
    details: {
      title: 'ນະບີອີຊາ (عليه السلام) - พระวจนะของอัลลอฮ์',
      introduction: 'ในอิสลาม, นะบีอีซา (พระเยซู) เป็นหนึ่งในศาสนทูตผู้ยิ่งใหญ่ที่สุด. ท่านเกิดมาอย่างปาฏิหาริย์จากนางมัรยัม (มารีย์) โดยไม่มีบิดา.',
      sections: [
        {
          heading: 'สถานะในอิสลาม',
          points: [
            'เป็นศาสนทูตของอัลลอฮ์, ไม่ใช่พระเจ้าหรือบุตรของพระเจ้า.',
            'ได้รับประทานคัมภีร์อินญีล (Gospel).',
            'ทำการอัศจรรย์ต่างๆ ด้วยอนุมัติของอัลลอฮ์.',
            'ไม่ได้ถูกตรึงกางเขน แต่ถูกยกขึ้นไปบนสวรรค์ทั้งเป็น และจะกลับมาอีกครั้งในวันสิ้นโลก.',
          ],
        },
      ],
    },
  },
  {
    icon: <Fish className="h-8 w-8 text-primary" />,
    title: 'ນະບີມຸຮຳມັດ (ﷺ)',
    details: {
      title: 'ນະບີມຸຮຳມັດ (ﷺ) - ตราประทับแห่งบรรดานะบี',
      introduction: 'ท่านเป็นศาสนทูตคนสุดท้ายที่อัลลอฮ์ส่งมาเพื่อยืนยันสัจธรรมที่ศาสนทูตท่านก่อนๆ ได้นำมา และเพื่อทำให้สมบูรณ์.',
      sections: [
        {
          heading: 'ความเมตตาต่อสรรพสิ่ง',
          points: [
            'อัลกุรอานกล่าวว่า "และเราไม่ได้ส่งเจ้ามาเพื่ออื่นใด นอกจากเพื่อเป็นความเมตตาแก่ประชาชาติทั้งมวล".',
            'ท่านเป็นแบบอย่างที่สมบูรณ์แบบที่สุดในทุกๆ ด้านของชีวิต, ทั้งในฐานะผู้นำ, สามี, พ่อ, และเพื่อนบ้าน.',
          ],
        },
      ],
    },
  },
];

export default function ProphetsSection() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <section id="prophets" className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold text-foreground/90 mb-4">ເລື່ອງລາວຂອງບັນດານະບີ</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          ບົດຮຽນ ແລະ ແຮງບັນດານໃຈຈາກຊີວິດຂອງຜູ້ສົ່ງສານຂອງພະເຈົ້າ.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {prophets.map((item, index) => (
          <Card key={index} className="card-hover bg-card rounded-xl shadow-lg flex flex-col justify-between overflow-hidden">
            <CardHeader>
              {item.icon}
              <CardTitle className="font-headline text-xl font-semibold text-foreground/90 pt-3">{item.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button variant="link" className="p-0 h-auto text-primary" onClick={() => item.details && setSelectedItem(item.details)}>
                ອ່ານເພີ່ມເຕີມ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <DetailsDialog
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        details={selectedItem}
      />
    </section>
  );
}
