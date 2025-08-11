'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Utensils, Droplets, Users, CircleDollarSign, HelpingHand, BookOpen, ArrowRight, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailsDialog from '@/components/details-dialog';

const articles = [
  {
    id: 'purpose-of-life',
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'ຈຸດປະສົງຂອງຊີວິດ',
    details: {
        title: "ຈຸດປະສົງຂອງຊີວິດ",
        introduction: "ໃນທັດສະນະຂອງອິດສະລາມ, ຈຸດປະສົງຂອງການສ້າງມະນຸດແລະຍິນຄືເພື່ອການເຄົາລົບສັກກະລະ (ອິບາດະຮ໌) ຕໍ່ອັນລໍຮ໌ພຽງອົງດຽວ.",
        sections: [
            {
                heading: "ການຮູ້ຈັກພະເຈົ້າ",
                points: [
                    "ການດຳລົງຊີວິດໂດຍຮູ້ວ່າອັນລໍຮ໌ເປັນຜູ້ສ້າງແລະຜູ້ດູແລ, ແລະພະຍາຍາມເຮັດໃຫ້ພະອົງພໍໃຈ."
                ]
            },
            {
                heading: "ການເປັນຕົວແທນເທິງໜ້າແຜ່ນດິນ",
                points: [
                    "ມະນຸດຖືກສ້າງມາເພື່ອເປັນຜູ້ຄຸ້ມຄອງແລະພັດທະນາໂລກນີ້ໃຫ້ດີຂຶ້ນຕາມແນວທາງຂອງພະເຈົ້າ."
                ]
            },
            {
                heading: "ການທົດສອບ",
                points: [
                    "ຊີວິດໃນໂລກນີ້ເປັນສະໜາມສອບເສັງ, ເພື່ອທົດສອບວ່າໃຜຈະເປັນผู้ที่มีการงานที่ดีที่สุด."
                ]
            }
        ]
    }
  },
  {
    id: 'life-after-death',
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'ຊີວິດຫຼັງຄວາມຕາຍ',
    details: {
        title: "ຊີວິດຫຼັງຄວາມຕາຍ (ອາຄິເລາະຮ໌)",
        introduction: "ອິດສະລາມສອນວ່າຊີວິດໃນໂລກນີ້ເປັນພຽງການເດີນທາງຊົ່ວຄາວ, ແລະ ຊີວິດທີ່ແທ້ຈິງແມ່ນຊີວິດຫຼັງຄວາມຕາຍ.",
        sections: [
            {
                heading: "ຂັ້ນຕອນຕ່າງໆ",
                points: [
                    "ຄວາມຕາຍ: ການແຍກອອກຂອງວິນຍານຈາກຮ່າງກາຍ.",
                    "ໃນຂຸມຝັງສົບ (บัรซัค): ຊ່ວງເວລາລໍຖ້າວັນພິພາກສາ.",
                    "ວັນພິພາກສາ (เยามุลกิยามะฮ์): ທຸກຄົນຈະຖືກຟື້ນຄືນຊີບເພື່ອຮັບການສອບສວນ.",
                    "ສະຫວັນ ແລະ ນາລົກ: ຜົນຕອບແທນສຸດທ້າຍສຳລັບການກະທຳໃນໂລກນີ້."
                ]
            }
        ]
    }
  },
  {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: 'ອາຫານຮາລານ',
      details: {
          title: "ອາຫານຮາລານ (Halal Food)",
          introduction: "ຮາລານ ໝາຍເຖິງສິ່ງທີ່ຖືກອະນຸມັດຕາມຫຼັກການອິດສະລາມ. ອາຫານຮາລານບໍ່ພຽງແຕ່ກ່ຽວກັບປະເພດຂອງອາຫານ, ແຕ່ຍັງລວມເຖິງຂະບວນການໄດ້ມາ ແລະ ການກະກຽມ.",
          sections: [
              {
                  heading: "ສິ່ງທີ່ຕ້ອງຫ້າມ (ຮະຣອມ)",
                  points: [
                      "ຊີ້ນໝູ ແລະ ຜະລິດຕະພັນຈາກໝູ.",
                      "ສັດທີ່ຕາຍເອງ.",
                      "ເລືອດ.",
                      "ສັດທີ່ຖືກເຊືອດໃນພະນາມອື່ນນອກຈາກອັນລໍຮ໌.",
                      "ເຄື່ອງດື່ມມຶນເມົາ ແລະ ສານເສບຕິດທຸກຊະນິດ."
                  ]
              }
          ]
      }
  },
  {
      icon: <Droplets className="h-8 w-8 text-primary" />,
      title: 'ຄວາມສະອາດ',
      details: {
          title: "ຄວາມສະອາດ (الطهارة)",
          introduction: "ອິດສະລາມໃຫ້ຄວາມສຳຄັນກັບຄວາມສະອາດເປັນຢ່າງສູງ, ທັງຄວາມສະອາດທາງຮ່າງກາຍ ແລະ ຈິດໃຈ. ຖືວ່າ 'ຄວາມສະອາດເປັນເຄິ່ງໜຶ່ງຂອງການສັດທາ'.",
          sections: [
              {
                  heading: "ປະເພດຂອງຄວາມສະອາດ",
                  points: [
                      "ການອາບນ້ຳລະຫັດ (วุฎูอ์) ກ່ອນການລະຫັດ.",
                      "ການອາບນ້ຳທົ່ວຮ່າງກາຍ (ฆุสล์) ເມື່ອມີເຫດຈຳເປັນ.",
                      "ການຮັກສາຄວາມສະອາດຂອງເຄື່ອງນຸ່ງ ແລະ ສະຖານທີ່."
                  ]
              }
          ]
      }
  },
  {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'ຄອບຄົວ',
      details: {
          title: "ລະບົບຄອບຄົວໃນອິດສະລາມ",
          introduction: "ຄອບຄົວແມ່ນສະຖາບັນພື້ນຖານທີ່ສຳຄັນທີ່ສຸດໃນສັງຄົມມຸດສະລິມ. ອິດສະລາມໄດ້ວາງແນວທາງໃນການສ້າງຄອບຄົວທີ່ອົບອຸ່ນ ແລະ ໝັ້ນຄົງ.",
          sections: [
              {
                  heading: "ໜ້າທີ່ຂອງສະມາຊິກໃນຄອບຄົວ",
                  points: [
                      "ສາມີ-ພັນລະຍາ: ຕ້ອງໃຫ້ກຽດ, ຮັກແພງ, ແລະ ຊ່ວຍເຫຼືອເຊິ່ງກັນและກັນ.",
                      "ພໍ່ແມ່: ມີໜ້າທີ່ລ້ຽງດູ ແລະ ສັ່ງສອນລູກໃຫ້ເປັນຄົນດີ.",
                      "ລູກ: ມີໜ້າທີ່ເຊື່ອຟັງ ແລະ ເຮັດດີຕໍ່ພໍ່ແມ່."
                  ]
              }
          ]
      }
  },
  {
      icon: <CircleDollarSign className="h-8 w-8 text-primary" />,
      title: 'ການເງິນ',
      details: {
          title: "ຫຼັກການທາງການເງິນໃນອິດສະລາມ",
          introduction: "ອິດສະລາມສົ່ງເສີມການເຮັດທຸລະກຳທີ່ໂປ່ງໃສ ແລະ ຍຸດຕິທຳ, ໂດຍມີເປົ້າໝາຍເພື່ອສ້າງຄວາມຈະເລີນ ແລະ ສະຫວັດດີການໃນສັງຄົມ.",
          sections: [
              {
                  heading: "ຂໍ້ຫ້າມທີ່ສຳຄັນ",
                  points: [
                      "ດອກເບ້ຍ (الربا): ຫ້າມຄິດດອກເບ້ຍຈາກການໃຫ້ກູ້ຢືມ.",
                      "ການພະນັນ (الميسر): ຖືເປັນການໄດ້ມາເຊິ່ງຊັບສິນໂດຍບໍ່ຊອບທຳ.",
                      "ຄວາມບໍ່ແນ່ນອນ (الغرر): ຫ້າມເຮັດທຸລະກຳທີ່ມີຄວາມສ່ຽງ ຫຼື ບໍ່ຊັດເຈນສູງ."
                  ]
              }
          ]
      }
  },
  {
      icon: <HelpingHand className="h-8 w-8 text-primary" />,
      title: 'ການຊ່ວຍເຫຼືອ',
      details: {
          title: "ການຊ່ວຍເຫຼືອສັງຄົມ",
          introduction: "ອິດສະລາມສອນໃຫ້ມຸດສະລິມເປັນผู้ให้ ແລະມີຄວາມເອື້ອເຟື້ອເພື່ອແຜ່ຕໍ່ເພື່ອນມະນຸດ, ໂດຍບໍ່ຈຳກັດສາສະໜາ ຫຼື ເຊື້ອຊາດ.",
          sections: [
              {
                  heading: "ຮູບແບບການຊ່ວຍເຫຼືອ",
                  points: [
                      "ຊະກາດ: ການບໍລິຈາກພາກບັງຄັບ.",
                      "ສໍ່ດໍ່ເກາະฮ์: ການບໍລິຈາກດ້ວຍຄວາມສະໝັກໃຈ.",
                      "ການຊ່ວຍເຫຼືອເພື່ອນບ້ານ, ລ້ຽງອາຫານຄົນຂັດສົນ, ແລະ ການໃຫ້ອະໄພ."
                  ]
              }
          ]
      }
  },
  {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'ການສຶກສາ',
      details: {
          title: "ການສະແຫວງຫາຄວາມຮູ້",
          introduction: "ອິດສະລາມຖືວ່າການສະແຫວງຫາຄວາມຮູ້ເປັນໜ້າທີ່ຂອງມຸດສະລິມທຸກຄົນ, ທັງຊາຍແລະຍິງ, ຕັ້ງແຕ່ເກີດຈົນຕາຍ.",
          sections: [
              {
                  heading: "ຄວາມສຳຄັນຂອງຄວາມຮູ້",
                  points: [
                      "ໂອງການທຳອິດທີ່ຖືກປະທານລົງມາແມ່ນ 'ຈົ່ງອ່ານ!'.",
                      "ສົ່ງເສີມໃຫ້ສຶກສາທັງຄວາມຮູ້ທາງສາສະໜາ ແລະ ຄວາມຮູ້ທາງໂລກ.",
                      "ผู้ที่มีความรู้จะได้รับการยกย่องให้มีเกียรติ."
                  ]
              }
          ]
      }
  },
];

export default function ArticlesSection() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <section id="articles" className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold text-foreground/90 mb-4">ບົດຄວາມ ແລະ ວິຖີຊີວິດ</h2>
        <p className="text-lg text-muted-foreground">ແນວຄິດ ແລະ ການປະຕິບັດໃນຊີວິດປະຈຳວັນຂອງມຸດສະລິມ</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {articles.map((item, index) => (
          <Card key={index} className="bg-card rounded-xl shadow-lg card-hover flex flex-col justify-between">
            <CardHeader className="p-6">
              <div className="mb-4">{item.icon}</div>
              <CardTitle className="font-headline text-lg font-semibold text-foreground/90">{item.title}</CardTitle>
            </CardHeader>
            <CardFooter className="p-6 pt-0">
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
