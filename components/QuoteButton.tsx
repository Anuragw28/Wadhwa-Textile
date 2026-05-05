"use client";

import { ReactNode } from "react";
import { useQuote } from "./QuoteProvider";

type Props = {
  className?: string;
  category?: string;
  useCase?: string;
  corporate?: boolean;
  children?: ReactNode;
  variant?: "primary" | "outline";
};

export default function QuoteButton({
  className,
  category,
  useCase,
  corporate,
  children = "Get Quote",
  variant = "primary",
}: Props) {
  const { open } = useQuote();
  const base = variant === "primary" ? "btn-primary" : "btn-outline";
  return (
    <button
      type="button"
      className={`${base} ${className ?? ""}`}
      onClick={() => open({ category, useCase, corporate })}
    >
      {children}
    </button>
  );
}
