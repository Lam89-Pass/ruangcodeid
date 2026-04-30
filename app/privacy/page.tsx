import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-slate-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Kebijakan Privasi</h1>
          <p className="text-slate-500">Terakhir diperbarui: {new Date().getFullYear()}</p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>
            <p>
              Ruang Code ID mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat mengisi formulir kontak atau menghubungi kami melalui WhatsApp. Informasi ini meliputi: Nama Lengkap, Alamat Email, Nomor WhatsApp, dan detail
              kebutuhan proyek Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Penggunaan Informasi</h2>
            <p className="mb-2">Informasi yang Anda berikan hanya akan digunakan untuk:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Merespons pertanyaan atau permintaan Anda terkait layanan pembuatan website.</li>
              <li>Memberikan penawaran harga dan detail layanan yang sesuai.</li>
              <li>Komunikasi selama proyek berlangsung.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Keamanan Data</h2>
            <p>
              Kami sangat menghargai privasi Anda. Ruang Code ID berkomitmen untuk tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga mana pun tanpa izin tertulis dari Anda, kecuali diwajibkan oleh hukum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami melalui halaman{" "}
              <Link href="/contact" className="text-blue-600 font-bold hover:underline">
                Contact Us
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
