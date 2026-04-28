import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ruang Code | Jasa Pembuatan Website Profesional",
  description: "Spesialis jasa pembuatan website untuk bisnis, organisasi, UMKM, dan instansi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.variable} ${inter.variable} font-sans text-slate-900 antialiased flex flex-col min-h-screen relative`}>
        <div className="fixed inset-0 z-[-1] h-full w-full bg-white bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem]">
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(circle_500px_at_50%_0px,#eff6ff,transparent)]"></div>
        </div>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
