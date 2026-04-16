"use client";

import { motion } from "framer-motion";
import { FeaturesCards3D } from "@/components/blocks/FeaturesCards3D";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src="/images/product-2.png"
            alt="SSA Watches services"
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
            Concierge & Care
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-white/80"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Premium ownership is more than the watch. We support your purchase with white-glove
            delivery, warranty coverage, and long-term care guidance.
          </motion.p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <FeaturesCards3D
          badge="Services"
          headline="Everything you need, handled."
          subheadline="A boutique experience—online."
          features={[
            {
              icon: "📏",
              title: "Sizing & Fit Guidance",
              description:
                "Strap and bracelet sizing recommendations before purchase, plus post-delivery adjustments.",
            },
            {
              icon: "🧾",
              title: "Authentication & Documentation",
              description:
                "Full documentation, serial verification, and care instructions included with every piece.",
            },
            {
              icon: "🛡️",
              title: "Warranty Support",
              description:
                "5-year warranty coverage with a straightforward concierge-led process.",
            },
            {
              icon: "🚚",
              title: "Insured Shipping",
              description:
                "Secure, insured delivery with premium packaging and signature confirmation.",
            },
            {
              icon: "🧼",
              title: "Care & Maintenance",
              description:
                "Guidance on cleaning, storage, water exposure, and recommended service intervals.",
            },
            {
              icon: "🔁",
              title: "Returns & Exchanges",
              description:
                "Clear policies designed for confidence—handled quickly by our concierge team.",
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
        <FAQAccordion
          headline="Service FAQ"
          subheadline="Quick answers for collectors."
          items={[
            {
              question: "Do you offer international shipping?",
              answer:
                "Yes—insured international shipping is available. Delivery timelines and duties vary by destination.",
            },
            {
              question: "What does the 5-year warranty cover?",
              answer:
                "Manufacturing defects and movement-related issues under normal use. Our concierge will guide you through any claim.",
            },
            {
              question: "How do I choose the right size?",
              answer:
                "Contact concierge with your wrist size and preferred fit. We’ll recommend strap/bracelet sizing and wearing style.",
            },
            {
              question: "Can I request a viewing or consultation?",
              answer:
                "Yes—book a concierge consultation via the Contact page for availability, comparisons, and recommendations.",
            },
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
          headline="Need help choosing the right piece?"
          description="Tell us your style, wrist size, and use-case—our concierge will recommend the best match."
          ctaLabel="Contact Concierge"
          ctaHref="/contact"
          secondaryCtaLabel="View Pricing"
          secondaryCtaHref="/pricing"
        />
      </motion.section>
    </div>
  );
}
