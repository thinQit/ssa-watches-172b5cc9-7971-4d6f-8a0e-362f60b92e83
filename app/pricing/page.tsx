"use client";

import { motion } from "framer-motion";
import { PricingTable } from "@/components/blocks/PricingTable";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { CTAGlass } from "@/components/blocks/CTAGlass";

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src="/images/product-3.png"
            alt="SSA Watches catalog"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
        </div>

        <div className="relative container mx-auto max-w-7xl px-4 py-20 md:py-28">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold text-white"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            Catalog & Pricing
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-white/80"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Three tiers across the $3,000–$10,000 range—each designed with the same SSA restraint,
            elevated materials, and collector-first experience.
          </motion.p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <PricingTable
          headline="Choose your tier"
          subheadline="From entry luxury to flagship finishing—always SSA."
          tiers={[
            {
              name: "Obsidian",
              price: "$3,000",
              period: "starting",
              description: "The essential SSA code: bold clarity, premium materials, daily durability.",
              features: [
                "Sapphire crystal (AR coated)",
                "Signature gold accent detailing",
                "Insured shipping + premium packaging",
                "Concierge sizing guidance",
                "5-year warranty",
              ],
              ctaLabel: "Request Availability",
              ctaHref: "/contact",
            },
            {
              name: "Charcoal",
              price: "$6,500",
              period: "starting",
              description: "Elevated finishing and upgraded components for collectors who notice everything.",
              features: [
                "Enhanced case finishing (polished chamfers)",
                "Upgraded bracelet/strap options",
                "Priority QC & regulation",
                "Concierge consultation",
                "5-year warranty",
              ],
              ctaLabel: "Book a Consultation",
              ctaHref: "/contact",
              highlighted: true,
            },
            {
              name: "Aurum",
              price: "$10,000",
              period: "starting",
              description: "Flagship presentation with the most refined finishing and exclusivity.",
              features: [
                "Flagship finishing package",
                "Limited allocation availability",
                "White-glove delivery coordination",
                "Collector documentation set",
                "5-year warranty + priority support",
              ],
              ctaLabel: "Join the Waitlist",
              ctaHref: "/contact",
            },
          ]}
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <GalleryMasonry
          headline="Collection highlights"
          subheadline="A high-end look at the range—materials, geometry, and light."
          images={[
            { url: "/images/product-1.png", alt: "SSA watch 1", caption: "Obsidian — clarity-first dial" },
            { url: "/images/product-2.png", alt: "SSA watch 2", caption: "Charcoal — refined finishing" },
            { url: "/images/product-3.png", alt: "SSA watch 3", caption: "Aurum — flagship presence" },
            { url: "/images/product-2.png", alt: "SSA watch 4", caption: "Bracelet detail" },
            { url: "/images/product-3.png", alt: "SSA watch 5", caption: "Gold accent signature" },
            { url: "/images/product-2.png", alt: "SSA watch 6", caption: "Sapphire crystal clarity" },
          ]}
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <CTAGlass
          headline="Want a recommendation in under 2 minutes?"
          description="Tell us your wrist size, style preference, and budget—concierge will shortlist the best tier and model."
          ctaLabel="Contact Concierge"
          ctaHref="/contact"
          secondaryCtaLabel="Learn About SSA"
          secondaryCtaHref="/about"
        />
      </motion.section>
    </div>
  );
}
