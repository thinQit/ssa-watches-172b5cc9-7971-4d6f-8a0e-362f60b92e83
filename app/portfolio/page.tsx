"use client";

import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/effects/TracingBeam";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src="/images/product-1.png"
            alt="SSA Watches portfolio"
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
            Portfolio
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-white/80"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            A curated look at SSA’s design language—geometry, finishing, and the signature gold accent.
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
          <TracingBeam>
            <div className="space-y-10">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold">Project: Obsidian Dial System</h2>
                <p className="mt-3 text-muted-foreground">
                  A clarity-first dial architecture with bold typography and disciplined spacing—built to read instantly.
                </p>
                <img
                  src="/images/product-1.png"
                  alt="Obsidian dial system"
                  className="mt-6 h-64 w-full rounded-xl object-cover"
                />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold">Project: Charcoal Case Geometry</h2>
                <p className="mt-3 text-muted-foreground">
                  Crisp edges, polished chamfers, and deep brushing tuned for light-play in low-key environments.
                </p>
                <img
                  src="/images/product-2.png"
                  alt="Charcoal case geometry"
                  className="mt-6 h-64 w-full rounded-xl object-cover"
                />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold">Project: Aurum Accent Program</h2>
                <p className="mt-3 text-muted-foreground">
                  Gold accents applied with restraint—enough to signal luxury, never enough to overwhelm.
                </p>
                <img
                  src="/images/product-3.png"
                  alt="Aurum accent program"
                  className="mt-6 h-64 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </TracingBeam>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <GalleryMasonry
          headline="Visual studies"
          subheadline="Details that define the brand."
          images={[
            { url: "/images/product-1.png", alt: "Study 1" },
            { url: "/images/product-2.png", alt: "Study 2" },
            { url: "/images/product-3.png", alt: "Study 3" },
            { url: "/images/product-1.png", alt: "Study 4" },
            { url: "/images/product-3.png", alt: "Study 5" },
            { url: "/images/product-3.png", alt: "Study 6" },
          ]}
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <TestimonialsAnimated
          headline="Collector reactions"
          subheadline="What people notice first."
          testimonials={[
            {
              quote:
                "The dial is so clean it feels expensive before you even notice the finishing.",
              name: "J. Williams",
              designation: "Collector",
              src: "/images/product-2.png",
            },
            {
              quote:
                "The casework catches light in a subtle way—luxury without the flash.",
              name: "N. Khan",
              designation: "Enthusiast",
              src: "/images/product-3.png",
            },
          ]}
        />
      </motion.section>
    </div>
  );
}
