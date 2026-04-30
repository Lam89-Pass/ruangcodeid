"use client";

import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // PENTING: Ganti dengan nomor WA lu
  const phoneNumber = "628XXXXXXXXXX";

  // Ambil jam saat ini buat nampilin waktu di balon chat
  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }));
  }, [isOpen]);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Buka tab WA
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");

    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Kotak Chat WA */}
      <div
        className={`absolute bottom-20 right-0 w-[340px] bg-[#E5DDD5] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col ${
          isOpen ? "scale-100 opacity-100 visible" : "scale-0 opacity-0 invisible"
        }`}
      >
        {/* Header WhatsApp (Hijau Tua) */}
        <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between z-10 shadow-md">
          <div className="flex items-center gap-3">
            {/* Foto Profil / Avatar */}
            <div className="relative">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border border-white/20">
                {/* Lu bisa ganti huruf AL ini pakai tag <img src="foto-alam.jpg" /> nantinya */}
                <span className="text-[#075E54] font-black text-sm">RC</span>
              </div>
              {/* Titik Online */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54]"></div>
            </div>

            {/* Nama & Status */}
            <div>
              <h4 className="text-white font-bold text-base leading-tight">CS ALAM</h4>
              <p className="text-white/80 text-xs mt-0.5">Biasanya membalas seketika</p>
            </div>
          </div>

          {/* Tombol Tutup (X) */}
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body Chat (Background Motif WA) */}
        {/* Catatan: Gambar motif chat WA disematkan via URL langsung */}
        <div
          className="p-4 flex-1 h-[280px] overflow-y-auto relative"
          style={{
            backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
            backgroundSize: "contain",
          }}
        >
          {/* Label Hari Ini */}
          <div className="flex justify-center mb-5">
            <span className="bg-[#E1F3FB] text-slate-600 text-[11px] font-medium px-3 py-1 rounded-lg shadow-sm">Hari ini</span>
          </div>

          {/* Balon Obrolan Admin (Sisi Kiri) */}
          <div className="flex mb-4">
            <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-sm max-w-[85%] relative">
              {/* Buntut Balon Chat */}
              <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>

              <p className="text-[#075E54] text-xs font-bold mb-1">CS ALAM</p>
              <p className="text-sm text-slate-800 leading-snug">
                Halo Kak! 👋 <br />
                <br />
                Selamat datang di Ruang Code. Ada yang bisa Alam bantu seputar pembuatan website atau layanan kami?
              </p>

              {/* Waktu Chat */}
              <div className="flex justify-end items-center mt-1">
                <span className="text-[10px] text-slate-400 font-medium">{currentTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Input Chat */}
        <div className="bg-[#F0F0F0] p-3 flex gap-2 items-end z-10 relative">
          <form onSubmit={handleSend} className="flex-1 flex gap-2">
            {/* Kolom Ketik */}
            <div className="flex-1 bg-white rounded-full flex items-center px-4 py-2.5 shadow-sm">
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ketik pesan..." className="w-full text-sm focus:outline-none text-slate-700 bg-transparent" required />
            </div>

            {/* Tombol Kirim (Pesawat Kertas) */}
            <button
              type="submit"
              className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all shadow-sm ${message.trim() ? "bg-[#00A884] hover:bg-[#008f6f] text-white" : "bg-slate-300 text-slate-100 cursor-not-allowed"}`}
              disabled={!message.trim()}
            >
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Tombol Floating Bulat (Logo WA Asli) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-600/40 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 relative"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.385 0 .003 5.38.003 12.02c0 2.126.554 4.195 1.607 6.015L.031 24l6.126-1.607a11.96 11.96 0 005.874 1.53h.001c6.643 0 12.026-5.382 12.026-12.026S18.676 0 12.031 0zm0 21.936c-1.802 0-3.566-.484-5.112-1.402l-.367-.217-3.8.995 1.013-3.704-.238-.378a9.98 9.98 0 01-1.528-5.28c0-5.502 4.478-9.98 9.98-9.98 5.503 0 9.983 4.478 9.983 9.981 0 5.501-4.48 9.98-9.98 9.98zm5.48-7.487c-.3-.15-1.775-.877-2.05-.978-.275-.101-.475-.15-.675.151-.2.3-.775.978-.95 1.178-.175.201-.35.226-.65.076-.3-.15-1.267-.467-2.414-1.49-.893-.795-1.496-1.776-1.671-2.077-.175-.301-.018-.464.132-.614.135-.135.3-.351.45-.526.15-.175.2-.3.3-.5s.05-.376-.025-.526c-.075-.15-.675-1.626-.925-2.226-.244-.585-.491-.505-.675-.515-.175-.008-.375-.011-.575-.011-.2 0-.525.075-.8.375s-1.05 1.026-1.05 2.502c0 1.476 1.075 2.902 1.225 3.102.15.2 2.115 3.228 5.126 4.528 2.148.927 2.87.876 3.42.738.64-.16 1.775-.726 2.025-1.426.25-.7.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35z" />
          </svg>
        )}
      </button>
    </div>
  );
}
