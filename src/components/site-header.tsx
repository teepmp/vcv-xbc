'use client';

import { Icons } from "@/components/icons";

export default function SiteHeader() {
  return (
    <header className="gradient-bg text-white shadow-lg">
      <div className="container mx-auto px-6 py-6 sm:py-8">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4 text-3xl sm:text-4xl font-bold md:text-5xl">
            <Icons.Mosque className="h-10 w-10 sm:h-12 sm:w-12" />
            <h1 className="font-headline">ສາສະໜາອິດສະລາມ</h1>
          </div>
          <p className="text-lg sm:text-xl opacity-90 md:text-2xl">ຄວາມຮູ້ພື້ນຖານສຳລັບຜູ້ທີ່ສົນໃຈ</p>
        </div>
      </div>
    </header>
  );
}
