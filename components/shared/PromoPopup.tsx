"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem("promo_closed");

    if (!hasSeenPromo) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
    sessionStorage.setItem("promo_closed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[10000] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity" onClick={() => handleClose()}></div>

      <div className="relative w-[95%] max-w-[360px] md:max-w-[500px] lg:max-w-[600px] z-10 animate-[scaleIn_0.3s_ease-out]">
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 md:-top-5 md:-right-5 z-20 w-10 h-10 flex items-center justify-center bg-white text-slate-900 rounded-full shadow-xl hover:scale-110 transition-all active:scale-95 border-2 border-slate-100"
          aria-label="Tutup Promo"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Link href="#layanan" onClick={() => handleClose()} className="block w-full h-auto overflow-hidden shadow-2xl group relative">
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-10"></div>

          <Image src="/promo_launching.png" alt="Promo Launching Ruang Code" width={800} height={1000} className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500" priority />
        </Link>
      </div>

      <style jsx global>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
