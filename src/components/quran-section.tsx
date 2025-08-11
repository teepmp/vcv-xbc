'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DetailsDialog from '@/components/details-dialog';

const surahs = [
  {
    id: 'al-fatiha',
    number: 1,
    name: 'Al-Fatihah',
    translation: 'The Opener',
    arabicName: 'ٱلْفَاتِحَة',
    ayahs: 7,
    details: {
        title: "ຊູຣະເາະຮ໌ ອາລ-ຟາຕິຮະ (ບົດເປີດ)",
        introduction: "ຊູຣະເາະຮ໌ນີ້ຖືກເອີ້ນວ່າ 'ອຸມມຸນກິຕາບ' (ແມ່ບົດຂອງຄຳພີ) ເພາະມັນໄດ້ລວມເອົາຈຸດປະສົງຫຼັກຂອງກຸຣອານໄວ້ທັງໝົດ. ມັນເປັນການສົນທະນາລະຫວ່າງຜູ້ສ້າງ ແລະ ຜູ້ຖືກສ້າງ.",
        sections: [
          {
            heading: "ຫົວຂໍ້ຫຼັກຂອງຊູຣະເາະຮ໌",
            points: [
                "ການວິ້ງວອນຂໍການຊີ້ນຳຈາກອັນລໍຮ໌ ທີ່ອັນລໍຮ໌ພະອົງເອງໄດ້ສອນໄວ້ (The supplication to Allah for guidance taught by Allah Himself)"
            ]
          }
        ],
        verses: [
            { 
              arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", 
              lao: "ດ້ວຍພຣະນາມຂອງອັນລໍຮ໌ ຜູ້ຊົງເມດຕາ ຜູ້ຊົງປຣານີສະເໝີ.", 
              english: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
              explanation: {
                eng: "• One of the many practices taught by Islam is that its followers should begin their activities in the name of God.\n• First, one will be able to restrain oneself from many misdeed.\n• Second, this act will ensue that both his starting point and his mental orientation are sound.\n• Third, when a man begins something by pronouncing God's name, he will enjoy God's support and succour.",
                lao: "• ໜຶ່ງໃນຫຼັກປະຕິບັດທີ່ອິດສະລາມສອນແມ່ນໃຫ້ຜູ້ທີ່ນັບຖືເລີ່ມຕົ້ນກິດຈະກຳຕ່າງໆໃນພຣະນາມຂອງພຣະເຈົ້າ.\n• ປະການທຳອິດ, ຄົນເຮົາຈະສາມາດຢັບຢັ້ງຕົນເອງຈາກການກະທຳທີ່ບໍ່ດີຫຼາຍຢ່າງໄດ້.\n• ປະການທີສອງ, ການກະທຳນີ້ຈະຮັບປະກັນວ່າທັງຈຸດເລີ່ມຕົ້ນແລະແນວຄິດຂອງລາວຈະຖືກຕ້ອງ.\n• ປະການທີສາມ, ເມື່ອບຸກຄົນໃດເລີ່ມຕົ້ນບາງສິ່ງດ້ວຍການກ່າວພຣະນາມຂອງພຣະເຈົ້າ, ລາວຈະໄດ້ຮັບການສະໜັບສະໜູນແລະຊ່ວຍເຫຼືອຈາກພຣະເຈົ້າ."
              }
            },
            { 
              arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱlْعَـٰلَمِينَ", 
              lao: "ການສັນລະເສີນທັງໝົດເປັນຂອງອັນລໍຮ໌, ພຣະຜູ້ອະພິບານແຫ່ງສາກົນລະຈັກ.", 
              english: "All praise is for Allah, Lord of all worlds.",
              explanation: {
                eng: "",
                lao: "• ລັກສະນະຂອງຊູຣະເາະຮ໌ນີ້ຄືການວິ້ງວອນ (ດຸອາອ໌)\n• ການວິ້ງວອນເລີ່ມຕົ້ນດ້ວຍການສັນລະເສີນພຣະຜູ້ທີ່ພວກເຮົາວິ້ງວອນເຖິງ\n• ເປັນການສື່ວ່າເມື່ອเราวิงวอน เราควรทำอย่างสง่างามและมีมารยาท\n• ຜູ້ມີวัฒนธรรมไม่ควรกล่าวคำร้องขอออกมาตรง ๆ โดยไม่เกริ่นสรรเสริญ\n**ມາລະຍາດຂອງການວິ້ງວອນ**\n• ຄວນເລີ່ມຕົ້ນດ້ວຍການຍົກຍ້ອງພຣະອົງຢ່າງເຕັມໃຈ\n• ຄຳສັນລະເສີນເກີດຈາກການຕระหนักถึง ความดีเลิศ และ พระเมตตาอันไม่มีขอบเขต ของพระองค์\n**ເຫດຜົນທີ່ພວກເຮົາสรรเสริญผู้ใดผู้หนึ่ง**\n• ເພາະຄວາມดีเลิศนั้นสมควรได้รับการสรรเสริญ ไม่ว่าดีเลิศนั้นจะเกี่ยวข้องกับเราหรือไม่\n• ເພາະเขาเป็นผู้มีพระคุณต่อเรา ทำให้เกิดความรู้สึก ขอบคุณ\n**ພຣະເຈົ້າ (ອັນລໍຮ໌) ສົມຄວນໄດ້ຮັບการสรรเสริญทั้งสองเหตุผล**\n• ເພາະพระองค์มีความดีเลิศสูงสุด\n• ແລະເພາະพระองค์ประทานพรและความเมตตามากมายแก่เรา\n• **ຂໍ້ຄວາມที่กล่าวไว้ไม่ใช่เพียงว่า \"สรรเสริญแด่พระเจ้า\" แต่คือ**\n• \"สรรเสริญทั้งมวลแด่พระเจ้าเพียงองค์เดียว\"\n• ทุกความงดงามและความดีเลิศมีแหล่งกำเนิดมาจากพระองค์\n• ມະນຸດ มลาอิกะฮ์ เทพยดา ดวงดาว หรือสิ่งถูกสร้างใด ๆ ไม่ได้มีความดีเลิศโดยตนเอง\n• ຖ້າมีความดีเลิศ นั่นคือของประทานจากพระเจ้า\n• ดังนั้นผู้ที่เราควรเคารพภักดี รู้สึกขอบคุณ และนอบน้อมที่สุดคือ ผู้สร้างความดีเลิศ ไม่ใช่เพียงผู้ครอบครองมัน\n**ຄຳວ່າ Rabb (ร็อบบฺ) ในภาษาอาหรับมี 3 ความหมาย**\n• ພຣະຜູ້ເປັນເຈົ້າและนาย (Lord and Master)\n• ຜູ້หล่อเลี้ยง ผู้จัดหา ผู้คุ้มครอง และผู้ปกป้อง (Sustainer, Provider, Guardian)\n• ຜູ້ปกครอง ผู้ควบคุม และผู้กำหนดทิศทาง (Sovereign, Ruler, Controller)\n• ພຣະເຈົ້າ (ອັນລໍຮ໌) ເປັນ Rabb ของจักรวาลในทั้งสามความหมายนี้"
              }
            },
            { 
              arabic: "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", 
              lao: "ຜູ້ຊົງເມດຕາ ຜູ້ຊົງປຣານີສະເໝີ.", 
              english: "The Entirely Merciful, the Especially Merciful.",
              explanation: {
                eng: "• When we are deeply impressed by greatness, we often use superlatives to express admiration.\n• If one superlative is not enough, we use a second similar word to emphasize extraordinary excellence.\n• The name Ar-Rahman (The Most Merciful) already conveys intense mercy, but God’s mercy is so vast and infinite that one word alone is not enough.\n• Therefore, Ar-Rahim (The Most Compassionate) is added to further describe His boundless beneficence toward creation.",
                lao: "• ເມື່ອພວກເຮົາປະທັບໃຈໃນຄວາມຍິ່ງໃຫຍ່, ພວກເຮົາມັກຈະໃຊ້ຄຳສັບຂັ້ນສູງສຸດເພື່ອສະແດງຄວາມຊົມເຊີຍ.\n• ຫາກຄຳສັບຂັ້ນສູງສຸດຄຳດຽວບໍ່ພຽງພໍ, ພວກເຮົາກໍໃຊ້ຄຳສັບທີສອງທີ່ຄ້າຍຄືກັນເພື່ອເນັ້ນຢ້ຳເຖິງຄວາມດີເລີດອັນພິເສດ.\n• ຊື່ 'ອັຣ-ຣະຫ໌ມານ' (ຜູ້ຊົງເມດຕາທີ່ສຸດ) ໄດ້ສື່ເຖິງຄວາມເມດຕາອັນເຂັ້ມຂຸ້ນຢູ່ແລ້ວ, ແຕ່ຄວາມເມດຕາຂອງພຣະເຈົ້ານັ້ນກວ້າງໃຫຍ່ແລະບໍ່ມີທີ່ສິ້ນສຸດຈົນຄຳດຽວບໍ່ພຽງພໍ.\n• ດັ່ງນັ້ນ, ຈຶ່ງມີການເພີ່ມຄຳວ່າ 'ອັຣ-ຣະຮີມ' (ຜູ້ຊົງກະລຸນາທີ່ສຸດ) ເຂົ້າມາເພື່ອອະທິບາຍເພີ່ມເຕີມເຖິງພຣະຄຸນອັນໄຮ້ຂອບເຂດຂອງພຣະອົງຕໍ່ສິ່ງທີ່ພຣະອົງສ້າງ."
              }
            },
            { 
              arabic: "مَـٰلِكِ يَوْمِ ٱldَّينِ", 
              lao: "ຜູ້ຊົງອຳນາດແຫ່ງວັນຕອບແທນ.", 
              english: "Sovereign of the Day of Recompense.",
              explanation: {
                eng: "• Refers to the Day when all humanity will be gathered to give an account of their deeds.\n• On that Day, God alone will judge every person and decide their reward or punishment.\n• Following the mention of His mercy and compassion, this verse reminds us of His justice and absolute power.\n• No one will be able to resist His punishment or block His reward.\n• We should love Him for His mercy but also fear Him for His justice; our ultimate fate lies entirely with Him.",
                lao: "• ໝາຍເຖິງວັນທີ່ມະນຸດຊາດທັງໝົດຈະຖືກເຕົ້າໂຮມກັນເພື່ອລາຍງານການກະທຳຂອງຕົນ.\n• ໃນວັນນັ້ນ, ພະເຈົ້າອົງດຽວເທົ່ານັ້ນທີ່ຈະຕັດສິນທຸກຄົນ ແລະ ກໍານົດລາງວັນ ຫຼື ການລົງໂທດຂອງພວກເຂົາ.\n• ຫຼັງຈາກກ່າວເຖິງຄວາມເມດຕາແລະຄວາມກະລຸນາຂອງພະອົງ, ໂອງການນີ້ເຕືອນເຮົາເຖິງຄວາມຍຸດຕິທຳແລະອຳນາດອັນເດັດຂາດຂອງພະອົງ.\n• ບໍ່ມີໃຜສາມາດຕ້ານທານການລົງໂທດຂອງພະອົງ ຫຼື ຂັດຂວາງລາງວັນຂອງພະອົງໄດ້.\n• ພວກເຮົາຄວນຮັກພະອົງຍ້ອນຄວາມເມດຕາຂອງພະອົງ ແຕ່ກໍຕ້ອງຢຳເກງພະອົງຍ້ອນຄວາມຍຸດຕິທຳຂອງພະອົງ; ຊະຕາກຳສຸດທ້າຍຂອງພວກເຮົາຢູ່ໃນພະອົງທັງໝົດ."
              }
            },
            { 
              arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", 
              lao: "ສະເພາະພຣະອົງເທົ່ານັ້ນທີ່ພວກເຮົາເຄົາລົບສັກກາຣະ ແລະ ສະເພາະພຣະອົງເທົ່ານັ້ນທີ່ພວກເຮົາຂໍຄວາມຊ່ວຍເຫລືອ.", 
              english: "It is You alone we worship and You alone we ask for help.",
              explanation: {
                eng: "• The term 'ibadah' (worship) in Arabic is used for three concepts: Worship and Adoration, Obedience and Submission, Service and Subjection.\n• This verse affirms that we reserve these three attitudes for God alone. Our supplication, 'You alone do we worship', liberates us from the worship of all other things, from the obedience of others, and from the service and bondage of others.",
                lao: "• ຄຳວ່າ 'ອິບາດະຮ໌' (ການນະມັດສະການ) ໃນພາສາອາຣັບ ຖືກໃຊ້ສຳລັບສາມແນວຄິດ: ການນະມັດສະການ ແລະ ການບູຊາ, ການເຊື່ອຟັງ ແລະ ການຍອມຈຳນົນ, ການຮັບໃຊ້ ແລະ ການຢູ່ພາຍໃຕ້ອຳນາດ.\n• ໂອງການນີ້ຢືນຢັນວ່າພວກເຮົາສະຫງວນທັດສະນະຄະຕິທັງສາມນີ້ໄວ້ສຳລັບພຣະເຈົ້າອົງດຽວ. ການວິ້ງວອນຂອງພວກເຮົາທີ່ວ່າ 'ສະເພາະພຣະອົງເທົ່ານັ້ນທີ່ພວກເຮົາເຄົາລົບສັກກາຣະ' ປົດປ່ອຍພວກເຮົາຈາກການນະມັດສະການສິ່ງອື່ນທັງໝົດ, ຈາກການເຊື່ອຟັງຄົນອື່ນ, ແລະ ຈາກການຮັບໃຊ້ແລະການເປັນທາດຂອງຄົນອື່ນ."
              }
            },
            { 
              arabic: "ٱهْدِنَا ٱlصِّرَٰطَ ٱlْمُsْتَقِيمَ", 
              lao: "ຂໍພຣະອົງຊົງນຳພາພວກເຮົາສູ່ແນວທາງທີ່ທ່ຽງຕົງ.", 
              english: "Guide us to the straight path.",
              explanation: {
                eng: "• We beseech God to guide us in all walks of life, to show us the right way in thought, and to lead us to the right course of action.\n• This is the central theme of the Qur'an. This prayer teaches us to ask for something of the highest quality: guidance to the 'Straight Path'.\n• By asking for guidance to the 'Straight Path', we are implicitly asking to be guided away from all other paths that deviate from it.",
                lao: "• ພວກເຮົາວິ້ງວອນຂໍໃຫ້ພຣະເຈົ້າຊົງນຳພາພວກເຮົາໃນທຸກດ້ານຂອງຊີວິດ, ໃຫ້ພຣະອົງຊົງສະແດງທາງທີ່ຖືກຕ້ອງໃນຄວາມຄິດ, ແລະ ນຳພາພວກເຮົາໄປສູ່ການກະທຳທີ່ຖືກຕ້ອງ.\n• ນີ້ຄືຫົວໃຈສຳຄັນຂອງກຸຣອານ. ຄຳວິ້ງວອນນີ້ສອນໃຫ້ພວກເຮົາຂໍສິ່ງທີ່ມີຄຸນຄ່າສູງສຸດ: ການຊີ້ທາງສູ່ 'ແນວທາງທີ່ທ່ຽງຕົງ'.\n• ໂດຍການຂໍການຊີ້ທາງສູ່ 'ແນວທາງທີ່ທ່ຽງຕົງ', ພວກເຮົາຍັງຂໍໂດຍທາງອ້ອມໃຫ້ຖືກນຳພາອອກຈາກທຸກເສັ້ນທາງທີ່ເບี่ยงเบนໄປຈາກມັນ."
              }
            },
            { 
              arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱlْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱlضَّآلِّينَ", 
              lao: "ແນວທາງຂອງບັນດາຜູ້ທີ່ພຣະອົງໄດ້ຊົງໂປດປານແກ່ພວກເຂົາ, ບໍ່ແມ່ນແນວທາງຂອງພວກທີ່ຖືກໂກດກິ້ວ ແລະ ບໍ່ແມ່ນແນວທາງຂອງພວກທີ່ຫຼົງຜິດ.", 
              english: "The path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray.",
              explanation: {
                eng: "• The 'Straight Path' is further defined as the path of those on whom God has bestowed His blessings. This clarifies that the 'Straight Path' is not a new invention but the same path followed by righteous individuals of the past, like prophets and saints.\n• **'Those who have evoked Your anger'** refers to those who, despite knowing the truth, deliberately reject it. A prime example given in the Qur'an is the Children of Israel.\n• **'Those who are astray'** refers to those who, out of ignorance or lack of thought, deviate from the right path. A primary example is the Christians, who, out of exaggerated reverence for a prophet, elevated him to the status of divinity.",
                lao: "• 'ແນວທາງທີ່ທ່ຽງຕົງ' ຖືກນິຍາມຕື່ມອີກວ່າເປັນເສັ້ນທາງຂອງບັນດາຜູ້ທີ່ພຣະເຈົ້າໄດ້ປະທານຄວາມໂປດປານຂອງພຣະອົງ. ນີ້ເປັນການຊີ້ແຈງວ່າ 'ແນວທາງທີ່ທ່ຽງຕົງ' ບໍ່ແມ່ນສິ່ງທີ່ຖືກປະດິດຂຶ້ນໃໝ່, ແຕ່ເປັນເສັ້ນທາງດຽວກັນກັບທີ່ບັນດາຜູ້ຊົງທຳໃນອະດີດໄດ້ປະຕິບັດຕາມ, ເຊັ່ນບັນດານະບີແລະຜູ້ບໍລິສຸດ.\n• **'ພວກທີ່ຖືກໂກດກິ້ວ'** ໝາຍເຖິງຜູ້ທີ່ຮູ້ຄວາມຈິງແຕ່ກໍ່ເຈດຕະນາປະຕິເສດມັນ. ຕົວຢ່າງສຳຄັນທີ່ຖືກກ່າວເຖິງໃນກຸຣອານຄືວົງວານອິສຣໍອີລ.\n• **'ພວກທີ່ຫຼົງຜິດ'** ໝາຍເຖິງຜູ້ທີ່ເບี่ยงเบนໄປຈາກທາງທີ່ຖືກຕ້ອງຍ້ອນຄວາມບໍ່ຮູ້ຫຼືຂາດການໄຕ່ຕອງ. ຕົວຢ່າງຫຼັກຄືຊາວຄຣິສຕຽນ, ຜູ້ທີ່ຍົກຍ້ອງສາດສະດາຂອງພວກເຂົາຈົນເກີນຂອບເຂດ ແລະ ຍົກໃຫ້ເພິ່ນຢູ່ໃນສະຖານະຂອງພະເຈົ້າ."
              }
            }
        ]
    }
  },
  { id: 'al-baqarah', number: 2, name: 'Al-Baqarah', translation: 'The Cow', arabicName: 'ٱلْبَقَرَة', ayahs: 286, details: null },
];

