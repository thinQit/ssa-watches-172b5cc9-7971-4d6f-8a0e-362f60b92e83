"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/blocks/ContactForm";
import { LogoCloud } from "@/components/blocks/LogoCloud";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src="/images/product-3.png"
            alt="SSA Watches concierge"
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
            Contact Concierge
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-white/80"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Availability, sizing, recommendations, and delivery—handled with boutique-level care.
          </motion.p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <ContactForm
          headline="Send an inquiry"
          subheadline="We typically respond within 1 business day."
          contactInfo={[
            { icon: "✉️", label: "Email", value: "concierge@ssawatches.com" },
            { icon: "📞", label: "Phone", value: "+1 (555) 010-2026" },
            { icon: "📍", label: "Studio", value: "By appointment — New York, NY" },
          ]}
        />
      </motion.section>

      <motion.section
        className="border-t border-border"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <LogoCloud
          headline="Secure checkout-ready experience (static demo)"
          logos={[
            { name: "Insured Shipping", imageUrl: "/images/logo-6.png" },
            { name: "Secure Payments", imageUrl: "/images/logo-7.png" },
            { name: "Warranty", imageUrl: "/images/logo-8.png" },
            { name: "Concierge", imageUrl: "/images/logo-9.png" },
          ]}
        />
      </motion.section>
    </div>
  );
}
