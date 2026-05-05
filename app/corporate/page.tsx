import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Corporate & Uniform Supply | Wadhwa Textiles",
  description:
    "Bulk uniform manufacturer for hotels, schools, restaurants, hospitals and corporate offices. Custom branding, embroidery, GST invoice, pan-India delivery.",
};

const SECTORS = [
  {
    icon: "local_hotel",
    title: "Hotel & Resort",
    body: "Stain-resistant, breathable fabrics for front desk, housekeeping and management.",
    span: "md:col-span-8",
    height: "h-[300px]",
    useCase: "hotel staff uniforms",
  },
  {
    icon: "restaurant",
    title: "Restaurant & F&B",
    body: "Heat and spill-resistant aprons, chef coats and waitstaff uniforms.",
    span: "md:col-span-4",
    height: "h-[300px]",
    useCase: "restaurant uniforms",
  },
  {
    icon: "school",
    title: "School & Education",
    body: "Durable, fade-resistant uniforms designed for daily active wear.",
    span: "md:col-span-4",
    height: "h-[260px]",
    useCase: "school uniforms",
  },
  {
    icon: "business_center",
    title: "Corporate Office",
    body: "Sharp, tailored shirting and branded apparel for executive teams.",
    span: "md:col-span-4",
    height: "h-[260px]",
    useCase: "corporate office wear",
  },
  {
    icon: "local_hospital",
    title: "Hospital & Clinic",
    body: "Antimicrobial, easily sanitisable scrubs and lab coats.",
    span: "md:col-span-4",
    height: "h-[260px]",
    useCase: "hospital scrubs",
  },
];

const FEATURES = [
  { icon: "branding_watermark", title: "Custom Branding", body: "Embroidery & screen print." },
  { icon: "straighten", title: "Consistent Sizing", body: "Standardised B2B size charts." },
  { icon: "receipt_long", title: "GST Invoice", body: "Input tax credit eligible." },
  { icon: "local_shipping", title: "Pan-India Delivery", body: "Reliable logistics partners." },
  { icon: "inventory_2", title: "100 PC MOQ", body: "Low minimum per design." },
];

export default function CorporatePage() {
  const wa = buildWhatsAppUrl(
    "Hi, I am from [Company]. We need [Qty] uniforms for [use case]. Customisation: [details]. Please share quote.",
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-container overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#0a0a0a] opacity-90" />
        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-24 text-center text-white">
          <span className="label-eyebrow inline-block mb-4">B2B Solutions</span>
          <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Bulk Uniform Supply for Hotels, Schools, Restaurants &amp; Offices
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Premium quality, consistent sizing and custom branding tailored for your institutional needs. 100-piece minimum, 7–14 day lead time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <QuoteButton corporate>Request Corporate Quote</QuoteButton>
            <Link href="#features" className="btn-outline">
              <span>Explore Features</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sector cards */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="label-eyebrow mb-2">Tailored Sector Solutions</p>
          <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight">
            Engineered fabrics for demanding environments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {SECTORS.map((s) => (
            <button
              key={s.title}
              type="button"
              className={`${s.span} ${s.height} group relative bg-surface-container border border-outline-variant rounded-lg overflow-hidden text-left p-6 hover:border-gold transition-colors`}
            >
              <div className="absolute top-4 right-4 text-gold opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-7xl" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {s.icon}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="label-eyebrow mb-2">{s.useCase.toUpperCase()}</p>
                <h3 className="text-xl md:text-2xl font-semibold text-on-surface mb-2">{s.title}</h3>
                <p className="text-sm text-on-surface-variant max-w-md">{s.body}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 md:divide-x divide-outline-variant">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center md:px-4">
                <span className="material-symbols-outlined text-gold text-4xl mb-3" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {f.icon}
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-1">{f.title}</h4>
                <p className="text-sm text-on-surface-variant">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-[3fr_2fr]">
          <div className="p-6 md:p-10">
            <p className="label-eyebrow mb-2">Corporate Inquiry</p>
            <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight">
              Request a corporate quote
            </h2>
            <p className="mt-3 text-base text-on-surface-variant max-w-md">
              Tell us your sector, quantity and customisation needs. We&apos;ll reply with pricing, samples and lead time within 24 hours.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Minimum 100 pieces per design",
                "Lead time: 7–14 days",
                "Custom embroidery & branding available",
                "GST invoice for input tax credit",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-gold text-[18px] mt-0.5" aria-hidden="true">check_circle</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <QuoteButton corporate>Request Quote</QuoteButton>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          <div className="bg-primary-container p-6 md:p-10 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-white/5">
              <span className="material-symbols-outlined text-[260px]" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            </div>
            <div className="relative">
              <h3 className="text-xl font-semibold mb-3">Pre-filled WhatsApp message</h3>
              <p className="text-sm text-white/70 mb-4">
                When you submit, we open WhatsApp with this format:
              </p>
              <pre className="bg-black/40 border border-white/10 rounded p-4 text-xs text-white/80 whitespace-pre-wrap font-mono">
{`Hi, I am from [Company].
We need [Qty] [Category] for [use case].
Customisation: [details].
Please share quote.`}
              </pre>
              <p className="mt-5 text-xs uppercase tracking-widest text-gold">Avg response: 15 mins</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
