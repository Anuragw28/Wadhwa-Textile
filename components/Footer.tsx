import Link from "next/link";
import { buildWhatsAppUrl, WA_MESSAGES, BUSINESS_PHONE_DISPLAY, BUSINESS_EMAIL } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const wa = buildWhatsAppUrl(WA_MESSAGES.generic);
  return (
    <footer className="bg-header-bg border-t border-header-border text-header-text-muted mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="text-lg font-bold text-header-text uppercase tracking-tight mb-3">
            Wadhwa Textiles
          </div>
          <p className="text-xs uppercase tracking-widest text-header-text-muted">
            GST Registered · Delhi, India
          </p>
          <p className="text-xs uppercase tracking-widest text-header-text-muted mt-1">
            © 2026 Wadhwa Textiles
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-header-text mb-3 font-bold">Catalogue</h4>
          <ul className="space-y-2 text-xs uppercase tracking-widest">
            <li><Link href="/catalogue" className="hover:text-gold transition-colors">Full Catalogue</Link></li>
            <li><Link href="/category/t-shirts" className="hover:text-gold transition-colors">T-Shirts</Link></li>
            <li><Link href="/category/lowers" className="hover:text-gold transition-colors">Lowers & Tracks</Link></li>
            <li><Link href="/category/jackets" className="hover:text-gold transition-colors">Jackets & Hoodies</Link></li>
            <li><Link href="/category/kids" className="hover:text-gold transition-colors">Baby & Kids</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-header-text mb-3 font-bold">Company</h4>
          <ul className="space-y-2 text-xs uppercase tracking-widest">
            <li><Link href="/corporate" className="hover:text-gold transition-colors">Corporate</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-header-text mb-3 font-bold">Reach Us</h4>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-whatsapp hover:text-white transition-colors mb-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>{BUSINESS_PHONE_DISPLAY}</span>
          </a>
          <p className="text-xs uppercase tracking-widest break-all">{BUSINESS_EMAIL}</p>
          <p className="text-xs uppercase tracking-widest mt-2">Mon–Sat · 10am–7pm IST</p>
        </div>
      </div>
    </footer>
  );
}
