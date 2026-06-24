import type { Metadata } from "next";
import localFont from "next/font/local";
import { Marhey, Readex_Pro, Tajawal, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { StickyCTAs } from "@/components/shared/StickyCTAs";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const tsTarek = Readex_Pro({
  subsets: ["arabic"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daralalammovers.com"),
  title: "شركة دار العلم نقل اثاث دبي",
  description:
    "شركة نقل اثاث دبي بخبرة تتجاوز 15 عامًا — رد فوري خلال 10 دقائق، معاينة وعرض سعر مجاني، تأمين شامل.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn(tajawal.className, tsTarek.variable, "font-sans", geist.variable)}
    >
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTAs />
      </body>
    </html>
  );
}
