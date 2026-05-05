import QuoteButton from "@/components/QuoteButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata = {
  title: "About Wadhwa Textiles | Wholesale Clothing Supplier Delhi",
  description:
    "A Delhi family-run wholesale clothing business supplying retailers across India for over 15 years. GST compliant, pan-India dispatch, repeat-buyer pricing.",
};

const VALUES = [
  {
    icon: "verified",
    title: "Quality You Can Repeat",
    body: "Consistent fabric, sizing and finish across every order — what you receive on your 10th order matches the 1st.",
  },
  {
    icon: "receipt_long",
    title: "GST Compliant Always",
    body: "Every dispatch ships with a proper GST invoice — claim your input tax credit without paperwork chase.",
  },
  {
    icon: "local_shipping",
    title: "Fast Delhi Dispatch",
    body: "Stocked categories ship within 48 hours. Custom orders on a 7–14 day lead time.",
  },
  {
    icon: "handshake",
    title: "Built on Relationships",
    body: "500+ retailers reorder from us. Repeat-buyer pricing and same-day quote turnarounds keep them coming back.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary-container">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-24 text-white">
          <p className="label-eyebrow mb-3">Our Story</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            Supplying India&apos;s retailers for over 15 years.
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl">
            Wadhwa Textiles is a Delhi-based family wholesale business — supplying lowers, jackets, t-shirts, kids wear, handkerchiefs, ties, caps and uniforms to retailers and corporates across the country.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="label-eyebrow mb-2">Where we come from</p>
          <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight mb-5">
            A Delhi wholesale market story
          </h2>
          <div className="space-y-4 text-base text-on-surface-variant leading-relaxed">
            <p>
              We started with a small counter in the Delhi wholesale market and grew one repeat-buyer at a time. Today, hundreds of small-shop owners in Tier 2 and Tier 3 cities — and a growing list of corporate buyers — depend on us to keep their shelves and uniform programmes stocked.
            </p>
            <p>
              The business runs on three things: quality you can reorder, prices that work for retailers, and fast WhatsApp service so you never wait. The website is just the new front door — the relationships happen on chat.
            </p>
            <p>
              Operations stay in Delhi: warehouse, dispatch and customisation all under one roof. That&apos;s how we keep timelines tight and pricing honest.
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "15+", l: "Years in Business" },
              { v: "500+", l: "Retail Clients" },
              { v: "20+", l: "Categories" },
              { v: "Pan India", l: "Reach" },
            ].map((s) => (
              <div key={s.l} className="bg-surface-container border border-outline-variant rounded p-6">
                <div className="text-3xl md:text-4xl font-bold text-gold leading-none">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-on-surface-variant">{s.l}</div>
              </div>
            ))}
          </div>
          <a
            href={buildWhatsAppUrl(WA_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 btn-whatsapp w-full"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Talk to us on WhatsApp</span>
          </a>
        </div>
      </section>

      <section className="bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="text-center mb-10">
            <p className="label-eyebrow mb-2">What We Stand For</p>
            <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight">
              Four things every buyer can count on
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-surface-container border border-outline-variant rounded p-6">
                <span className="material-symbols-outlined text-gold text-4xl mb-3" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {v.icon}
                </span>
                <h3 className="text-base font-semibold text-on-surface mb-2">{v.title}</h3>
                <p className="text-sm text-on-surface-variant">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
        <p className="label-eyebrow mb-2">Ready to Stock Up?</p>
        <h2 className="text-2xl md:text-[32px] font-semibold text-on-surface tracking-tight max-w-2xl mx-auto">
          Tell us what you need. We&apos;ll send pricing within the day.
        </h2>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <QuoteButton>Get a Bulk Quote</QuoteButton>
          <a href={buildWhatsAppUrl(WA_MESSAGES.generic)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </section>
    </>
  );
}
