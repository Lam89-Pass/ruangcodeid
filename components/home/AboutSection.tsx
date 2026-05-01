"use client";

import Link from "next/link";

export default function AboutSection() {
  const benefits = [
    { title: "Biaya Fleksibel", desc: "Kami menawarkan pilihan harga yang dapat disesuaikan dengan kebutuhan dan skala bisnis Anda, tanpa mengorbankan kualitas." },
    { title: "SEO Friendly", desc: "Website dioptimalkan agar mudah ditemukan di mesin pencari, membantu meningkatkan visibilitas dan potensi pelanggan." },
    { title: "Pengerjaan Cepat & Tepat", desc: "Proses pengerjaan efisien dengan timeline yang jelas, sehingga website Anda bisa segera digunakan tanpa menunggu lama." },
    { title: "Garansi Maintenance", desc: "Nikmati layanan maintenance untuk memastikan website Anda tetap optimal, aman, dan terupdate." },
    { title: "Gratis Hosting & Domain", desc: "Dapatkan hosting dan domain gratis di tahun pertama, sehingga Anda bisa langsung online tanpa biaya tambahan." },
  ];

  const technologies = [
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Golang", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  ];

  return (
    <section id="about" className="relative pt-0 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Kenapa Harus Memilih <br />
                <span className="text-blue-600">Layanan Ruang Code?</span>
              </h3>

              <div className="space-y-5">
                {benefits.map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-blue-600/20">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Misi Kami Membangun <br />
                <span className="text-blue-600">Kualitas Digital.</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Ruang Code hadir untuk menghadirkan solusi digital yang tidak hanya menarik secara visual, tetapi juga kuat dan optimal. Kami berkomitmen menjadi partner terpercaya yang mengutamakan kualitas, keamanan, dan desain yang
                  eksklusif.
                </p>
                <p>
                  Kami percaya bahwa website adalah investasi jangka panjang. Karena itu, setiap proyek kami kerjakan dengan teliti mulai dari tampilan hingga performa dan optimasi mesin pencari—agar memberikan hasil yang maksimal untuk
                  bisnis Anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 border-t border-slate-200/60 relative">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Teknologi yang Kami Gunakan</p>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .animate-scroll {
              animation: scroll-left 25s linear infinite;
            }
            /* Berhenti bergeser saat di-hover/disentuh */
            .pause-on-hover:hover .animate-scroll {
              animation-play-state: paused;
            }
          `,
            }}
          />

          <div className="relative flex overflow-hidden w-full pause-on-hover group">
            <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="flex shrink-0 animate-scroll items-center gap-10 md:gap-20 pr-10 md:pr-20 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              {technologies.map((tech, index) => (
                <div key={`tech-1-${index}`} className="flex flex-col items-center gap-3 w-20 md:w-24">
                  <img src={tech.logo} alt={tech.name} className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-sm cursor-pointer" />
                  <span className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-tighter transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>

            <div aria-hidden="true" className="flex shrink-0 animate-scroll items-center gap-10 md:gap-20 pr-10 md:pr-20 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              {technologies.map((tech, index) => (
                <div key={`tech-2-${index}`} className="flex flex-col items-center gap-3 w-20 md:w-24">
                  <img src={tech.logo} alt={tech.name} className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-sm cursor-pointer" />
                  <span className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-tighter transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
