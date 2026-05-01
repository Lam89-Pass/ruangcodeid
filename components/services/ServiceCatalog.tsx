"use client";

import Link from "next/link";
import Image from "next/image";
import FilterSidebar from "./FilterSidebar";
import Pagination from "@/components/shared/Pagination";
import { useServiceCatalog, ServiceItem } from "@/hooks/useServiceCatalog";

interface ServiceCatalogProps {
  title: string;
  description: string;
  bannerImage: string;
  data: ServiceItem[];
  categories: string[];
}

export default function ServiceCatalog({ title, description, bannerImage, data, categories }: ServiceCatalogProps) {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, priceFilter, setPriceFilter, promoOnly, setPromoOnly, currentPage, setCurrentPage, currentItems, filteredItems, totalPages, resetFilters } =
    useServiceCatalog(data);

  return (
    <main className="min-h-screen bg-slate-50/50 pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <section className="relative w-full h-[300px] md:h-[400px] flex items-center overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-200/50">
          <Image
            src={bannerImage}
            alt={title.replace(/<[^>]*>/g, "")}
            fill
            priority
            className="object-cover object-top transition-transform duration-500 rounded-[2.5rem]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/20 rounded-[2.5rem]"></div>

          <div className="absolute inset-0 opacity-[0.05] text-white rounded-[2.5rem]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="pattern_grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern_grid)" />
            </svg>
          </div>

          <div className="relative z-10 w-full px-8 md:px-16 lg:px-20 text-left">
            <div className="md:w-3/4 space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl" dangerouslySetInnerHTML={{ __html: title }} />
              <p className="text-slate-200 text-sm md:text-lg font-medium max-w-2xl leading-relaxed drop-shadow-lg">{description}</p>
            </div>
          </div>
        </section>

        <div className="py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <FilterSidebar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
              promoOnly={promoOnly}
              setPromoOnly={setPromoOnly}
            />

            <div className="w-full lg:w-3/4">
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Pilih Paket Layanan</h2>
                  <p className="text-sm text-slate-500">Menampilkan {filteredItems.length} hasil untuk Anda</p>
                </div>
              </div>

              {filteredItems.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl border border-slate-100 text-center shadow-sm">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Paket Tidak Ditemukan</h3>
                  <p className="text-slate-500 text-sm">Coba ubah kata kunci pencarian atau sesuaikan filter di sebelah kiri.</p>
                  <button onClick={resetFilters} className="mt-6 px-6 py-2 bg-blue-50 text-blue-600 font-bold rounded-full text-sm hover:bg-blue-100 transition-colors">
                    Reset Filter
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {currentItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-lg shadow-slate-200/30 flex flex-col hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
                        {item.isPromo && <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl z-10 shadow-sm animate-pulse">Harga Promo</div>}

                        <div className="mb-5">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{item.category}</span>
                          <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                          <p className="text-slate-500 text-sm mt-2 leading-relaxed min-h-[40px]">{item.desc}</p>
                        </div>

                        <div className="mb-6 pb-6 border-b border-slate-100">
                          {item.originalPrice && <span className="text-xs font-bold text-slate-400 line-through block mb-1">Rp {item.originalPrice}</span>}
                          <div className="text-3xl font-black text-slate-900">{item.price.includes("Rp") || item.price.includes("Hubungi") || item.price.includes("Mulai") ? item.price : `Rp ${item.price}`}</div>
                        </div>

                        <ul className="space-y-2.5 mb-8 flex-grow">
                          {item.features.map((f, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                              <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="leading-tight">{f}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href={`https://wa.me/6285624089970?text=Halo%20Alam,%20saya%20ingin%20konsultasi%20mengenai%20*${item.name}*`}
                          target="_blank"
                          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm text-center hover:bg-blue-600 transition-all shadow-lg"
                        >
                          Pilih Paket Ini
                        </Link>
                      </div>
                    ))}
                  </div>

                  <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
