export const WHATSAPP_NUMBER = "917011388455";
export const BUSINESS_EMAIL = "wadhwaanu42@gmail.com";
export const BUSINESS_PHONE_DISPLAY = "+91 70113 88455";

export type QuotePayload = {
  name?: string;
  business?: string;
  city?: string;
  category?: string;
  quantity?: string;
  customisation?: string;
  notes?: string;
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  generic:
    "Hi, I am interested in wholesale clothing from Wadhwa Textiles. Please share details.",
  reorder:
    "Hi, I want to reorder. Product: ____. Quantity: ____ pcs. Same specs as last time. Please confirm availability.",
  category: (cat: string) =>
    `Hi, I am interested in bulk ${cat}. Please share pricing and MOQ details.`,
};

export function buildQuoteMessage(p: QuotePayload): string {
  const lines: string[] = [];
  const intro = `Hi, I am ${p.name || "____"} from ${p.city || "____"}.`;
  lines.push(intro);
  if (p.business) lines.push(`Business: ${p.business}.`);
  lines.push(
    `Interested in bulk ${p.category || "clothing"} — approx ${p.quantity || "____"} pcs.`,
  );
  if (p.customisation && p.customisation.trim().length > 0) {
    lines.push(`Customisation: ${p.customisation}.`);
  }
  if (p.notes && p.notes.trim().length > 0) {
    lines.push(`Notes: ${p.notes}.`);
  }
  lines.push("Please share pricing and MOQ details.");
  return lines.join(" ");
}

export function buildCorporateMessage(p: QuotePayload & { company?: string; useCase?: string }): string {
  const company = p.company || p.business || "____";
  return `Hi, I am from ${company}. We need ${p.quantity || "____"} ${p.category || "uniforms"} for ${p.useCase || "our team"}. Customisation: ${p.customisation || "____"}. Please share quote.`;
}
