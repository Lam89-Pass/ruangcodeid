export default function TestimoniSection() {
  const testimonials = [
    { name: "Budi Santoso", role: "Owner UMKM", content: "Pelayanan Ruang Code sangat profesional. Website saya jadi terlihat mewah." },
    { name: "Siti Aminah", role: "Direktur Yayasan", content: "Pengerjaannya cepat dan hasilnya di luar ekspektasi. Sangat terbantu dengan garansinya." },
    { name: "Andi Wijaya", role: "Founder Startup", content: "Desainnya modern dan tidak kaku sama sekali. SEO-nya juga terbukti jalan." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full mb-2">Ulasan Klien</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Apa Kata Mereka?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-600 mb-6 italic">"{testi.content}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{testi.name}</h4>
                <p className="text-sm text-slate-500">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
