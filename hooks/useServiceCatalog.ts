"use client";

import { useState, useMemo } from "react";

export interface ServiceItem {
  id: number;
  category: string;
  name: string;
  originalPrice: string | null;
  price: string;
  priceNum: number;
  isPromo: boolean;
  desc: string;
  features: string[];
}

export function useServiceCatalog(data: ServiceItem[], itemsPerPage: number = 4) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [priceFilter, setPriceFilter] = useState("all");
  const [promoOnly, setPromoOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    return data.filter((item) => {
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (selectedCategory !== "Semua Kategori" && item.category !== selectedCategory) return false;
      if (promoOnly && !item.isPromo) return false;
      if (priceFilter === "under1" && item.priceNum >= 1000000) return false;
      if (priceFilter === "1to3" && (item.priceNum < 1000000 || item.priceNum > 3000000)) return false;
      if (priceFilter === "above3" && item.priceNum <= 3000000 && item.priceNum !== 99999999) return false;
      return true;
    });
  }, [data, searchQuery, selectedCategory, promoOnly, priceFilter]);

  useMemo(() => setCurrentPage(1), [searchQuery, selectedCategory, promoOnly, priceFilter]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Semua Kategori");
    setPriceFilter("all");
    setPromoOnly(false);
    setCurrentPage(1);
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceFilter,
    setPriceFilter,
    promoOnly,
    setPromoOnly,
    currentPage,
    setCurrentPage,
    currentItems,
    filteredItems,
    totalPages,
    resetFilters,
  };
}
