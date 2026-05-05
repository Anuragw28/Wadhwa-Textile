import QuoteButton from "@/components/QuoteButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl, WA_MESSAGES, BUSINESS_PHONE_DISPLAY, BUSINESS_EMAIL } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact Us | Wadhwa Textiles",
  description:
    "Get in touch with Wadhwa Textiles for bulk wholesale clothing orders. WhatsApp, email or visit our Delhi showroom by appointment.",
};

const INFO = [
  {
    icon: "call",
    label: "Phone / WhatsApp",
    value: BUSINESS_PHONE_DISPLAY,
    href: buildWhatsAppUrl(WA_MESSAGES.generic),
  },
  {
    icon: "mail",
    label: "Email",
    value: BUSINESS_EMAIL,
    href: `mailto:${BUSINESS_EMAIL}`,
  },
  {
    icon: "schedule",
    label: "Business Hours",
    value: "Mon–Sat · 10:00 am – 7:00 pm IST",
  },
  {
    icon: "location_on",
    label: "Showroom",
    value: "Delhi, India · By appointment",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="border-b border-outline-variant pb-8 mb-10">
        <p className="label-eyebrow mb-2">Reach Us</p>
        <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-on-surface">
          Get in touch with our wholesale team
        </h1>
        <p className="mt-3 text-base text-on-surface-variant max-w-2xl">
          The fastest way to reach us is WhatsApp — average reply time is 15 minutes during business hours. Use the form for a structured inquiry, or call directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8">
        <div className="space-y-5">
          <a
            href={buildWhatsAppUrl(WA_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="bg-surface-container border border-outline-variant rounded p-6">
            <h2 className="text-base font-semibold text-gold border-b border-outline-variant pb-3 mb-4">
              Business Information
            </h2>
            <ul className="space-y-4">
              {INFO.map((i) => (
                <li key={i.label} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant mt-0.5" aria-hidden="true">{i.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] uppercase tracking-widest text-on-surface-muted mb-0.5">{i.label}</div>
                    {i.href ? (
                      <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-on-surface hover:text-gold break-words">
                        {i.value}
                      </a>
                    ) : (
                      <div className="text-sm text-on-surface">{i.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded overflow-hidden h-[260px] relative">
            <iframe
              title="Wadhwa Textiles · Delhi"
              src="https://www.google.com/maps?q=Delhi,India&output=embed"
              loading="lazy"
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-surface-container border border-outline-variant rounded p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-on-surface mb-1">Send a structured inquiry</h2>
          <p className="text-sm text-on-surface-variant mb-6">
            We&apos;ll respond on WhatsApp within 24 business hours.
          </p>
          <p className="text-sm text-on-surface-variant mb-6">
            For bulk pricing, MOQ details, customisation requests or vendor onboarding — open the quote form below. It collects the basics and pre-fills your WhatsApp message.
          </p>
          <QuoteButton className="w-full">
            Open Quote Form
          </QuoteButton>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-on-surface-variant">
            <div className="bg-surface-container-low rounded p-4">
              <div className="text-[11px] uppercase tracking-widest text-on-surface-muted mb-1">Avg reply</div>
              <div className="text-on-surface font-semibold">15 minutes</div>
            </div>
            <div className="bg-surface-container-low rounded p-4">
              <div className="text-[11px] uppercase tracking-widest text-on-surface-muted mb-1">Min order</div>
              <div className="text-on-surface font-semibold">20 pcs +</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
