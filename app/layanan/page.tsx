import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Paket Layanan | Ruang Code" };

export default function LayananPage() {
  const packages = [
    { name: "Basic", price: "Rp 1.500.000", isPopular: false },
    { name: "Profesional", price: "Rp 3.500.000", isPopular: true },
    { name: "Custom", price: "Hubungi Kami", isPopular: false },
  ];

  return (
    <div className="pt-24 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-16">Pilih Paket Sesuai Kebutuhan Anda</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`p-8 rounded-3xl border ${pkg.isPopular ? "border-blue-600 bg-slate-900 text-white" : "border-slate-200 bg-white"}`}>
              <h3 className="text-2xl font-bold mb-6">{pkg.name}</h3>
              <div className="mb-8">
                <span className="text-3xl font-extrabold">{pkg.price}</span>
              </div>
              <Link href="https://wa.me/628XXXXXXXXXX" target="_blank" className={`block w-full py-3 rounded-full font-semibold transition-colors ${pkg.isPopular ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-900"}`}>
                Pilih Paket
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
