"use client";

import { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const agents = [
    {
      id: "grispy",
      name: "Agent Grispy",
      desc: "Konsultasi Layanan & Harga",
      phone: "628XXXXXXXXX1",
      greeting: "Halo Agent Grispy, saya mau tanya-tanya tentang layanan Ruang Code.",
      color: "from-pink-500 to-rose-500",
      initial: "G",
    },
    {
      id: "alam",
      name: "Agent Alam",
      desc: "Diskusi Project & Pemesanan",
      phone: "628XXXXXXXXX2",
      greeting: "Halo Agent Alam, saya mau diskusi terkait project pembuatan website.",
      color: "from-blue-500 to-cyan-500",
      initial: "AL",
    },
    {
      id: "afsal",
      name: "Agent Afsal",
      desc: "Bantuan Teknis & Support",
      phone: "628XXXXXXXXX3",
      greeting: "Halo Agent Afsal, saya butuh bantuan teknis terkait website saya.",
      color: "from-purple-500 to-indigo-500",
      initial: "AF",  
    },
    {
      id: "billy",
      name: "Agent Billy",
      desc: "Fast Response & Pembayaran",
      phone: "628XXXXXXXXX4",
      greeting: "Halo Agent Billy, saya butuh cepat dan mau langsung order.",
      color: "from-orange-400 to-amber-500",
      initial: "B",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end">
      <div
        className={`absolute bottom-[75px] md:bottom-[90px] right-0 w-[290px] sm:w-[320px] md:w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 visible" : "scale-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-blue-600 p-4 md:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-yellow-400 text-xl md:text-2xl">⚡</span>
            <h4 className="text-white font-bold text-lg md:text-xl">Support Cepat</h4>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-200 transition-colors">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col max-h-[280px] md:max-h-[350px] overflow-y-auto custom-scrollbar">
          {agents.map((agent) => (
            <a
              key={agent.id}
              href={`https://wa.me/${agent.phone}?text=${encodeURIComponent(agent.greeting)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 group"
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr ${agent.color} text-white flex items-center justify-center font-black text-lg md:text-xl shadow-inner shrink-0 group-hover:scale-105 transition-transform`}
              >
                {agent.initial}
              </div>

              <div>
                <p className="text-[11px] md:text-[12px] text-slate-500 mb-0.5">{agent.desc}</p>
                <h5 className="font-bold text-slate-800 text-sm md:text-base">{agent.name}</h5>
                <p className="text-[11px] md:text-[12px] text-[#25D366] font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-[#25D366] rounded-full inline-block animate-pulse"></span> Online
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4 cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`bg-white px-4 py-2.5 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 transition-all duration-300 origin-right ${isOpen ? "scale-0 opacity-0 invisible" : "scale-100 opacity-100 visible group-hover:-translate-y-1"}`}
        >
          <p className="text-slate-700 font-bold text-sm md:text-base flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
            Konsultasi disini Yuk <span className="animate-bounce inline-block origin-bottom text-lg md:text-xl">👋</span>
          </p>
        </div>

        <div className="w-14 h-14 md:w-[68px] md:h-[68px] rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 relative z-10 overflow-hidden">
          <div className={`transition-all duration-300 absolute inset-0 flex items-center justify-center ${isOpen ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}>
            <svg className="w-7 h-7 md:w-9 md:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 0C5.385 0 .003 5.38.003 12.02c0 2.126.554 4.195 1.607 6.015L.031 24l6.126-1.607a11.96 11.96 0 005.874 1.53h.001c6.643 0 12.026-5.382 12.026-12.026S18.676 0 12.031 0zm0 21.936c-1.802 0-3.566-.484-5.112-1.402l-.367-.217-3.8.995 1.013-3.704-.238-.378a9.98 9.98 0 01-1.528-5.28c0-5.502 4.478-9.98 9.98-9.98 5.503 0 9.983 4.478 9.983 9.981 0 5.501-4.48 9.98-9.98 9.98zm5.48-7.487c-.3-.15-1.775-.877-2.05-.978-.275-.101-.475-.15-.675.151-.2.3-.775.978-.95 1.178-.175.201-.35.226-.65.076-.3-.15-1.267-.467-2.414-1.49-.893-.795-1.496-1.776-1.671-2.077-.175-.301-.018-.464.132-.614.135-.135.3-.351.45-.526.15-.175.2-.3.3-.5s.05-.376-.025-.526c-.075-.15-.675-1.626-.925-2.226-.244-.585-.491-.505-.675-.515-.175-.008-.375-.011-.575-.011-.2 0-.525.075-.8.375s-1.05 1.026-1.05 2.502c0 1.476 1.075 2.902 1.225 3.102.15.2 2.115 3.228 5.126 4.528 2.148.927 2.87.876 3.42.738.64-.16 1.775-.726 2.025-1.426.25-.7.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35z" />
            </svg>
          </div>

          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 bg-blue-600 ${isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}>
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
