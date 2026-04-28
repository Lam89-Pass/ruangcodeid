"use client";

import Link from "next/link";

export default function CaraPesanPage() {
  const steps = [
    {
      no: "01",
      title: "Pilih Paket & Layanan",
      desc: "Pelajari daftar harga dan fitur di bagian 'Paket Harga'. Pilih yang paling sesuai dengan budget dan kebutuhan bisnis Anda.",
    },
    {
      no: "02",
      title: "Konsultasi via WhatsApp",
      desc: "Klik tombol 'Pilih Paket' atau 'Konsultasi'. Anda akan terhubung langsung dengan CS Alam atau CS Billy untuk diskusi detail.",
    },
    {
      no: "03",
      title: "Pembayaran DP",
      desc: "Setelah deal mengenai fitur dan desain, lakukan pembayaran uang muka (DP) sebesar 50% untuk mengamankan slot antrean pengerjaan.",
    },
    {
      no: "04",
      title: "Proses Pengerjaan",
      desc: "Kami mulai membangun website Anda. Anda akan mendapatkan update berkala dan memiliki kesempatan untuk memberikan revisi.",
    },
    {
      no: "05",
      title: "Pelunasan & Serah Terima",
      desc: "Setelah website selesai dan Anda puas, lakukan pelunasan. Kami akan menyerahkan akses login, domain, dan hosting sepenuhnya kepada Anda.",
    },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs tracking-widest uppercase rounded-full border border-blue-100">Panduan Pemesanan</div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Cara Pesan Website di <span className="text-blue-600">Ruang Code.</span>
          </h1>
          <p className="text-slate-500 text-lg">Ikuti 5 langkah mudah berikut untuk mendigitalkan bisnis Anda bersama kami.</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all group">
              <div className="text-5xl font-black text-blue-100 group-hover:text-blue-600 transition-colors">{step.no}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[2.5rem] bg-slate-900 text-white text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Sudah Paham Prosedurnya?</h2>
          <p className="text-slate-400">Silakan pilih paket yang sesuai atau langsung konsultasi gratis sekarang.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/#layanan" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all">
              Lihat Paket Harga
            </Link>
            <Link
              href="https://wa.me/628XXXXXXXXXX?text=Halo%20Ruang%20Code,%20saya%20sudah%20membaca%20panduan%20pemesanan%20dan%20ingin%20langsung%20konsultasi."
              target="_blank"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Konsultasi Langsung
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
