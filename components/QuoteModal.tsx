"use client";

import { useEffect, useState } from "react";
import { useQuote } from "./QuoteProvider";
import { buildQuoteMessage, buildCorporateMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { CATEGORIES } from "@/lib/categories";
import WhatsAppIcon from "./WhatsAppIcon";

export default function QuoteModal() {
  const { isOpen, close, defaultCategory, defaultUseCase, isCorporate } = useQuote();
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [customisation, setCustomisation] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setCategory(defaultCategory ?? "");
      setErrors({});
    }
  }, [isOpen, defaultCategory]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Required";
    if (!phone.trim()) e.phone = "Required";
    if (!city.trim()) e.city = "Required";
    if (!category.trim()) e.category = "Required";
    if (!quantity.trim()) e.quantity = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const msg = isCorporate
      ? buildCorporateMessage({
          company: business,
          quantity,
          category,
          useCase: defaultUseCase,
          customisation,
        })
      : buildQuoteMessage({ name, business, city, category, quantity, customisation });
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    close();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm p-0 md:p-4"
      onClick={close}
    >
      <div
        className="w-full md:max-w-2xl bg-surface-container border border-outline-variant rounded-t-lg md:rounded-lg shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-outline-variant px-5 md:px-7 py-4">
          <div>
            <p className="label-eyebrow">Bulk Inquiry</p>
            <h2 id="quote-modal-title" className="text-xl md:text-2xl font-semibold text-on-surface mt-1">
              {isCorporate ? "Corporate Quote Request" : "Get a Bulk Quote"}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="w-9 h-9 inline-flex items-center justify-center rounded hover:bg-surface-container-high text-on-surface-variant"
          >
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </div>

        <form onSubmit={submit} className="px-5 md:px-7 py-5 md:py-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label={isCorporate ? "Contact Person *" : "Your Name *"} error={errors.name}>
              <input className="input-field" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
            </Field>
            <Field label={isCorporate ? "Company Name *" : "Business Name"}>
              <input className="input-field" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="e.g. Sharma Garments" />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Phone / WhatsApp *" error={errors.phone}>
              <input className="input-field" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 ..." />
            </Field>
            <Field label="City *" error={errors.city}>
              <input className="input-field" value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Mumbai" />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="What are you looking for? *" error={errors.category}>
              <select className="input-field" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
                <option value="Mixed Order">Mixed Order</option>
                <option value="Corporate / Uniform">Corporate / Uniform</option>
              </select>
            </Field>
            <Field label="Approx. quantity needed *" error={errors.quantity}>
              <input className="input-field" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="e.g. 500 pcs" />
            </Field>
          </div>
          {isCorporate && (
            <Field label="Customisation needed (branding, embroidery, etc.)">
              <textarea
                className="input-field min-h-[88px]"
                value={customisation}
                onChange={(e) => setCustomisation(e.target.value)}
                placeholder="Logo placement, fabric preferences, colour requirements…"
              />
            </Field>
          )}

          <div className="rounded bg-surface-container-low border border-outline-variant px-4 py-3 text-xs text-on-surface-variant">
            On submit, this opens WhatsApp with a pre-filled message to <span className="font-semibold text-on-surface">+91 70113 88455</span>. We typically reply within 24 hours.
          </div>

          <div className="flex flex-col-reverse md:flex-row md:justify-end gap-3 pt-2">
            <button type="button" onClick={close} className="text-sm font-medium text-on-surface-variant hover:text-on-surface px-4 py-3">
              Cancel
            </button>
            <button type="submit" className="btn-whatsapp">
              <WhatsAppIcon className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
        {label}
      </span>
      {children}
      {error && <span className="block text-xs text-red-500 mt-1">{error}</span>}
    </label>
  );
}
