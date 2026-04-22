import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Ruang<span className="text-blue-500">Code</span>.
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Mitra teknologi terpercaya untuk mewujudkan kehadiran digital bisnis Anda dengan desain elegan dan performa maksimal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/layanan" className="hover:text-blue-400 transition-colors">Layanan Kami</Link></li>
              <li><Link href="/testimoni" className="hover:text-blue-400 transition-colors">Testimoni Klien</Link></li>
              <li><Link href="/#about" className="hover:text-blue-400 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak & Alamat</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1">📍</span>
                <span>Cianjur, Jawa Barat<br/>Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📱</span>
                <a href="https://wa.me/628XXXXXXXXXX" target="_blank" className="hover:text-blue-400 transition-colors">+62 8XX-XXXX-XXXX</a>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <a href="mailto:hello@ruangcode.com" className="hover:text-blue-400 transition-colors">hello@ruangcode.com</a>
              </li>
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