"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    wa: "",
    email: "",
    service: "",
    message: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success", 
    title: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return setModal({ isOpen: true, type: "error", title: "Pengiriman Gagal", message: "Nama Lengkap wajib diisi ya biar kita bisa kenalan." });
    }
    if (!formData.wa.trim()) {
      return setModal({ isOpen: true, type: "error", title: "Pengiriman Gagal", message: "Nomor WhatsApp kosong nih. Wajib diisi agar kami bisa membalas pesanmu." });
    }
    if (!formData.email.trim()) {
      return setModal({ isOpen: true, type: "error", title: "Pengiriman Gagal", message: "Alamat Email tidak boleh kosong." });
    }
    if (!formData.message.trim()) {
      return setModal({ isOpen: true, type: "error", title: "Pengiriman Gagal", message: "Jangan lupa isi detail pesan atau pertanyaanmu." });
    }

    const targetWA = "6285624089970";

    const textWA = `Halo Tim Ruang Code! Saya ingin bertanya dari halaman Contact Us.%0A%0A*Nama:* ${formData.name}%0A*No WA:* ${formData.wa}%0A*Email:* ${formData.email}%0A*Kategori:* ${formData.service || "Belum Dipilih"}%0A%0A*Pesan:*%0A${formData.message}`;

    window.open(`https://wa.me/${targetWA}?text=${textWA}`, "_blank");

    setModal({
      isOpen: true,
      type: "success",
      title: "Pesan Sedang Disiapkan!",
      message: "Form berhasil diproses. Silakan klik 'Kirim' pada aplikasi WhatsApp yang baru saja terbuka untuk menyelesaikan pengiriman.",
    });

    setFormData({ name: "", wa: "", email: "", service: "", message: "" });
  };

  const closeModal = () => setModal({ ...modal, isOpen: false });

  return (
    <main className="pt-32 pb-24 min-h-screen bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Mari Bangun Sesuatu yang <br className="hidden md:block" />
            <span className="text-blue-600">Luar Biasa Bersama.</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Punya pertanyaan, butuh konsultasi, atau mau langsung mulai proyek? Jangan ragu buat ngobrol sama tim kita.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Kantor Kami</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bandung, Jawa Barat
                    <br />
                    Indonesia (Buka: Senin - Sabtu)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">WhatsApp CS</h4>
                  <p className="text-sm text-slate-600 flex flex-col gap-1">
                    <a href="https://wa.me/6285624089970" target="_blank" className="hover:text-green-600 transition-colors font-medium">
                      CS Admin: +62 856-2408-9970
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Konsultasi</h4>
                  <a href="mailto:halo@ruangcode.id" className="text-sm text-slate-600 hover:text-purple-600 transition-colors font-medium">
                    ruangcode.id@gmail.com{" "}
                  </a>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div>
                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Ikuti Sosial Media Kami</h4>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/ruangcode.id"
                    target="_blank"
                    className="w-11 h-11 bg-slate-50 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-pink-500/30"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@ruangcode.id" target="_blank" className="w-11 h-11 bg-slate-50 hover:bg-black text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.28 6.28 0 005.4 15.6a6.28 6.28 0 006.28 6.28A6.32 6.32 0 0018 15.65V8.12a8.14 8.14 0 004 .96V5.63a5.45 5.45 0 01-2.41-.94z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311654129782!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714000000000!5m2!1sen!2sid"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 h-full">
              <div className="mb-8 border-b border-slate-100 pb-8">
                <h3 className="text-2xl font-bold text-slate-900">Kirim Pesan Langsung</h3>
                <p className="text-slate-500 mt-2">Isi form di bawah ini dan sistem akan otomatis merangkum pesan kamu ke WhatsApp kami.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400 font-medium text-slate-700"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="wa" className="block text-sm font-bold text-slate-700 mb-2">
                      No. WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="wa"
                      value={formData.wa}
                      onChange={handleChange}
                      placeholder="Contoh: 08123456789"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400 font-medium text-slate-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="budi@email.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400 font-medium text-slate-700"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">
                    Kategori Kebutuhan
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-slate-700 font-medium appearance-none cursor-pointer"
                  >
                    <option value="">-- Pilih Layanan yang Dibutuhkan --</option>
                    <option value="Jasa Pembuatan Website">Jasa Pembuatan Website</option>
                    <option value="Redesign Website">Redesign Website Lama</option>
                    <option value="Website Custom">Website Custom (Sistem Khusus)</option>
                    <option value="Lainnya">Pertanyaan Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                    Detail Pesan / Pertanyaan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan sedikit tentang bisnis kamu atau apa yang ingin kamu tanyakan ke tim kami..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400 font-medium text-slate-700 resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group mt-4">
                  <span>Kirim via WhatsApp</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {modal.isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 max-w-sm w-full shadow-2xl relative">
            <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg ${modal.type === "success" ? "bg-green-100 text-green-600 shadow-green-600/30" : "bg-red-100 text-red-600 shadow-red-600/30"}`}>
              {modal.type === "success" ? (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            <h3 className="text-2xl font-black text-slate-900 text-center mb-3">{modal.title}</h3>
            <p className="text-slate-600 text-center mb-8 leading-relaxed">{modal.message}</p>

            <button
              onClick={closeModal}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${modal.type === "success" ? "bg-green-600 hover:bg-green-700 shadow-green-600/30" : "bg-red-600 hover:bg-red-700 shadow-red-600/30"}`}
            >
              {modal.type === "success" ? "Siap, Mengerti!" : "Perbaiki Form"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
