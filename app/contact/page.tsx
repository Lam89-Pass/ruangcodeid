import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Hubungi Kami | Ruang Code" };

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Mari Berdiskusi!</h1>
        <p className="text-lg text-slate-600 mb-8">Konsultasikan kebutuhan website Anda secara gratis dengan tim kami.</p>
        <Link href="https://wa.me/628XXXXXXXXXX" target="_blank" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg">
          Chat Admin via WhatsApp
        </Link>
      </div>
    </div>
  );
}
