"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const layananItems = [
    { name: "Jasa Pembuatan Website", path: "/layanan/pembuatan-website" },
    { name: "Redesign Website", path: "/layanan/redesign-website" },
    { name: "Jasa Website Custome", path: "/layanan/website-custom" },
    { name: "Desain", path: "/layanan/desain" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4" : "bg-transparent border-b border-transparent py-6"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Ruang<span style={{ color: "#0275F6" }}>Code</span>.
          </span>
        </Link>

        {/* Navlist */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/" className={`text-sm transition-colors ${pathname === "/" ? "font-bold" : "font-medium text-slate-600 hover:text-slate-900"}`} style={pathname === "/" ? { color: "#0275F6" } : {}}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              About Us
            </Link>
          </li>

          {/* Dropdown Layanan */}
          <li className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${pathname.startsWith("/layanan") ? "font-bold text-slate-900" : "text-slate-600 hover:text-slate-900"}`}>
              Layanan
              <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-xl shadow-xl transition-all duration-200 ${isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
              <div className="py-2">
                {layananItems.map((item) => (
                  <Link key={item.name} href={item.path} className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link href="/testimoni" className={`text-sm transition-colors ${pathname === "/testimoni" ? "font-bold" : "font-medium text-slate-600 hover:text-slate-900"}`} style={pathname === "/testimoni" ? { color: "#0275F6" } : {}}>
              Testimoni
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`text-sm transition-colors ${pathname === "/contact" ? "font-bold" : "font-medium text-slate-600 hover:text-slate-900"}`} style={pathname === "/contact" ? { color: "#0275F6" } : {}}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Tombol CTA */}
        <div className="hidden md:block">
          <Link
            href="https://wa.me/628XXXXXXXXXX?text=Halo%20Ruang%20Code,%20saya%20ingin%20konsultasi%20website"
            target="_blank"
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md text-white"
            style={{ backgroundColor: isScrolled ? "#0275F6" : "#0f172a" }}
          >
            Cara Pesan Web
          </Link>
        </div>
      </div>
    </nav>
  );
}