interface SelectedItem {
  details: any;
  surahNumber: number;
}

export default function QuranSection() {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const handleCardClick = (surah: any) => {
    if (surah.details) {
      setSelectedItem({ details: surah.details, surahNumber: surah.number });
    }
  };

  return (
    <section id="quran" className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold text-foreground/90 mb-4">ອັນກຸຣອານ</h2>
        <p className="text-lg text-muted-foreground">ຄຳພີສັກສິດຂອງສາສະໜາອິດສະລາມ</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {surahs.map((surah) => (
          <Card 
            key={surah.id} 
            className={`bg-card rounded-lg shadow-md transition-all duration-300 ${surah.details ? 'cursor-pointer hover:shadow-xl hover:border-primary/50' : 'cursor-default'}`}
            onClick={() => handleCardClick(surah)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center -rotate-45 transform">
                      <span className="text-foreground font-bold text-lg rotate-45 transform">{surah.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-headline text-md font-bold text-foreground/90">{surah.name}</h3>
                  <p className="text-sm text-muted-foreground">{surah.translation}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-arabic text-foreground/90">{surah.arabicName}</p>
                <p className="text-xs text-muted-foreground">{surah.ayahs} Ayahs</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

       <DetailsDialog
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        details={selectedItem?.details}
        surahNumber={selectedItem?.surahNumber}
      />
    </section>
  );
}
