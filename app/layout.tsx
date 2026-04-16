import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import { NavbarGlass } from "@/components/blocks/NavbarGlass";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SSA Watches — Ultra-Luxury Timepieces",
  description:
    "SSA Watches crafts ultra-luxury mechanical timepieces in the $3,000–$10,000 range—precision engineering, sapphire crystal, and timeless design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* Navbar must be full width and fixed */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            logo="SSA Watches"
            navItems={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
              { label: "Portfolio", href: "/portfolio" },
            ]}
            ctaLabel="View Catalog"
            ctaHref="/pricing"
          />
        </div>

        {/* Offset for fixed navbar */}
        <main className="pt-20">{children}</main>

        <FooterMultiColumn
          brand="SSA Watches"
          description="Ultra-luxury mechanical timepieces in the $3,000–$10,000 range. Crafted for collectors who demand precision, restraint, and presence."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Portfolio", href: "/portfolio" },
              ],
            },
            {
              title: "Concierge",
              links: [
                { label: "Contact", href: "/contact" },
                { label: "Request a Viewing", href: "/contact" },
                { label: "Warranty & Care", href: "/services" },
                { label: "Shipping & Returns", href: "/services" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "/contact" },
                { label: "Terms", href: "/contact" },
              ],
            },
          ]}
          copyright="© 2026 SSA Watches. All rights reserved."
        />
      </body>
    </html>
  );
}
