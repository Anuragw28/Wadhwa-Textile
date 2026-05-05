import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "@/lib/categories";
import QuoteButton from "@/components/QuoteButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return { title: "Category not found" };
  return {
    title: `${cat.name} — Wholesale Catalogue | Wadhwa Textiles`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();

  const wa = buildWhatsAppUrl(WA_MESSAGES.category(cat.name));

  return (
    <>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant">
          <Link href="/" className="hover:text-gold">Home</Link>
          <span className="material-symbols-outlined text-base" aria-hidden="true">chevron_right</span>
          <Link href="/catalogue" className="hover:text-gold">Catalogue</Link>
          <span className="material-symbols-outlined text-base" aria-hidden="true">chevron_right</span>
          <span className="text-on-surface">{cat.name}</span>
        </nav>

        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 border-b border-outline-variant">
          <div>
            <p className="label-eyebrow mb-2">Wholesale · MOQ {cat.moq} pcs</p>
            <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-on-surface">{cat.name}</h1>
            <p className="mt-3 text-base text-on-surface-variant max-w-2xl">{cat.description}</p>
          </div>
          <span className="self-start text-xs font-semibold uppercase tracking-widest text-gold border border-gold/40 px-3 py-1.5 rounded">
            Bulk Pricing Available
          </span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pb-24 md:pb-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {cat.products.map((p, i) => (
            <article key={i} className="group flex flex-col bg-surface-container border border-outline-variant rounded overflow-hidden">
              <div className="aspect-[4/5] relative bg-surface-container-high">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-gold text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                  MOQ: {p.moq}
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1.5">
                <h3 className="text-base md:text-lg font-semibold text-on-surface">{p.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gold">{p.variant}</p>
                <div className="mt-2 flex justify-between text-sm text-on-surface-variant">
                  <span>Sizes: {p.sizes}</span>
                  <span>{p.fabric}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sticky sidebar quote */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-surface-container border-t-2 border-gold rounded p-6">
            <p className="label-eyebrow mb-2">Pricing on Request</p>
            <h2 className="text-xl font-semibold text-on-surface mb-2">Request {cat.name} Quote</h2>
            <p className="text-sm text-on-surface-variant mb-5">
              Per-piece prices are shared on WhatsApp. Avg response 15 mins.
            </p>
            <QuoteButton category={cat.name} className="w-full">
              Get Bulk Quote
            </QuoteButton>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full mt-3">
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
            <ul className="mt-6 space-y-2.5 text-xs text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold text-[16px]" aria-hidden="true">check</span>
                GST invoice provided
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold text-[16px]" aria-hidden="true">check</span>
                Pan-India dispatch
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold text-[16px]" aria-hidden="true">check</span>
                Repeat-buyer discounts
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-surface-container border-t border-outline-variant p-3 flex gap-2">
        <QuoteButton category={cat.name} className="flex-1">
          Get Quote
        </QuoteButton>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <WhatsAppIcon className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
