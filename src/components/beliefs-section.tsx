'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Feather, BookCopy, Users, Scale, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailsDialog from '@/components/details-dialog';

const beliefs = [
    { 
        icon: <span className="text-3xl">☝️</span>, 
        title: 'ຄວາມເຊື່ອໃນອັນລໍຮ໌', 
        details: {
            title: "ຄວາມເຊື່ອໃນອັນລໍຮ໌ (ເອກະເທວະນິຍົມ)",
            introduction: "ຫຼັກການສຳຄັນທີ່ສຸດໃນອິດສະລາມແມ່ນການເຊື່ອໃນຄວາມເປັນເອກະພາບຂອງພະເຈົ້າ. ອັນລໍຮ໌ເປັນຜູ້ສ້າງ, ຜູ້ດູແລ, ແລະ ຜູ້ຄຸ້ມຄອງທຸກສິ່ງຢ່າງ.",
            sections: [
                {
                    heading: "ຄຸນລັກສະນະຂອງອັນລໍຮ໌",
                    points: [
                        "ເປັນໜຶ່ງດຽວ, ບໍ່ມີສິ່ງໃດທຽບເທົ່າ.",
                        "ບໍ່ມີຈຸດເລີ່ມຕົ້ນ ແລະ ບໍ່ມີຈຸດສິ້ນສຸດ.",
                        "ຊົງໄດ້ຍິນ, ຊົງເຫັນ, ແລະ ຊົງຮອບຮູ້ທຸກສິ່ງ.",
                        "ຊົງເມດຕາ ແລະ ຊົງປານີ."
                    ]
                }
            ]
        }
    },
    { 
        icon: <Feather className="h-8 w-8 text-primary" />, 
        title: 'ຄວາມເຊື່ອໃນມະລາອິກະຮ໌', 
        details: {
            title: "ຄວາມເຊື່ອໃນມະລາອິກະຮ໌ (ທູດສະຫວັນ)",
            introduction: "ມຸດສະລິມເຊື່ອໃນສິ່ງມີຊີວິດທີ່ເບິ່ງບໍ່ເຫັນ ເອີ້ນວ່າ ມະລາອິກະຮ໌ ຫຼື ທູດສະຫວັນ, ຜູ້ທີ່ບໍ່ເຄີຍຝ່າຝືນຄຳສັ່ງຂອງອັນລໍຮ໌.",
            sections: [
                {
                    heading: "ໜ້າທີ່ຂອງມະລາອິກະຮ໌",
                    points: [
                        "ຍິບຣີລ: ຜູ້ນຳພະທຳ (ວະຮີ) ມາໃຫ້ບັນດານະບີ.",
                        "ມີກາອີລ: ຜູ້ຈັດການນ້ຳຝົນ ແລະ ປັດໄຈຍັງຊີບ.",
                        "ອິສຣໍຟີລ: ຜູ້ເປົ່າສຽງແກໃນວັນສິ້ນໂລກ.",
                        "ມະລັກອັນເມົາຕ໌: ຜູ້ຖອດຖອນວິນຍານ."
                    ]
                }
            ]
        }
    },
    { 
        icon: <BookCopy className="h-8 w-8 text-primary" />, 
        title: 'ຄວາມເຊື່ອໃນຄຳພີ', 
        details: {
            title: "ຄວາມເຊື່ອໃນຄຳພີຕ່າງໆ",
            introduction: "ອິດສະລາມສອນໃຫ້ເຊື່ອໃນຄຳພີທຸກສະບັບທີ່ອັນລໍຮ໌ໄດ້ປະທານລົງມາ ເພື່ອເປັນທາງນຳແກ່ມວນມະນຸດໃນແຕ່ລະຍຸກສະໄໝ.",
            sections: [
                {
                    heading: "ຄຳພີທີ່ຖືກກ່າວເຖິງ",
                    points: [
                        "ຄຳພີເຕົາຣອດ (Torah) ທີ່ປະທານໃຫ້ແກ່ນະບີມູຊາ.",
                        "ຄຳພີຊະບູຣ໌ (Psalms) ທີ່ປະທານໃຫ້ແກ່ນະບີດາວູດ.",
                        "ຄຳພີອິນຍີລ (Gospel) ທີ່ປະທານໃຫ້ແກ່ນະບີອີຊາ.",
                        "ອັນກຸຣອານ, ຄຳພີສຸດທ້າຍທີ່ປະທານໃຫ້ແກ່ນະບີມຸຮຳມັດ."
                    ]
                }
            ]
        }
    },
    { 
        icon: <Users className="h-8 w-8 text-primary" />, 
        title: 'ຄວາມເຊື່ອໃນເລາະຊູລ', 
        details: {
            title: "ຄວາມເຊື່ອໃນບັນດາເລາະຊູລ (ສາດາ)",
            introduction: "ມຸດສະລິມເຊື່ອໃນບັນດາຜູ້ສົ່ງສານ (ນະບີ ແລະ ເລາະຊູລ) ທີ່ອັນລໍຮ໌ໄດ້ສົ່ງມາເພື່ອສັ່ງສອນມະນຸດຊາດ.",
            sections: [
                {
                    heading: "ບັນດາເລາະຊູລທີ່ສຳຄັນ",
                    points: [
                        "ນະບີອາດຳ (ມະນຸດຄົນທຳອິດ).",
                        "ນະບີອິບຣໍຮີມ (ຜູ້ຖືກຍົກຍ້ອງວ່າເປັນເພື່ອນຂອງອັນລໍຮ໌).",
                        "ນະບີມູຊາ (ຜູ້ໄດ້ຮັບຄຳພີເຕົາຣອດ).",
                        "ນະບີອີຊາ (ພະເຍຊູ).",
                        "ນະບີມຸຮຳມັດ (ສາດາທ່ານສຸດທ້າຍ)."
                    ]
                }
            ]
        }
    },
    { 
        icon: <Scale className="h-8 w-8 text-primary" />, 
        title: 'ຄວາມເຊື່ອໃນວັນສຸດທ້າຍ', 
        details: {
            title: "ຄວາມເຊື່ອໃນວັນສິ້ນໂລກ ແລະ ການພິພາກສາ",
            introduction: "ມຸດສະລິມເຊື່ອວ່າໂລກນີ້ຈະມີວັນສິ້ນສຸດ ແລະ ທຸກຄົນຈະຖືກຟື້ນຄືນຊີບ ເພື່ອຮັບການສອບສວນ ແລະ ຕັດສິນການກະທຳຂອງຕົນ.",
            sections: [
                {
                    heading: "ເຫດການໃນວັນນັ້ນ",
                    points: [
                        "ທຸກຄົນຈະຖືກຟື້ນຄືນຊີບ.",
                        "ການກະທຳທັງດີ ແລະ ຊົ່ວຈະຖືກນຳມາສະແດງ.",
                        "ຜູ້ທີ່ເຮັດດີຈະໄດ້ຮັບລາງວັນເປັນສວນສະຫວັນ.",
                        "ຜູ້ທີ່ເຮັດຊົ່ວຈະໄດ້ຮັບການລົງໂທດ."
                    ]
                }
            ]
        }
    },
    { 
        icon: <Target className="h-8 w-8 text-primary" />, 
        title: 'ຄວາມເຊື່ອໃນເກາະດັຣ', 
        details: {
            title: "ຄວາມເຊື່ອໃນການກຳນົດສະພາວະການ (ເກາະດັຣ)",
            introduction: "ຄືການເຊື່ອວ່າທຸກສິ່ງທີ່ເກີດຂຶ້ນ, ທັງດີແລະບໍ່ດີ, ລ້ວນແລ້ວແຕ່ເປັນໄປຕາມການກຳນົດ ແລະ ຄວາມຮອບຮູ້ຂອງອັນລໍຮ໌.",
            sections: [
                {
                    heading: "ຄວາມເຂົ້າໃຈທີ່ຖືກຕ້ອງ",
                    points: [
                        "ອັນລໍຮ໌ຊົງຮອບຮູ້ທຸກສິ່ງທີ່ຈະເກີດຂຶ້ນ.",
                        "ທຸກຢ່າງເກີດຂຶ້ນຕາມຄວາມປະສົງຂອງພະອົງ.",
                        "ແຕ່ມະນຸດຍັງຄົງມີອິດສະຫຼະໃນການເລືອກກະທຳ ແລະ ຕ້ອງຮັບຜິດຊອບຕໍ່ການເລືອກນັ້ນ."
                    ]
                }
            ]
        }
    },
];

export default function BeliefsSection() {
    const [selectedItem, setSelectedItem] = useState<any>(null);

    return (
        <section id="beliefs" className="animate-fade-in">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold text-foreground/90 mb-4">ຫຼັກຄວາມເຊື່ອພື້ນຖານ</h2>
                <p className="text-lg text-muted-foreground">ສິ່ງທີ່ມຸດສະລິມເຊື່ອຖື ແລະ ຍຶດໝັ້ນ</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {beliefs.map((belief, index) => (
                    <Card key={index} className="bg-card rounded-xl shadow-lg card-hover flex flex-col justify-between">
                        <CardHeader className="p-6">
                            <CardTitle className="font-headline text-xl font-semibold mb-4 text-foreground/90 flex items-center gap-3">
                                {belief.icon}
                                {belief.title}
                            </CardTitle>
                        </CardHeader>
                        <CardFooter className="p-6 pt-0">
                            <Button variant="link" className="p-0 h-auto text-primary" onClick={() => belief.details && setSelectedItem(belief.details)}>
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
