"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[60px] md:mt-[70px]">
      {/* Orqa fondagi brend tillarang gradienti */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C5A358]/10 to-transparent z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[450px] md:min-h-[580px] py-8 md:py-14">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left">
            <div className="relative mb-6">
              <h1 className="text-[48px] md:text-[72px] font-[1000] italic leading-[0.9] tracking-tighter text-[#1A1A1A] uppercase">
                GEMO<span className="text-[#C5A358]">PLUS</span>
              </h1>
              <div className="mt-4 space-y-2">
                <h2 className="text-[28px] md:text-[44px] font-[900] leading-[1.1] text-[#1A1A1A] tracking-tight">
                  Gemorroyga qarshi <br />
                  <span className="text-[#C5A358]">
                    tabiiy va samarali
                  </span>{" "}
                  <br />
                  vosita!
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-2 max-w-[420px] mb-8 border-l-4 border-[#C5A358] pl-5">
              <p className="text-[#1A1A1A] text-[14px] md:text-[16px] leading-relaxed font-bold opacity-80">
                Shuvoq efir moyi asosidagi innovatsion formula noqulaylikni
                kamaytiradi va terining qulayligini saqlaydi. 100% tabiiy va
                xavfsiz.
              </p>
            </div>

            {/* Tugmalar guruhi */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-[2px] hover:bg-[#C5A358] shadow-2xl transition-all active:scale-95 text-center"
              >
                Hoziroq xarid qilish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-[2px] hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95 text-center"
              >
                Bepul konsultatsiya
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: MAHSULOT KOMPOZITSIYASI --- */}
          <div className="w-full md:w-[45%] relative mt-12 md:mt-0 flex justify-center items-center">
            <div className="relative w-full h-[380px] md:h-[520px]">
              {/* Asosiy fon bloki */}
              <div className="absolute inset-0 bg-[#C5A358]/5 rounded-[50px] rotate-3 -z-10" />

              {/* Mahsulot rasmi (Uploaded Image) */}
              <div className="relative w-full h-full flex justify-center items-center drop-shadow-[0_30px_50px_rgba(197,163,88,0.3)]">
                <Image
                  src="/ge.png" // Fayl nomini ge.png deb taxmin qildik
                  alt="Gemo Plus - Natural Treatment"
                  width={500}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Sifat belgisi (Swiss Quality/Natural) */}
              <div className="absolute -top-6 -right-2 md:-right-4 z-20 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white border-2 border-[#C5A358]/20 shadow-xl flex flex-col items-center justify-center -rotate-6">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#E31E24] rounded-lg flex items-center justify-center text-white font-bold mb-2">
                  +
                </div>
                <span className="text-[10px] md:text-[12px] font-black uppercase text-[#1A1A1A] tracking-tighter text-center leading-none px-2">
                  Swiss <br /> Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativ pastki chiziq */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A358]/20 to-transparent" />

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
