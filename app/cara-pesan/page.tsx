"use client";

import Link from "next/link";

export default function CaraPesanPage() {
  const steps = [
    {
      title: "Pilih Paket & Cek Harga",
      desc: "Lihat dulu daftar harga dan paket yang kita sediakan. Pilih yang paling pas sama kebutuhan dan budget kamu. Kalau masih bingung, tenang aja, bebas tanya-tanya dulu kok!",
    },
    {
      title: "Ngobrol Bareng Tim Kita",
      desc: "Klik tombol WhatsApp buat ngobrol langsung sama kita. Ceritain aja website seperti apa yang pengen kamu bikin, nanti kita kasih saran terbaiknya tanpa dipungut biaya.",
    },
    {
      title: "Kesepakatan & Pembayaran",
      desc: "Kalau udah ngerasa cocok sama harga dan fiturnya, kamu cukup bayar uang muka (DP) sebesar 50% dulu. Setelah DP masuk, pesanan kamu langsung masuk antrean buat mulai dikerjakan.",
    },
    {
      title: "Proses Bikin & Revisi",
      desc: "Tim Ruang Code bakal mulai merancang website kamu. Nanti kita akan kasih lihat hasil sementaranya. Kalau ada bagian yang kurang cocok, kamu bisa minta revisi sampai bener-bener pas di hati.",
    },
    {
      title: "Pelunasan & Website Online",
      desc: "Kalau hasilnya udah 100% sesuai keinginanmu, tinggal selesaikan sisa pembayarannya. Website kamu siap online, dan semua akses bakal kita serahkan seutuhnya ke kamu!",
    },
  ];

  return (
    <main className="pt-10 pb-24 min-h-screen bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-5 py-2 bg-blue-100/50 text-blue-700 font-bold text-xs tracking-widest uppercase rounded-full border border-blue-200">Alur Pemesanan</div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Cara Gampang Punya <br />
            <span className="text-blue-600">Website Sendiri.</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Gak perlu bingung soal teknis. Ikuti 5 langkah santai ini, dan biarkan tim Ruang Code yang beresin semuanya buat kamu.</p>
        </div>

        <div className="relative max-w-4xl mx-auto py-10">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200/50 -translate-x-1/2 rounded-full"></div>

          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="absolute left-8 md:left-1/2 w-14 h-14 bg-blue-600 rounded-full border-4 border-slate-50 shadow-lg shadow-blue-600/30 flex items-center justify-center -translate-x-1/2 z-10">
                <span className="text-white font-black text-xl">{index + 1}</span>
              </div>

              <div className="hidden md:block w-1/2"></div>
              <div className={`w-full ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto bg-slate-900 p-10 md:p-14 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Udah Jelas Sama <br /> Prosesnya?
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">Gak usah ragu, yuk ngobrol dulu aja. Tim kita siap banget bantu nemuin solusi yang paling pas buat kantong dan kebutuhanmu.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/#layanan" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all border border-slate-700">
                Cek Paket Harga
              </Link>
              <Link
                href="https://wa.me/6285624089970?text=Halo Ruang Code, saya mau konsultasi pembuatan website nih."
                target="_blank"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <span>Chat WA Sekarang</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
