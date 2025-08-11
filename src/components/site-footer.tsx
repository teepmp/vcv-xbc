import { Icons } from "./icons";
import { MapPin } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="gradient-bg text-white py-12 mt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
            <h4 className="font-headline text-xl font-semibold mb-3 flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6" />
                ທີ່ຕັ້ງມັດສະຍິດ
            </h4>
            <a 
              href="https://maps.app.goo.gl/84NssU3shBAUsc6L6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 underline transition-opacity"
            >
                ເປີດແຜນທີ່
            </a>
        </div>
        
        <div className="border-t border-white/20 pt-8">
            <p className="opacity-75">
                ເວັບໄຊທ໌ນີ້ຈັດທຳຂຶ້ນເພື່ອໃຫ້ຄວາມຮູ້ພື້ນຖານກ່ຽວກັບສາສະໜາອິດສະລາມ
            </p>
            <p className="opacity-75 mt-2">
                ຫາກຕ້ອງການຂໍ້ມູນເພີ່ມເຕີມ, ກະລຸນາປຶກສາຜູ້ຮູ້ໃນຊຸມຊົນມຸດສະລິມ
            </p>
        </div>
      </div>
    </footer>
  );
}
