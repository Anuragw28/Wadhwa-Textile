"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";
import QuoteButton from "./QuoteButton";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "Catalogue", href: "/catalogue" },
  { label: "Corporate", href: "/corporate" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const reorderUrl = buildWhatsAppUrl(WA_MESSAGES.reorder);

  return (
    <header className="sticky top-0 z-40 bg-header-bg border-b border-header-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Logo.png"
            alt="Wadhwa Textiles"
            width={56}
            height={56}
            className="h-10 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-header-text-muted hover:text-header-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={reorderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-xs lg:text-sm text-header-text-muted hover:text-gold transition-colors"
          >
            Returning Buyer?
          </a>
          <ThemeToggle />
          <div className="hidden sm:block">
            <QuoteButton>Get Quote</QuoteButton>
          </div>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-header-border text-header-text"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-header-border bg-header-bg">
          <nav className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-header-text-muted hover:text-header-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={reorderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-sm font-medium text-header-text-muted hover:text-gold"
            >
              Returning Buyer? → WhatsApp reorder
            </a>
            <div className="pt-2 sm:hidden">
              <QuoteButton className="w-full">Get Quote</QuoteButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
