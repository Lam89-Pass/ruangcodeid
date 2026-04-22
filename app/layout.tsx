import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Ruang Code | Jasa Pembuatan Website Profesional & Elegan',
  description: 'Spesialis jasa pembuatan website untuk bisnis, organisasi, UMKM, dan instansi. Dapatkan website premium dengan gratis hosting, domain, dan garansi selamanya.',
  keywords: ['jasa pembuatan website', 'bikin web murah', 'web developer profesional', 'jasa web perusahaan', 'Ruang Code'],
  authors: [{ name: 'Ruang Code Team' }],
  openGraph: {
    title: 'Ruang Code | Jasa Pembuatan Website Profesional',
    description: 'Wujudkan website impian bisnis Anda bersama Ruang Code.',
    url: 'https://ruangcode.com',
    siteName: 'Ruang Code',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.variable} ${inter.variable} font-sans bg-slate-50 text-slate-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}