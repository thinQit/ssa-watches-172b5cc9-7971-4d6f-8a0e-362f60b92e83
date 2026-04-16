"use client";

import { motion } from "framer-motion";
import { HeroSpotlight } from "@/components/blocks/HeroSpotlight";
import { LogoCloud } from "@/components/blocks/LogoCloud";
import { FeaturesCards3D } from "@/components/blocks/FeaturesCards3D";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";
import { CTAGlass } from "@/components/blocks/CTAGlass";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero with dark overlay + white text requirement */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="SSA Watches hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
        </div>

        <div className="relative">
          <HeroSpotlight
            badge="Digital Horologist Collection"
            headline="SSA Watches — Precision, Presence, Permanence."
            subheadline="Ultra-luxury mechanical timepieces crafted for collectors. Sapphire crystal, meticulous finishing, and restrained design—positioned in the $3,000–$10,000 range."
            primaryCta={{ label: "Explore the Collection", href: "/pricing" }}
            secondaryCta={{ label: "Speak to Concierge", href: "/contact" }}
          />
        </div>
      </section>

      <motion.section
        className="py-10 md:py-14 border-t border-border"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <LogoCloud
          headline="As seen in collector circles & editorial watch culture"
          logos={[
            { name: "Horology Weekly", imageUrl: "/images/logo-1.png" },
            { name: "The Time Standard", imageUrl: "/images/logo-2.png" },
            { name: "Midnight Review", imageUrl: "/images/logo-3.png" },
            { name: "Atelier Journal", imageUrl: "/images/logo-4.png" },
            { name: "Collector Index", imageUrl: "/images/logo-5.png" },
          ]}
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <FeaturesCards3D
          badge="Craft & Specification"
          headline="Built like an heirloom. Engineered like an instrument."
          subheadline="Every SSA piece is designed for daily wear with uncompromising materials—then finished for the showcase."
          features={[
            {
              icon: "🟡",
              title: "Sapphire Crystal",
              description:
                "Scratch-resistant sapphire with anti-reflective coating for clarity under any light.",
            },
            {
              icon: "⚙️",
              title: "Mechanical Precision",
              description:
                "Regulated movements and rigorous QC—accuracy you can feel at every tick.",
            },
            {
              icon: "🛡️",
              title: "Case & Finishing",
              description:
                "Deep brushing, polished chamfers, and crisp geometry—luxury you notice up close.",
            },
            {
              icon: "🌊",
              title: "Everyday Durability",
              description:
                "Built for real life: robust sealing, dependable crowns, and confident wearability.",
            },
            {
              icon: "✨",
              title: "Gold Accents",
              description:
                "Signature gold detailing that elevates the dial without shouting—pure restraint.",
            },
            {
              icon: "📦",
              title: "White-Glove Delivery",
              description:
                "Insured shipping, premium packaging, and concierge support from order to wrist.",
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
        <StatsCounter
          bgColor="bg-secondary text-secondary-foreground"
          stats={[
            { value: "3K–10K", label: "Price Range (USD)" },
            { value: "5-YR", label: "Warranty Coverage" },
            { value: "72H", label: "Power Reserve (Select Models)" },
            { value: "24/7", label: "Concierge Support" },
          ]}
        />
      </motion.section>

      <motion.section
        className="border-t border-border"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <TestimonialsAnimated
          headline="Trusted by collectors who value restraint."
          subheadline="A premium experience from first click to first wear."
          testimonials={[
            {
              quote:
                "The finishing is unreal at this price point—clean dial, sharp case lines, and a presence that feels far above its tier.",
              name: "A. Rahman",
              designation: "Collector",
              src: "/images/product-1.png",
            },
            {
              quote:
                "Concierge was fast, knowledgeable, and the delivery presentation was genuinely boutique-level.",
              name: "S. Patel",
              designation: "First-time buyer",
              src: "/images/product-2.png",
            },
            {
              quote:
                "Understated luxury done right. The gold accents are subtle, not flashy—exactly what I wanted.",
              name: "M. Chen",
              designation: "Design lead",
              src: "/images/product-3.png",
            },
          ]}
          autoplay
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <CTAGlass
          headline="Ready to find your next signature piece?"
          description="Explore the collection, compare tiers, and speak with our concierge for sizing, availability, and delivery timelines."
          ctaLabel="Browse Pricing & Models"
          ctaHref="/pricing"
          secondaryCtaLabel="Contact Concierge"
          secondaryCtaHref="/contact"
        />
      </motion.section>
    </div>
  );
}
