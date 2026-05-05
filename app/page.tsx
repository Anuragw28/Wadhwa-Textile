import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";
import QuoteButton from "@/components/QuoteButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

const STATS = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Retailer Clients" },
  { value: "20+", label: "Product Categories" },
  { value: "Pan India", label: "Delivery" },
];

const TRUST = [
  "GST Compliant Invoicing",
  "Bulk Pricing on MOQ",
  "Consistent Quality",
  "Fast Delhi Dispatch",
  "Repeat Buyer Discounts",
];

const STEPS = [
  { n: 1, title: "Browse Catalogue", body: "Explore categories, styles and quantities." },
  { n: 2, title: "Send Inquiry", body: "WhatsApp or quote form with your MOQ." },
  { n: 3, title: "Get Quote", body: "Receive pricing, samples and payment terms." },
  { n: 4, title: "Confirm & Dispatch", body: "Packed from Delhi, shipped pan-India." },
];

const USE_CASES = ["Hotels", "Schools", "Restaurants", "Corporates", "Hospitals"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-container relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-on-primary-container">
            <span className="inline-flex items-center gap-2 label-eyebrow border border-gold/40 bg-black/30 px-3 py-1.5 rounded">
              <span className="material-symbols-outlined text-[16px] text-gold" aria-hidden="true">verified</span>
              Trusted Wholesale Supplier · Delhi
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-[48px] font-bold leading-tight tracking-tight text-white">
              Delhi&apos;s Trusted Source for Bulk Clothing Supply
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl">
              Lowers, jackets, t-shirts, kids wear, accessories &amp; more — supplied directly to retailers across India. Minimum order applies. Fast dispatch from Delhi.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="#catalogue" className="btn-primary">
                <span>Browse Catalogue</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </Link>
              <a
                href={buildWhatsAppUrl(WA_MESSAGES.generic)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded p-5 md:p-6 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-[40px] font-bold text-gold leading-none">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-container border-y border-outline-variant overflow-x-auto">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-8 min-w-max">
          {TRUST.map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gold text-[20px]" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-on-surface">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="catalogue" className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
          <div>
            <p className="label-eyebrow mb-2">Our Product Range</p>
            <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight">
              Browse the wholesale catalogue
            </h2>
          </div>
          <Link href="/catalogue" className="text-sm font-semibold text-gold hover:text-gold-deep">
            View full catalogue →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group relative rounded overflow-hidden aspect-[4/5] bg-surface-container-high border border-outline-variant/50 hover:border-gold transition-colors"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg md:text-xl font-semibold text-white">{c.name}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
                  MOQ: {c.moq} pcs · {c.short}
                </p>
              </div>
            </Link>
          ))}

          <Link
            href="/corporate"
            className="group relative rounded overflow-hidden aspect-[4/5] bg-primary-container border border-gold/30 hover:border-gold flex flex-col items-center justify-center text-center p-6"
          >
            <span className="material-symbols-outlined text-gold text-5xl mb-3" aria-hidden="true">business_center</span>
            <h3 className="text-lg font-semibold text-white">Corporate / Uniforms</h3>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-gold">Custom orders →</p>
          </Link>

          <Link
            href="/catalogue"
            className="group relative rounded overflow-hidden aspect-[4/5] border border-dashed border-outline-variant hover:border-gold flex flex-col items-center justify-center text-center p-6"
          >
            <span className="material-symbols-outlined text-gold text-5xl mb-3" aria-hidden="true">grid_view</span>
            <h3 className="text-lg font-semibold text-on-surface">View Full<br />Catalogue</h3>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-gold">Explore all →</p>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="text-center mb-10">
            <p className="label-eyebrow mb-2">How Ordering Works</p>
            <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight">
              From browse to dispatch in 4 steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-gold font-bold flex items-center justify-center">
                    {s.n}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block h-px flex-1 bg-outline-variant" />
                  )}
                </div>
                <h3 className="text-base font-semibold text-on-surface">{s.title}</h3>
                <p className="mt-1 text-sm text-on-surface-variant">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Highlight Strip */}
      <section className="bg-primary-container">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="text-white">
            <p className="label-eyebrow mb-2">B2B Solutions</p>
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight">
              Supplying uniforms &amp; bulk apparel to businesses across India
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              {USE_CASES.map((u) => (
                <span key={u} className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {u}
                </span>
              ))}
            </div>
          </div>
          <Link href="/corporate" className="btn-primary self-start md:self-center">
            <span>Corporate Inquiry</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Lead Form */}
      <section id="quote" className="bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="label-eyebrow mb-2">Bulk Pricing</p>
            <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight">
              Ready to stock up? Get a bulk quote today.
            </h2>
            <p className="mt-3 text-base text-on-surface-variant max-w-md">
              Tell us what you need. We&apos;ll reply on WhatsApp within 24 hours with pricing, MOQ and dispatch timeline.
            </p>
            <div className="mt-6 space-y-2 text-sm text-on-surface-variant">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold" aria-hidden="true">call</span>
                <span>+91 70113 88455</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold" aria-hidden="true">mail</span>
                <span>wadhwaanu42@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-semibold text-on-surface mb-1">Submit a quick inquiry</h3>
            <p className="text-sm text-on-surface-variant mb-5">
              Opens WhatsApp with your details pre-filled.
            </p>
            <QuoteButton className="w-full">
              Get a Bulk Quote
            </QuoteButton>
            <a
              href={buildWhatsAppUrl(WA_MESSAGES.generic)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 btn-whatsapp w-full"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <p className="mt-3 text-xs text-on-surface-muted text-center">
              Average response time: 15 mins · Mon–Sat
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
