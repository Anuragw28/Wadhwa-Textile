import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QuoteProvider } from "@/components/QuoteProvider";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Wadhwa Textiles | Bulk Clothing Wholesale Supplier Delhi",
  description:
    "Wholesale clothing supplier in Delhi. T-shirts, lowers, jackets, kids wear, uniforms. GST compliant. Pan India delivery. WhatsApp for bulk quote.",
  keywords: [
    "wholesale clothing Delhi",
    "bulk t-shirts supplier",
    "uniform manufacturer India",
    "Wadhwa Textiles",
    "B2B clothing wholesale",
  ],
};

const noFlashScript = `
(function(){try{
  var s = localStorage.getItem('wt-theme');
  var d = s ? s === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (d) document.documentElement.classList.add('dark');
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <QuoteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}
