import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "id" | "en";

export const dict = {
  id: {
    nav: { about: "Tentang", services: "Layanan", why: "Keunggulan", contact: "Kontak", cta: "Minta Penawaran" },
    hero: {
      eyebrow: "Marine Supply · General Trading · Indonesia",
      title: "Mitra andal untuk setiap kapal yang Anda perbaiki.",
      sub: "Steel plate, marine paint, lubricant hingga spare parts — kami siapkan sesuai spesifikasi, tepat waktu, untuk galangan di Indonesia dan mancanegara.",
      cta: "Konsultasikan Kebutuhan Anda",
      cta2: "Lihat Produk",
    },
    stats: [["10+", "Kategori produk kapal"], ["24 Jam", "Respons penawaran"], ["Global", "Jaringan pemasok"]],
    about: {
      label: "Tentang Kami",
      title: "Connecting Opportunities. Building Partnerships.",
      body: "PT Tumpuan Mitra Utama bergerak di bidang Marine Supply, General Trading, dan penyediaan kebutuhan kapal — fokus pada ship repair, maintenance, dan docking di galangan kapal. Didukung jaringan pemasok yang luas, kami berkomitmen menjadi mitra yang dapat diandalkan.",
      vision: "Visi",
      visionText: "Menjadi mitra terpercaya dalam penyediaan kebutuhan kapal, ship repair, maintenance, dan docking melalui layanan perdagangan dan supply yang profesional, responsif, dan berkelanjutan.",
      mission: "Misi",
      missionItems: [
        "Menyediakan berbagai material, spare parts, dan perlengkapan yang dibutuhkan dalam kegiatan repair, maintenance, docking, dan pembangunan kapal.",
        "Memahami kebutuhan dan spesifikasi pelanggan serta menyediakan produk yang sesuai.",
        "Membangun jaringan pemasok dan kemitraan bisnis yang luas dan terpercaya.",
        "Memberikan pelayanan pengadaan yang cepat, tepat, dan profesional.",
        "Mengembangkan kegiatan perdagangan dan supply secara berkelanjutan sesuai kebutuhan industri.",
      ],
    },
    services: {
      label: "Bisnis Kami",
      title: "Semua kebutuhan galangan, satu mitra.",
      sub: "Pengadaan berdasarkan spesifikasi, quantity, dan kebutuhan proyek — rutin maupun proyek docking.",
      ask: "Tanyakan item ini",
      photoNote: "Ilustrasi AI konseptual, bukan foto atau dokumentasi proyek perusahaan.",
    },
    trading: {
      label: "General Trading & Product Supply",
      title: "Butuh produk di luar daftar? Kami carikan.",
      body: "Fleksibilitas pengadaan berbagai jenis produk untuk berbagai sektor — tepat produk, tepat spesifikasi, tepat waktu, dan kompetitif.",
    },
    why: {
      label: "Mengapa Kami",
      items: [
        ["Tepat Spesifikasi", "Kami memahami kebutuhan teknis dan mencocokkan produk dengan standar proyek Anda."],
        ["Cepat & Responsif", "Penawaran harga dan pengadaan yang sigap untuk jadwal docking yang ketat."],
        ["Jaringan Luas", "Kemitraan pemasok lokal dan internasional yang terus berkembang."],
        ["Kemitraan Jangka Panjang", "Kami membangun hubungan bisnis berkelanjutan, bukan transaksi sesaat."],
      ],
    },
    contact: {
      label: "Kontak",
      title: "Mari bangun kemitraan bisnis.",
      sub: "Ceritakan kebutuhan kapal Anda. Tim kami akan membalas dengan penawaran terbaik.",
      name: "Nama", company: "Perusahaan / Galangan", email: "Email", need: "Kebutuhan Anda",
      needPh: "Contoh: 20 lembar steel plate 10mm, marine paint untuk docking bulan depan…",
      send: "Kirim via WhatsApp", mail: "Atau kirim email",
    },
    footer: "Hak cipta dilindungi.",
  },
  en: {
    nav: { about: "About", services: "Products", why: "Why Us", contact: "Contact", cta: "Request a Quote" },
    hero: {
      eyebrow: "Marine Supply · General Trading · Indonesia",
      title: "A dependable partner for every vessel you repair.",
      sub: "Steel plate, marine paint, lubricants and spare parts — sourced to spec and delivered on time for shipyards in Indonesia and worldwide.",
      cta: "Discuss Your Requirements",
      cta2: "View Products",
    },
    stats: [["10+", "Marine product categories"], ["24 Hours", "Quotation response"], ["Global", "Supplier network"]],
    about: {
      label: "About Us",
      title: "Connecting Opportunities. Building Partnerships.",
      body: "PT Tumpuan Mitra Utama operates in Marine Supply, General Trading and ship provisions — focused on ship repair, maintenance and docking at shipyards. Backed by a wide supplier network, we are committed to being a partner you can rely on.",
      vision: "Vision",
      visionText: "To be a trusted partner in supplying vessel needs for ship repair, maintenance and docking through professional, responsive and sustainable trading and supply services.",
      mission: "Mission",
      missionItems: [
        "Supply the materials, spare parts and equipment needed for ship repair, maintenance, docking and vessel construction.",
        "Understand customer needs and specifications, and provide products that match them.",
        "Build a wide and trusted network of suppliers and business partnerships.",
        "Deliver procurement services that are fast, accurate and professional.",
        "Develop trading and supply activities sustainably, in line with industry needs.",
      ],
    },
    services: {
      label: "Our Business",
      title: "Everything a shipyard needs, one partner.",
      sub: "Procurement by specification, quantity and project scope — routine supply or full docking projects.",
      ask: "Ask about this item",
      photoNote: "Conceptual AI illustrations, not photos or company project documentation.",
    },
    trading: {
      label: "General Trading & Product Supply",
      title: "Need something not on the list? We'll source it.",
      body: "Flexible procurement of a wide range of products across sectors — the right product, right spec, right time, at a competitive price.",
    },
    why: {
      label: "Why Choose Us",
      items: [
        ["Right Specification", "We understand technical requirements and match products to your project standards."],
        ["Fast & Responsive", "Quick quotations and procurement for tight docking schedules."],
        ["Wide Network", "A growing network of local and international supply partners."],
        ["Long-term Partnership", "We build lasting business relationships, not one-off transactions."],
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's build business partnerships.",
      sub: "Tell us what your vessel needs. Our team will reply with our best offer.",
      name: "Name", company: "Company / Shipyard", email: "Email", need: "Your requirements",
      needPh: "e.g. 20 sheets of 10mm steel plate, marine paint for next month's docking…",
      send: "Send via WhatsApp", mail: "Or send an email",
    },
    footer: "All rights reserved.",
  },
} as const;

export const products = [
  "Steel Plate & Metal Products",
  "Marine Paint & Coating",
  "Dempul, Thinner & Painting Materials",
  "Oil, Lubricants & Grease",
  "Marine Spare Parts",
  "Deck & Engine Room Supplies",
  "Maintenance & Workshop Equipment",
  "Safety Equipment & Working Supplies",
  "Ship Repair Materials",
  "Shipbuilding & Docking Requirements",
];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof dict)[Lang] };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "id") setLangState(saved);
    else if (!navigator.language.toLowerCase().startsWith("id")) setLangState("en");
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("lang", l); };
  return <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const c = useContext(LangContext);
  if (!c) throw new Error("useLang outside provider");
  return c;
}
