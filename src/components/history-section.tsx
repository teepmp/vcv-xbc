'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollText, Landmark, Microscope, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailsDialog from '@/components/details-dialog';

const historyItems = [
  {
    icon: <ScrollText className="h-8 w-8 text-primary" />,
    title: 'ຍຸກຂອງສາດສະດາມຸຮຳມັດ ﷺ',
    details: {
      title: 'ຍຸກຂອງສາດສະດາມຸຮຳມັດ ﷺ (ຄ.ສ. 570-632)',
      introduction: 'ເປັນຊ່ວງເວລາທີ່ສຳຄັນທີ່ສຸດໃນປະຫວັດສາດອິດສະລາມ, ເປັນຈຸດກຳເນີດຂອງສາສະໜາ ແລະ ການວາງຮາກຖານຂອງອາລະຍະທຳ.',
      sections: [
        {
          heading: 'ການປະກາດສາດສະໜາທີ່ມັກກະຮ໌',
          points: [
            'ສາດສະດາມຸຮຳມັດ ﷺ ໄດ້ຮັບການປະທານພະທຳຄັ້ງທຳອິດໃນອາຍຸ 40 ປີ.',
            'ເຜີຍແຜ່ຄຳສອນເລື່ອງເອກະເທວະນິຍົມ (ເຕົາຮີດ) ທ່າມກາງສັງຄົມທີ່ບູຊາຮູບປັ້ນ.',
            'ປະເຊີນກັບການຕໍ່ຕ້ານ ແລະ ຂົ່ມເຫັງຢ່າງຮຸນແຮງເປັນເວລາ 13 ປີ.',
          ],
        },
        {
          heading: 'ການອົບພະຍົບ (ຮິຈຣໍ) ແລະ ການສ້າງຕັ້ງລັດທີ່ມະດີນະຮ໌',
          points: [
            'ໃນປີ ຄ.ສ. 622, ໄດ້ອົບພະຍົບໄປຍັງເມືອງມະດີນະຮ໌ ເຊິ່ງເປັນຈຸດເລີ່ມຕົ້ນຂອງສັກກະລາດອິດສະລາມ.',
            'ສ້າງຕັ້ງຊຸມຊົນມຸດສະລິມທີ່เข้มแข็ง, ວາງລັດຖະທຳມະນູນມະດີນະຮ໌ ເພື່ອການຢູ່ຮ່ວມກັນຂອງຫຼາຍສາສະໜາ.',
            'ສ້າງຄວາມສາມັກຄີລະຫວ່າງຊາວມຸຮາຊິຣີນ (ผู้อพยพ) ແລະ ຊາວອັນສໍຣ (ผู้ช่วยเหลือ).',
          ],
        },
        {
          heading: 'ການເຜີຍແຜ່ອິດສະລາມ ແລະ ການກັບສູ່ມັກກະຮ໌',
          points: [
            'ເກີດສົງຄາມປ້ອງກັນຕົວຫຼາຍຄັ້ງ ເຊັ່ນ ສົງຄາມບາດັຣ, ອຸຮຸດ, ແລະ ຄັນດັກ.',
            'ໃນທີ່ສຸດ ສາມາດກັບເຂົ້າສູ່ມັກກະຮ໌ໄດ້ຢ່າງສັນຕິ ແລະ ປະກາດອະໄພຍະໂທດແກ່ສັດຕູ.',
            'ກ່ອນສິ້ນພະຊົນ, ສາສະໜາອິດສະລາມໄດ້ແຜ່ຂະຫຍາຍໄປທົ່ວແຫຼມອາຣັບ.',
          ],
        },
      ],
    },
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: 'ຍຸກຄໍລິຟະฮ์ຜູ້ຊົງທຳ',
    details: {
      title: 'ຍຸກຄໍລິຟະฮ์ຜູ້ຊົງທຳ (ຄ.ສ. 632-661)',
      introduction: 'ຫຼັງຈາກການສິ້ນພະຊົນຂອງສາດສະດາມຸຮຳມັດ ﷺ, ຊຸມຊົນມຸດສະລິມໄດ້ຖືກນຳພາໂດຍຄໍລິຟະฮ์ (ผู้สืบทอด) 4 ທ່ານ ທີ່ໃກ້ຊິດກັບສາດສະດາທີ່ສຸດ.',
      sections: [
        {
          heading: 'ຄໍລິຟະฮ์ທັງສີ່',
          points: [
            'ອະບູ ບັກກັຣ (632-634): ຮວບຮວມຄຳພີກຸรอาน ແລະ ປราบປາມການກະບົດ.',
            'ອຸມາຣ ອິບນຸລ ຄັຕຕອບ (634-644): ຂະຫຍາຍອານາເຂດຢ່າງກວ້າງຂວາງ, ຈັດຕັ້ງລະບົບການປົກຄອງ ແລະ ສານ.',
            'ອຸດມານ ອິບນິ ອັຟຟານ (644-656): ຈັດທຳຄຳພີກຸรอานສະບັບມາດຕະຖານ.',
            'ອາລີ ອິບນິ ອະບີ ຕໍລິບ (656-661): ປະເຊີນກັບຄວາມຂັດແຍ້ງພາຍໃນທີ່ນຳໄປສູ່ການແບ່ງແຍກ.',
          ],
        },
      ],
    },
  },
  {
    icon: <Microscope className="h-8 w-8 text-primary" />,
    title: 'ຍຸກທອງຂອງອິດສະລາມ',
    details: {
      title: 'ຍຸກທອງຂອງອິດສະລາມ (ປະມານສະຕະວັດທີ 8-14)',
      introduction: 'ເປັນຊ່ວງເວລາທີ່ອາລະຍະທຳອິດສະລາມมีความก้าวหน้าทางสติปัญญาและวัฒนธรรมอย่างสูง, มีศูนย์กลางอยู่ที่กรุงแบกแดด, ไคโร, และคอร์โดบา.',
      sections: [
        {
          heading: 'ຄວາມກ້າວໜ້າທາງວິທະຍາສາດ',
          points: [
            'ການແພດ: ອິບນຸ ຊີນາ (Avicenna) ຂຽນตำรา "The Canon of Medicine" ທີ່ໃຊ້ເປັນແບບຮຽນในยุโรปหลายศตวรรษ.',
            'ຄະນິດສາດ: ພັດທະນາພຶດຊະຄະນິດ (Algebra) ແລະ ນຳໃຊ້ເລກສູນຈາກອິນເດຍ.',
            'ດາລາສາດ: ສ້າງຫໍດູດາວ, ພັດທະນາເຄື່ອງມືຕ່າງໆ ເຊັ່ນ Astrolabe.',
            'ເຄມີສາດ: ຍາບິຣ ອິບນຸ ຮັຍຍານ ຖືກຍົກຍ້ອງວ່າເປັນ "ບິດາແຫ່ງເຄມີສາດ".',
          ],
        },
      ],
    },
  },
];

export default function HistorySection() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <section id="history" className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold text-foreground/90 mb-4">ປະຫວັດສາດອິດສະລາມ</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          ການເດີນທາງຂອງອິດສະລາມຜ່ານยุคสมัยต่างๆ, ຈາກຈຸດເລີ່ມຕົ້ນສູ່ຄວາມຈະເລີນรุ่งเรือง.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {historyItems.map((item, index) => (
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
