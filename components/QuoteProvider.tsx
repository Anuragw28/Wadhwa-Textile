"use client";

import { createContext, useCallback, useContext, useState, ReactNode } from "react";

type QuoteContextValue = {
  isOpen: boolean;
  defaultCategory?: string;
  defaultUseCase?: string;
  isCorporate: boolean;
  open: (opts?: { category?: string; useCase?: string; corporate?: boolean }) => void;
  close: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultCategory, setDefaultCategory] = useState<string | undefined>();
  const [defaultUseCase, setDefaultUseCase] = useState<string | undefined>();
  const [isCorporate, setIsCorporate] = useState(false);

  const open = useCallback(
    (opts?: { category?: string; useCase?: string; corporate?: boolean }) => {
      setDefaultCategory(opts?.category);
      setDefaultUseCase(opts?.useCase);
      setIsCorporate(!!opts?.corporate);
      setIsOpen(true);
    },
    [],
  );

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteContext.Provider value={{ isOpen, defaultCategory, defaultUseCase, isCorporate, open, close }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
