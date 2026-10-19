import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Anchor, Clock, Globe2, Handshake, Target } from "lucide-react";
import hero from "@/assets/hero.jpg";
import supply from "@/assets/supply.jpg";
import logo from "@/assets/logo.png";
import steelImage from "@/assets/service-steel.jpg";
import paintImage from "@/assets/service-paint.jpg";
import paintMaterialsImage from "@/assets/service-paint-facility.jpg";
import lubricantsImage from "@/assets/service-lubricants.jpg";
import sparesImage from "@/assets/service-spares.jpg";
import engineRoomImage from "@/assets/service-engine-room.jpg";
import workshopImage from "@/assets/service-welding.jpg";
import safetyImage from "@/assets/service-safety.jpg";
import repairImage from "@/assets/service-repair.jpg";
import { LangProvider, products, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PT Tumpuan Mitra Utama — Marine Supply & General Trading Indonesia" },
      { name: "description", content: "Marine supply for ship repair, maintenance & docking: steel plate, marine paint, lubricants, spare parts. Jakarta, Indonesia — serving global shipyards." },
      { property: "og:title", content: "PT Tumpuan Mitra Utama — Marine Supply Indonesia" },
      { property: "og:description", content: "Your trusted partner for ship repair, maintenance and docking supplies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LangProvider>
      <Page />
    </LangProvider>
  ),
});

const WA = "622138825393";
const EMAIL = "info@tumpuanmu.com";

const productImgs = [
  steelImage,
  paintImage,
  paintMaterialsImage,
  lubricantsImage,
  sparesImage,
  engineRoomImage,
  workshopImage,
  safetyImage,
  repairImage,
  hero,
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-14 shrink-0 place-items-center rounded-lg bg-card p-1.5">
        <img src={logo} alt="Logo PT Tumpuan Mitra Utama" className="h-full w-full object-contain" />
      </div>
      <div className={`font-display text-sm font-bold leading-tight tracking-wider ${light ? "text-navy-foreground" : "text-navy"}`}>
        TUMPUAN<br />MITRA UTAMA
      </div>
    </div>
  );
}

