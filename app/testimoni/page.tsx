import type { Metadata } from "next";
import TestimoniSection from "@/components/shared/TestimoniSection";

export const metadata: Metadata = { title: "Testimoni | Ruang Code" };

export default function TestimoniPage() {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-slate-50">
      <TestimoniSection />
    </div>
  );
}
