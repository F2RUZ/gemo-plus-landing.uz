"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "GemoPlus qanday muammolarda yordam beradi?",
    answer: "GemoPlus shuvoq efir moyi va shifobaxsh o'tlar asosida yaratilgan bo'lib, gemorroyning barcha bosqichlaridagi og'riq, qichishish va yallig'lanishni samarali bartaraf etadi.",
  },
  {
    question: "Mahsulotni qo'llash tartibi qanday?",
    answer: "GemoPlus muammoli sohaga kuniga 1-2 mahal, tozalangan teriga yupqa qatlam qilib surtiladi. Eng yaxshi natija uchun kursni 20-30 kun davom ettirish tavsiya etiladi.",
  },
  {
    question: "Tarkibi haqiqatan ham xavfsizmi?",
    answer: "Ha, mahsulot 100% tabiiy va xavfsiz formulaga ega. Uning tarkibida kimyoviy gormonlar yo'q, shuning uchun o'rganib qolish yoki nojo'ya ta'sirlar keltirib chiqarmaydi.",
  },
  {
    question: "Natija qancha vaqtda seziladi?",
    answer: "Dastlabki yengillik (og'riq va qichishish kamayishi) birinchi qo'llashdanoq seziladi. To'liq regeneratsiya va simptomlardan xalos bo'lish uchun to'liq kurs talab etiladi.",
  },
  {
    question: "Kimlarga foydalanish tavsiya etilmaydi?",
    answer: "Mahsulot tarkibidagi o'simlik ekstraktlariga shaxsiy allergik ta'sir bo'lgan holatlarda foydalanishdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#C5A358"; // GemoPlus Gold rangi
  const darkColor = "#1A1A1A";    // GemoPlus Dark rangi

  return (
    <section className="w-full py-3 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Sarlavha qismi - Sustaflex/Cardio Balance stili */}
        <div className="mb-10 flex items-center gap-3 border-b-2 pb-4" style={{ borderColor: primaryColor }}>
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
            TEZ BERILADIGAN <span style={{ color: primaryColor }}>SAVOLLAR</span>
          </h2>
        </div>

        {/* Savollar ro'yxati */}
        <div className="divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group transition-all"
              >
                <span className={`text-[15px] md:text-[17px] font-bold transition-colors ${openIndex === index ? 'text-[#C5A358]' : 'text-gray-800'}`}>
                  {index + 1}. {item.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: openIndex === index ? primaryColor : "#94a3b8" }}
                />
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pr-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 pl-4" style={{ borderColor: primaryColor }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}