function Page() {
  const { lang, setLang, t } = useLang();
  const [form, setForm] = useState({ name: "", company: "", email: "", need: "" });
  const msg = `Halo / Hello PT Tumpuan Mitra Utama,%0A%0A${encodeURIComponent(`${t.contact.name}: ${form.name}\n${t.contact.company}: ${form.company}\n${t.contact.email}: ${form.email}\n${t.contact.need}: ${form.need}`)}`;
  const askItem = (item: string) => `https://wa.me/${WA}?text=${encodeURIComponent(`${lang === "id" ? "Halo, saya ingin menanyakan" : "Hello, I would like to ask about"}: ${item}`)}`;
  const icons = [Target, Clock, Globe2, Handshake];

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-foreground/10 bg-navy/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo light />
          <nav className="hidden items-center gap-8 text-sm text-navy-foreground/80 md:flex">
            <a href="#about" className="hover:text-copper">{t.nav.about}</a>
            <a href="#services" className="hover:text-copper">{t.nav.services}</a>
            <a href="#why" className="hover:text-copper">{t.nav.why}</a>
            <a href="#contact" className="hover:text-copper">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-navy-foreground/20 p-1 text-xs font-semibold">
              {(["id", "en"] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1 transition ${lang === l ? "bg-copper text-accent-foreground" : "text-navy-foreground/70"}`}>
                  {l === "id" ? "ID" : "EN"}
                </button>
              ))}
            </div>
            <a href="#contact" className="hidden rounded-full bg-copper px-5 py-2 text-sm font-semibold text-accent-foreground transition hover:bg-copper-deep sm:inline-block">{t.nav.cta}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Ship in dry dock at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
          <p key={lang + "e"} className="animate-rise text-xs font-semibold uppercase tracking-[0.3em] text-copper">{t.hero.eyebrow}</p>
          <h1 key={lang + "h"} className="animate-rise mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-navy-foreground md:text-7xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80">{t.hero.sub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-copper px-7 py-4 font-semibold text-accent-foreground transition hover:bg-copper-deep">
              {t.hero.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#services" className="rounded-full border border-navy-foreground/30 px-7 py-4 font-semibold text-navy-foreground transition hover:bg-navy-foreground/10">{t.hero.cta2}</a>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-navy-foreground/15 pt-8">
            {t.stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-copper md:text-4xl">{n}</div>
                <div className="mt-1 text-xs text-navy-foreground/70 md:text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-deep">{t.about.label}</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{t.about.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.about.body}</p>
          <div className="mt-10 rounded-2xl border-l-4 border-copper bg-secondary p-6">
            <div className="font-display font-semibold">{t.about.vision}</div>
            <p className="mt-2 text-muted-foreground">{t.about.visionText}</p>
          </div>
          <div className="mt-4 rounded-2xl border-l-4 border-navy bg-secondary p-6">
            <div className="font-display font-semibold">{t.about.mission}</div>
            <ol className="mt-3 space-y-2 text-muted-foreground">
              {t.about.missionItems.map((m, i) => (
                <li key={m} className="flex gap-3">
                  <span className="font-display font-semibold text-copper-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <img src={supply} alt="Marine paint, lubricants and steel plates" width={1200} height={1408} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant" />
      </section>

      {/* Services */}
      <section id="services" className="bg-navy py-28 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">{t.services.label}</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-3xl font-semibold md:text-5xl">{t.services.title}</h2>
            <p className="max-w-md text-navy-foreground/70">{t.services.sub}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((p, i) => (
              <a key={p} href={askItem(p)} target="_blank" rel="noreferrer" className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 transition hover:bg-white/10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={productImgs[i]} alt="" width={944} height={704} loading="lazy" className="h-full w-full object-cover brightness-110 contrast-105 saturate-125 transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="font-display text-lg font-medium leading-snug">{p}</div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-copper opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <MessageCircle className="h-3.5 w-3.5" /> {t.services.ask}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-16 grid gap-8 rounded-2xl border border-copper/40 p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">{t.trading.label}</p>
              <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{t.trading.title}</h3>
              <p className="mt-3 max-w-2xl text-navy-foreground/70">{t.trading.body}</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-copper px-7 py-4 font-semibold text-accent-foreground hover:bg-copper-deep">{t.nav.cta} <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-deep">{t.why.label}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {t.why.items.map(([title, body], i) => {
            const Icon = icons[i] ?? Target;
            return (
              <div key={title} className="rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-elegant">
                <Icon className="h-8 w-8 text-copper-deep" />
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-deep">{t.contact.label}</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{t.contact.title}</h2>
            <p className="mt-6 text-lg text-muted-foreground">{t.contact.sub}</p>
            <ul className="mt-10 space-y-5">
              <li className="flex gap-4"><Mail className="h-5 w-5 shrink-0 text-copper-deep" /><a href={`mailto:${EMAIL}`} className="hover:text-copper-deep">{EMAIL}</a></li>
              <li className="flex gap-4"><Phone className="h-5 w-5 shrink-0 text-copper-deep" /><a href="tel:+622138825393" className="hover:text-copper-deep">+62 21 3882 5393</a></li>
              <li className="flex gap-4"><MapPin className="h-5 w-5 shrink-0 text-copper-deep" /><span>Gedung Sarana Square Lt. 3 C-D, Jl. Tebet Barat IV No. 20, Tebet, Jakarta Selatan, DKI Jakarta 12810, Indonesia</span></li>
            </ul>
          </div>
          <form className="space-y-4 rounded-2xl bg-card p-8 shadow-elegant" onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/${WA}?text=${msg}`, "_blank"); }}>
            {(["name", "company", "email"] as const).map((k) => (
              <label key={k} className="block">
                <span className="text-sm font-medium">{t.contact[k]}</span>
                <input required={k !== "company"} type={k === "email" ? "email" : "text"} maxLength={120} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                  className="mt-1 w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
              </label>
            ))}
            <label className="block">
              <span className="text-sm font-medium">{t.contact.need}</span>
              <textarea required rows={4} maxLength={1000} value={form.need} placeholder={t.contact.needPh} onChange={(e) => setForm({ ...form, need: e.target.value })}
                className="mt-1 w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-navy py-4 font-semibold text-navy-foreground hover:bg-copper-deep">
              <MessageCircle className="h-4 w-4" /> {t.contact.send}
            </button>
            <a href={`mailto:${EMAIL}?subject=Inquiry&body=${msg}`} className="block text-center text-sm text-muted-foreground underline hover:text-foreground">{t.contact.mail}</a>
          </form>
        </div>
      </section>

      <footer className="bg-navy py-10 text-navy-foreground/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm">
          <Logo light />
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 pr-20 text-right sm:pr-28"><Anchor className="h-4 w-4 shrink-0 text-copper" /> © 2026 PT Tumpuan Mitra Utama. {t.footer}</span>
        </div>
      </footer>

      <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-copper text-accent-foreground shadow-elegant transition hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
