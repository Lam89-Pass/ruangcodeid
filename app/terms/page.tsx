import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-slate-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Syarat dan Ketentuan</h1>
          <p className="text-slate-500">Terakhir diperbarui: {new Date().getFullYear()}</p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Persetujuan Layanan</h2>
            <p>Dengan menggunakan layanan jasa pembuatan website dari Ruang Code ID, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku di bawah ini.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Sistem Pembayaran</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Pengerjaan proyek akan dimulai setelah klien melakukan pembayaran Uang Muka (Down Payment / DP) minimal sebesar <strong>50%</strong> dari total nilai proyek.
              </li>
              <li>
                Sisa pembayaran <strong>wajib dilunasi</strong> setelah website selesai dikerjakan (sesuai kesepakatan) dan sebelum seluruh akses (akun domain/hosting) diserahkan kepada klien.
              </li>
              <li>
                Jika proyek dibatalkan sepihak oleh klien saat proses pengerjaan sudah berjalan, maka DP tidak dapat dikembalikan <em>(non-refundable)</em>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Revisi dan Masa Garansi</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Klien berhak mendapatkan revisi sesuai dengan batas maksimal yang tertera pada paket layanan yang dipilih.</li>
              <li>Revisi yang dimaksud adalah perubahan minor (teks, warna, gambar), bukan perombakan struktur desain secara total atau penambahan fitur baru di luar kesepakatan awal.</li>
              <li>Ruang Code ID memberikan garansi error/bug selama masa dukungan (support) masih berlaku.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Hak Cipta dan Konten</h2>
            <p>
              Klien bertanggung jawab penuh atas segala materi (teks, gambar, video, logo) yang diberikan kepada Ruang Code ID untuk dimasukkan ke dalam website. Kami tidak bertanggung jawab atas tuntutan pelanggaran hak cipta dari pihak
              ketiga terkait konten yang diberikan oleh klien.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
