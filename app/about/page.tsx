"use client";

import { motion } from "framer-motion";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src="/images/product-1.png"
            alt="SSA Watches craftsmanship"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
        </div>

        <div className="relative container mx-auto max-w-7xl px-4 py-20 md:py-28">
          <motion.p
            className="text-sm uppercase tracking-widest text-[var(--accent)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            About SSA Watches
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl md:text-6xl font-semibold text-white"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            Modern horology with a disciplined luxury code.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-white/80"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            SSA Watches exists for collectors who want premium materials, precise engineering,
            and a design language that stays timeless. Our pieces live comfortably in the
            $3,000–$10,000 range—built to be worn daily and kept for decades.
          </motion.p>
        </div>
      </section>

      <motion.section
        className="py-16 md:py-20"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <StickyScrollReveal
            content={[
              {
                title: "Design restraint",
                description:
                  "A dial should read instantly. Our typography, indices, and gold accents are calibrated for clarity and presence—never noise.",
                content: (
                  <img
                    src="/images/product-2.png"
                    alt="Dial design"
                    className="h-full w-full rounded-xl object-cover"
                  />
                ),
              },
              {
                title: "Material honesty",
                description:
                  "Sapphire crystal, robust cases, and finishing that holds up under scrutiny—because luxury is what remains after the novelty fades.",
                content: (
                  <img
                    src="/images/product-3.png"
                    alt="Case finishing"
                    className="h-full w-full rounded-xl object-cover"
                  />
                ),
              },
              {
                title: "Collector-first experience",
                description:
                  "Concierge support, insured delivery, and long-term care guidance—built for the way enthusiasts actually buy and own watches.",
                content: (
                  <img
                    src="/images/product-1.png"
                    alt="Packaging and delivery"
                    className="h-full w-full rounded-xl object-cover"
                  />
                ),
              },
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <TeamGrid
          headline="The people behind the precision"
          subheadline="A small, obsessive team focused on engineering, finishing, and the collector experience."
          members={[
            {
              name: "S. Saeed",
              title: "Founder & Creative Direction",
              bio: "Defines the SSA design code—bold typography, disciplined layouts, and signature gold accents.",
              imageUrl: "/images/team-1.png",
            },
            {
              name: "A. Noor",
              title: "Quality & Regulation",
              bio: "Leads testing, regulation, and final inspection to ensure consistent performance.",
              imageUrl: "/images/team-2.png",
            },
            {
              name: "M. Iqbal",
              title: "Concierge Lead",
              bio: "Guides clients through sizing, availability, delivery, and long-term care.",
              imageUrl: "/images/team-2.png",
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
          headline="Craft details, up close"
          subheadline="A glimpse into the surfaces, edges, and light-play that define SSA."
          images={[
            { url: "/images/product-1.png", alt: "Watch detail 1", caption: "Polished chamfers" },
            { url: "/images/product-2.png", alt: "Watch detail 2", caption: "Dial typography" },
            { url: "/images/product-3.png", alt: "Watch detail 3", caption: "Crown & knurling" },
            { url: "/images/product-2.png", alt: "Watch detail 4", caption: "Bracelet finishing" },
            { url: "/images/product-1.png", alt: "Watch detail 5", caption: "Gold accents" },
            { url: "/images/product-2.png", alt: "Watch detail 6", caption: "Sapphire clarity" },
          ]}
        />
      </motion.section>
    </div>
  );
}
