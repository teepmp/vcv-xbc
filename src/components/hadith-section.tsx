'use client';

import { useState } from 'react';
import { BookCheck, FileText } from 'lucide-react';
import HadithListDialog from '@/components/hadith-list-dialog';

const hadithInfo = {
    id: 'hadith-info',
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'ຫະດີຊ',
    description: 'ບັນທຶກຄຳເວົ້າ, ການກະທຳ, ແລະ ການຍອມຮັບຂອງສາດສະດາມຸຮຳມັດ ﷺ.',
};

const nawawiHadiths = [
    { 
        id: 1, 
        title_en: "Actions are by intentions", 
        title_lo: "ການກະທຳແມ່ນຂຶ້ນກັບເຈດຕະນາ",
        arabic: `عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ قَالَ:
سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ: " إنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوْ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إلَى مَا هَاجَرَ إلَيْهِ".
رَوَاهُ إِمَامَا الْمُحَدِّثِينَ أَبُو عَبْدِ اللهِ مُحَمَّدُ بنُ إِسْمَاعِيل بن إِبْرَاهِيم بن الْمُغِيرَة بن بَرْدِزبَه الْبُخَارِيُّ الْجُعْفِيُّ [رقم:1]، وَأَبُو الْحُسَيْنِ مُسْلِمٌ بنُ الْحَجَّاج بن مُسْلِم الْقُشَيْرِيُّ النَّيْسَابُورِيُّ [رقم:1907] رَضِيَ اللهُ عَنْهُمَا فِي "صَحِيحَيْهِمَا" اللذَينِ هُمَا أَصَحُّ الْكُتُبِ الْمُصَنَّفَةِ.`,
        translation_en: `It is narrated on the authority of Amir al-Mu'minin (Leader of the Believers), Abu Hafs 'Umar bin al-Khattab (may Allah be pleased with him), who said: I heard the Messenger of Allah (peace be upon him), say "Actions are according to intentions, and everyone will get what was intended. Whoever migrates with an intention for Allah and His messenger, the migration will be for the sake of Allah and his Messenger. And whoever migrates for worldly gain or to marry a woman, then his migration will be for the sake of whatever he migrated for." Related by Bukhari & Muslim`,
        translation_lo: `ລາຍງານຈາກ ອະມີຣຸນມຸஃມິນີນ (ຜູ້ນຳຂອງຜູ້ສັດທາ), ອະບູ ຮັຟສ໌ ອຸມາຣ ອິບນຸລ ຄັຕຕອບ (ຂໍອັນລໍຮ໌ຊົງພໍໃຈເຖີດ), ເພິ່ນກ່າວວ່າ: ຂ້າພະເຈົ້າໄດ້ຍິນສາດສະດາທູດຂອງອັນລໍຮ໌ (ຂໍຄວາມສັນຕິຈົ່ງມີແດ່ເພິ່ນ) ກ່າວວ່າ: "ແທ້ຈິງການກະທຳທັງຫຼາຍແມ່ນຂຶ້ນກັບເຈດຕະນາ, ແລະ ແທ້ຈິງທຸກຄົນຈະໄດ້ຮັບຕາມທີ່ລາວໄດ້ຕັ້ງໃຈໄວ້. ດັ່ງນັ້ນ, ຜູ້ໃດທີ່ການອົບພະຍົບຂອງລາວເປັນໄປເພື່ອອັນລໍຮ໌ແລະສາດສະດາທູດຂອງພະອົງ, ການອົບພະຍົບຂອງລາວກໍ່ຈະເປັນໄປເພື່ອອັນລໍຮ໌ແລະສາດສະດາທູດຂອງພະອົງ. ແລະ ຜູ້ໃດທີ່ການອົບພະຍົບຂອງລາວເປັນໄປເພື່ອຜົນປະໂຫຍດທາງໂລກທີ່ລາວຈະໄດ້ຮັບ ຫຼື ເພື່ອແມ່ຍິງທີ່ລາວຈະແຕ່ງງານ, ການອົບພະຍົບຂອງລາວກໍ່ຈະເປັນໄປຕາມທີ່ລາວໄດ້ອົບພະຍົບໄປເພື່ອນັ້ນ." (ບັນທຶກໂດຍ ບຸຄໍຣີ ແລະ ມຸດສະລິມ)`
    },
    { id: 2, title_en: "Islam, Iman, Ihsan", title_lo: "ອິດສະລາມ, ອີມານ, ອິຫ໌ຊານ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 3, title_en: "Islam is Built Upon Five", title_lo: "ອິດສະລາມຕັ້ງຢູ່ເທິງ 5 ປະການ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 4, title_en: "Deeds are by Their Final Actions", title_lo: "ການກະທຳແມ່ນຂຶ້ນກັບການກະທຳສຸດທ້າຍ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 5, title_en: "Rejection of Evil Deeds and Innovations", title_lo: "ການປະຕິເສດການກະທຳທີ່ຊົ່ວຮ້າຍແລະອະວະກຳ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 6, title_en: "Protecting the Heart", title_lo: "ການປົກປ້ອງຫົວໃຈ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 7, title_en: "The Religion is Naseehah (Sincere Advice)", title_lo: "ສາສະໜາຄືການໃຫ້ຄຳແນະນຳທີ່ຈິງໃຈ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 8, title_en: "The Sanctity of a Muslim", title_lo: "ຄວາມສັກສິດຂອງມຸດສະລິມ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 9, title_en: "Obligations are According to Ability", title_lo: "ໜ້າທີ່ແມ່ນຂຶ້ນກັບຄວາມສາມາດ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 10, title_en: "Restricting Oneself to the Permissible", title_lo: "ການຈຳກັດຕົນເອງໃນສິ່ງທີ່ອະນຸຍາດ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 11, title_en: "Being Cautious of the Doubtful", title_lo: "ການລະວັງສິ່ງທີ່ໜ້າສົງໄສ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 12, title_en: "Leaving that Which Does Not Concern You", title_lo: "ການລະຖິ້ມສິ່ງທີ່ບໍ່ກ່ຽວຂ້ອງກັບທ່ານ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 13, title_en: "Love for Your Brother What You Love for Yourself", title_lo: "ຈົ່ງຮັກໃຫ້ອ້າຍນ້ອງຂອງທ່ານໃນສິ່ງທີ່ທ່ານຮັກໃຫ້ຕົວເອງ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 14, title_en: "Prohibition of Blood of a Muslim", title_lo: "ການຫ້າມການຫຼັ່ງເລືອດຂອງມຸດສະລິມ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 15, title_en: "Islamic Manners", title_lo: "ມາລະຍາດອິດສະລາມ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 16, title_en: "The Forbiddance of Anger", title_lo: "ການຫ້າມຄວາມໂກດແຄ້ນ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 17, title_en: "Prescription of Ihsan (Perfection)", title_lo: "ການກຳນົດອິຫ໌ຊານ (ຄວາມສົມບູນແບບ)", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 18, title_en: "Follow Up a Bad Deed with a Good Deed", title_lo: "ຈົ່ງເຮັດຄວາມດີຕາມຫຼັງຄວາມຊົ່ວ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 19, title_en: "Be Mindful of Allah and Allah will Protect You", title_lo: "ຈົ່ງລະນຶກເຖິງອັນລໍຮ໌ ແລະ ອັນລໍຮ໌ຈະປົກປ້ອງທ່ານ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 20, title_en: "Modesty is from Faith", title_lo: "ຄວາມອາຍເປັນສ່ວນໜຶ່ງຂອງການສັດທາ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 21, title_en: "Say 'I believe in Allah' and then be Steadfast", title_lo: "ຈົ່ງກ່າວວ່າ 'ຂ້ອຍເຊື່ອໃນອັນລໍຮ໌' ແລະ ຈາກນັ້ນຈົ່ງຢຶດໝັ້ນ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 22, title_en: "Entering Paradise", title_lo: "ການເຂົ້າສູ່ສວນສະຫວັນ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 23, title_en: "Hastening to Do Good", title_lo: "ການຮີບຮ້ອນເຮັດຄວາມດີ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 24, title_en: "The Forbiddance of Oppression", title_lo: "ການຫ້າມການກົດຂີ່ຂົ່ມເຫັງ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 25, title_en: "The Value of Charity", title_lo: "ຄຸນຄ່າຂອງການບໍລິຈາກ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 26, title_en: "What is Sadaqa?", title_lo: "ສໍ່ດໍ່ເກາະຮ໌ແມ່ນຫຍັງ?", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 27, title_en: "Righteousness is in Good Character", title_lo: "ຄວາມຊອບທຳຢູ່ໃນຄຸນລັກສະນະທີ່ດີ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 28, title_en: "The Obligation of Following the Sunnah", title_lo: "ພັນທະໃນການປະຕິບັດຕາມຊຸນນະຮ໌", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 29, title_en: "Means of Goodness", title_lo: "ແນວທາງຂອງຄວາມດີ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 30, title_en: "Do Not Neglect the Religious Obligations", title_lo: "ຢ່າລະເລີຍພັນທະທາງສາສະໜາ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 31, title_en: "The Reality of Zuhd (Asceticism)", title_lo: "ຄວາມຈິງຂອງການຖືສັນໂດດ (ຊຸຮດ໌)", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 32, title_en: "No Harming nor Reciprocating Harm", title_lo: "ບໍ່ມີການທຳຮ້າຍ ຫຼື ການຕອບແທນຄວາມເສຍຫາຍ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 33, title_en: "The Onus of Proof is on the Claimant and The Taking of an Oath is on the Denier", title_lo: "ພາລະການພິສູດແມ່ນຢູ່ກັບຜູ້ກ່າວອ້າງ ແລະ ການສາບານແມ່ນຢູ່ກັບຜູ້ປະຕິເສດ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 34, title_en: "Forbidding Evil with the Hands, Speech, and Heart", title_lo: "ການຫ້າມຄວາມຊົ່ວດ້ວຍມື, ຄຳເວົ້າ, ແລະ ຫົວໃຈ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 35, title_en: "Brotherhood in Islam", title_lo: "ຄວາມເປັນອ້າຍນ້ອງໃນອິດສະລາມ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 36, title_en: "The Virtue of Gathering for the Remembrance of Allah", title_lo: "ຄຸນຄວາມດີຂອງການເຕົ້າໂຮມເພື່ອລະນຶກເຖິງອັນລໍຮ໌", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 37, title_en: "The Grace of Allah and His Mercy", title_lo: "ຄວາມໂປດປານແລະຄວາມເມດຕາຂອງອັນລໍຮ໌", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 38, title_en: "Attaining Nearness to Allah and His Love", title_lo: "ການເຂົ້າໃກ້ອັນລໍຮ໌ແລະຄວາມຮັກຂອງພຣະອົງ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 39, title_en: "Leniency for the One who Errs, the One who Forgets, and the One who is Forced", title_lo: "ການຜ່ອນຜັນສຳລັບຜູ້ທີ່ຜິດພາດ, ຜູ້ທີ່ລືມ, ແລະ ຜູ້ທີ່ຖືກບັງຄັບ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 40, title_en: "Be in This World As a Traveler", title_lo: "ຈົ່ງຢູ່ໃນໂລກນີ້ເໝືອນນັກເດີນທາງ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 41, title_en: "The World is the Means for Attaining the Hereafter", title_lo: "ໂລກນີ້ເປັນວິທີການເພື່ອບັນລຸໂລກໜ້າ", arabic: "...", translation_en: "...", translation_lo: "..." },
    { id: 42, title_en: "The Expanse of the Forgiveness of Allah", title_lo: "ຄວາມກວ້າງຂວາງຂອງການໃຫ້ອະໄພຂອງອັນລໍຮ໌", arabic: "...", translation_en: "...", translation_lo: "..." },
];

export default function HadithSection() {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <section id="hadith" className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold text-foreground/90 mb-4">ຫະດີຊ</h2>
        <p className="text-lg text-muted-foreground">ແບບຢ່າງ ແລະ ຄຳສອນຂອງສາດສະດາມຸຮຳມັດ ﷺ</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-card p-6 rounded-xl shadow-lg border">
            <div className="flex items-center gap-4">
                {hadithInfo.icon}
                <div>
                    <h3 className="font-headline text-xl font-semibold text-foreground/90">{hadithInfo.title}</h3>
                </div>
            </div>
        </div>

        <div 
          className="bg-card p-6 rounded-xl shadow-lg border card-hover cursor-pointer"
          onClick={() => setIsListOpen(true)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <BookCheck className="h-8 w-8 text-primary"/>
                    <div>
                        <h3 className="font-headline text-xl font-semibold text-foreground/90">40 ຫະດີຊ ນາວາວີ</h3>
                        <p className="text-muted-foreground">ເປີດອ່ານລວມຫະດີຊ</p>
                    </div>
                </div>
                 <span className="text-sm text-primary font-semibold">ອ່ານເພີ່ມເຕີມ</span>
            </div>
        </div>
      </div>
      
      <HadithListDialog
        isOpen={isListOpen}
        onClose={() => setIsListOpen(false)}
        hadiths={nawawiHadiths}
      />
    </section>
  );
}
