"use client";

interface FilterSidebarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  priceFilter: string;
  setPriceFilter: (val: string) => void;
  promoOnly: boolean;
  setPromoOnly: (val: boolean) => void;
}

export default function FilterSidebar({ searchQuery, setSearchQuery, categories, selectedCategory, setSelectedCategory, priceFilter, setPriceFilter, promoOnly, setPromoOnly }: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-1/4 lg:sticky lg:top-32 space-y-6">
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40">
        <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Cari Paket</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Ketik nama paket..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-sm transition-all"
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40">
        <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Kategori</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="category" value={cat} checked={selectedCategory === cat} onChange={(e) => setSelectedCategory(e.target.value)} className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600 cursor-pointer" />
              <span className={`text-sm transition-colors ${selectedCategory === cat ? "text-blue-600 font-bold" : "text-slate-600 group-hover:text-slate-900"}`}>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40">
        <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Rentang Harga</h3>
        <div className="space-y-3">
          {[
            { value: "all", label: "Semua Harga" },
            { value: "under1", label: "Di bawah Rp 1 Juta" },
            { value: "1to3", label: "Rp 1 Juta - Rp 3 Juta" },
            { value: "above3", label: "Di atas Rp 3 Juta" },
          ].map((price) => (
            <label key={price.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                value={price.value}
                checked={priceFilter === price.value}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-600 cursor-pointer"
              />
              <span className={`text-sm transition-colors ${priceFilter === price.value ? "text-blue-600 font-bold" : "text-slate-600 group-hover:text-slate-900"}`}>{price.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-3xl border border-red-100 shadow-xl shadow-red-900/5">
        <label className="flex items-center justify-between cursor-pointer">
          <div>
            <h3 className="font-bold text-red-600 text-sm uppercase tracking-wider flex items-center gap-2">🔥 Sedang Promo</h3>
            <p className="text-xs text-slate-500 mt-1">Tampilkan yang diskon saja</p>
          </div>
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={promoOnly} onChange={() => setPromoOnly(!promoOnly)} />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
          </div>
        </label>
      </div>
    </aside>
  );
}
