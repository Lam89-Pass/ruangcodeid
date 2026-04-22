import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Ruang<span className="text-blue-500">Code</span>.
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">Spesialis Jasa Pembuatan Website kebutuhan Bisnis, Organisasi, Instansi, dan UMKM.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-blue-400">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/testimoni" className="hover:text-blue-400">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">📍 Cianjur, Jawa Barat</li>
              <li className="flex items-center gap-3">📱 +62 8XX-XXXX-XXXX</li>
              <li className="flex items-center gap-3">✉️ hello@ruangcode.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ruang Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
