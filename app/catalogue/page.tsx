import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";
import QuoteButton from "@/components/QuoteButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata = {
  title: "Full Catalogue | Wadhwa Textiles",
  description:
    "Browse the complete Wadhwa Textiles wholesale catalogue. T-shirts, lowers, jackets, kids wear, accessories and handkerchiefs. Download PDF or request quote on WhatsApp.",
};

export default function CataloguePage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="border-b border-outline-variant pb-8 mb-10">
        <p className="label-eyebrow mb-2">Wholesale Catalogue</p>
        <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-on-surface">
          The complete product range
        </h1>
        <p className="mt-3 text-base text-on-surface-variant max-w-2xl">
          Six core categories supplying retailers and corporates across India. MOQ varies by category — exact pricing is shared via WhatsApp.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <span
            className="btn-primary opacity-70 cursor-not-allowed select-none"
            title="Catalogue PDF — upload to Google Drive and link here before launch"
            aria-disabled="true"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">download</span>
            <span>Download Catalogue PDF (Coming Soon)</span>
          </span>
          <a
            href={buildWhatsAppUrl(WA_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Prefer to talk? WhatsApp us</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((c) => (
          <div key={c.slug} className="bg-surface-container border border-outline-variant rounded overflow-hidden flex flex-col">
            <Link href={`/category/${c.slug}`} className="relative aspect-[4/3] block group">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute top-3 left-3 bg-black/70 text-gold text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                MOQ: {c.moq} pcs
              </span>
            </Link>
            <div className="p-5 flex flex-col gap-2 flex-1">
              <h3 className="text-lg font-semibold text-on-surface">{c.name}</h3>
              <p className="text-sm text-on-surface-variant flex-1">{c.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {c.subcategories.map((sub) => (
                  <span key={sub} className="text-[11px] uppercase tracking-widest text-on-surface-muted border border-outline-variant px-2 py-1 rounded">
                    {sub}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Link href={`/category/${c.slug}`} className="btn-outline flex-1 text-center">
                  View
                </Link>
                <QuoteButton category={c.name} className="flex-1">
                  Quote
                </QuoteButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
