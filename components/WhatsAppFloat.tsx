import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(WA_MESSAGES.generic)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-lg hover:bg-whatsapp-hover transition-colors"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
