"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.location.pathname === "/") {
        const sections = ["about", "testimoni"]; 
        let current = "";

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              current = section;
              break;
            }
          }
        }

        if (window.scrollY < 200) {
          current = "";
        }

        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (path: string) => {
    if (pathname === "/") {
      if (path === "/") return activeSection === "";
      if (path === "/#about") return activeSection === "about";
      if (path === "/#testimoni") return activeSection === "testimoni";
    } else {
      return pathname === path;
    }
    return false;
  };

  const layananItems = [
    { name: "Jasa Pembuatan Website", path: "/layanan/pembuatan-website" },
    { name: "Redesign Website", path: "/layanan/redesign-website" },
    { name: "Jasa Website Custome", path: "/layanan/website-custom" },
    { name: "Desain", path: "/layanan/desain" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white border-b border-slate-200 shadow-md py-3" : "bg-white md:bg-transparent border-b border-transparent py-4 md:py-6"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center transition-transform hover:scale-105 z-50">
          <Image src="/logoRC.PNG" alt="Logo Ruang Code" width={200} height={90} className="object-contain" priority />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/" className={`text-sm transition-colors ${isActive("/") ? "font-bold text-blue-600" : "font-medium text-slate-600 hover:text-blue-600"}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className={`text-sm transition-colors ${isActive("/#about") ? "font-bold text-blue-600" : "font-medium text-slate-600 hover:text-blue-600"}`}>
              About Us
            </Link>
          </li>

          <li className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={`flex items-center gap-1 text-sm transition-colors ${pathname.startsWith("/layanan") ? "font-bold text-blue-600" : "font-medium text-slate-600 hover:text-blue-600"}`}>
              Layanan
              <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute left-0 mt-2 w-64 bg-white border border-slate-100 rounded-xl shadow-xl transition-all duration-200 ${isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
              <div className="py-2">
                {layananItems.map((item) => (
                  <Link key={item.name} href={item.path} className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link href="/#testimoni" className={`text-sm transition-colors ${isActive("/#testimoni") ? "font-bold text-blue-600" : "font-medium text-slate-600 hover:text-blue-600"}`}>
              Testimoni
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`text-sm transition-colors ${isActive("/contact") ? "font-bold text-blue-600" : "font-medium text-slate-600 hover:text-blue-600"}`}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link href="/cara-pesan" className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md text-white" style={{ backgroundColor: isScrolled ? "#0275F6" : "#0f172a" }}>
            Cara Pesan Web
          </Link>
        </div>

        <button className="md:hidden flex items-center p-2 text-slate-600 hover:text-blue-600 transition-colors z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-6 py-6 gap-5 bg-white">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-base ${isActive("/") ? "font-bold text-blue-600" : "font-medium text-slate-700"}`}>
            Home
          </Link>
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className={`text-base ${isActive("/#about") ? "font-bold text-blue-600" : "font-medium text-slate-700"}`}>
            About Us
          </Link>

          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className={`flex items-center justify-between text-base w-full text-left ${pathname.startsWith("/layanan") ? "font-bold text-blue-600" : "font-medium text-slate-700"}`}
            >
              Layanan
              <svg className={`w-5 h-5 transition-transform ${isMobileDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${isMobileDropdownOpen ? "max-h-64 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
              {layananItems.map((item) => (
                <Link key={item.name} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-sm ${isActive(item.path) ? "font-bold text-blue-600" : "text-slate-500"}`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#testimoni" onClick={() => setIsMobileMenuOpen(false)} className={`text-base ${isActive("/#testimoni") ? "font-bold text-blue-600" : "font-medium text-slate-700"}`}>
            Testimoni
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-base ${isActive("/contact") ? "font-bold text-blue-600" : "font-medium text-slate-700"}`}>
            Contact Us
          </Link>

          <div className="pt-4 border-t border-slate-100">
            <Link href="/cara-pesan" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-center w-full px-6 py-3.5 rounded-full text-sm font-bold bg-blue-600 text-white">
              Cara Pesan Web
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
