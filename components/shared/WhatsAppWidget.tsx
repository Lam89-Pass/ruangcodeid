"use client";

export default function WhatsAppWidget() {
  const phoneNumber = "6285624089970";
  const message = "Halo Ruang Code, saya mau konsultasi pembuatan website nih.";

  return (
    <div className="fixed bottom-8 right-4 md:bottom-10 md:right-6 z-[9999] flex flex-col items-end">
      <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 cursor-pointer group">
        <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl shadow-lg border border-slate-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
          <p className="text-slate-700 font-bold text-xs md:text-sm flex items-center gap-1 md:gap-1.5 whitespace-nowrap">
            Konsultasi disini Yuk <span className="animate-bounce inline-block origin-bottom text-base md:text-lg">👋</span>
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>

          <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 active:scale-95 relative z-10">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 0C5.385 0 .003 5.38.003 12.02c0 2.126.554 4.195 1.607 6.015L.031 24l6.126-1.607a11.96 11.96 0 005.874 1.53h.001c6.643 0 12.026-5.382 12.026-12.026S18.676 0 12.031 0zm0 21.936c-1.802 0-3.566-.484-5.112-1.402l-.367-.217-3.8.995 1.013-3.704-.238-.378a9.98 9.98 0 01-1.528-5.28c0-5.502 4.478-9.98 9.98-9.98 5.503 0 9.983 4.478 9.983 9.981 0 5.501-4.48 9.98-9.98 9.98zm5.48-7.487c-.3-.15-1.775-.877-2.05-.978-.275-.101-.475-.15-.675.151-.2.3-.775.978-.95 1.178-.175.201-.35.226-.65.076-.3-.15-1.267-.467-2.414-1.49-.893-.795-1.496-1.776-1.671-2.077-.175-.301-.018-.464.132-.614.135-.135.3-.351.45-.526.15-.175.2-.3.3-.5s.05-.376-.025-.526c-.075-.15-.675-1.626-.925-2.226-.244-.585-.491-.505-.675-.515-.175-.008-.375-.011-.575-.011-.2 0-.525.075-.8.375s-1.05 1.026-1.05 2.502c0 1.476 1.075 2.902 1.225 3.102.15.2 2.115 3.228 5.126 4.528 2.148.927 2.87.876 3.42.738.64-.16 1.775-.726 2.025-1.426.25-.7.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
