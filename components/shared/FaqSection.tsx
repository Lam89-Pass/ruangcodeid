export default function FaqSection() {
  const faqs = [
    { q: "Apa yang perlu saya persiapkan untuk Membuat Website?", a: "Cukup data data penting seperti No WhatsApp, Email, Logo jika ada dan Domain yang di inginkan. Selebihnya bisa dikoordinasikan bersama." },
    { q: "Berapa lama proses pembuatan Website?", a: "Normalnya selesai kurang lebih 7-14 hari kerja, Tergantung Kompleksitas Konten Website." },
    { q: "Apa Ruang Code Melayani Jasa Website Custom?", a: "Benar Sekali, Kami siap membuatkan website custom sesuai request fitur dan tampilan yang kamu inginkan." },
    { q: "Berapa lama Masa aktif Website?", a: "Masa aktif website umumnya 1 Tahun, akan ada Perpanjangan tiap tahunnya dengan harga yang jauh lebih murah dari biaya awal pembuatan." },
    { q: "Apa membuat website harus tatap muka?", a: "Perlu tidak perlu, tergantung kebutuhan saja, Kami juga menyediakan Layanan Zoom Meeting atau via Telfon." },
    { q: "Apakah logo website nantinya dibuatkan?", a: "Logo dibuat pelanggan sendiri, bantuan edit logo hanya sebatas resize saja." },
    { q: "Apakah bisa menambahkan logo sosmed yang terhubung langsung ke sosmednya?", a: "Ya. Integrasi ke sosial media (Facebook, Instagram, dan Twitter) dapat dilakukan." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Pertanyaan yang Sering Diajukan</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border border-slate-200 rounded-xl bg-slate-50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold">
                <h3 className="text-lg">{faq.q}</h3>
                <span className="relative size-5 shrink-0 text-slate-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
