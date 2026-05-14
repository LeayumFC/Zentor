"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-40 bg-[#0F2234] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C7AB65]/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7AB65]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7AB65]/15 to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-14 bg-[#C7AB65]" />
            <span className="text-[#C7AB65] text-[10px] font-medium tracking-[0.25em] uppercase">
              Contacto
            </span>
            <div className="h-px w-14 bg-[#C7AB65]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-light text-white leading-[1.1] tracking-tight mb-7">
            Hablemos sobre su{" "}
            <span className="text-[#C7AB65] italic">próximo proyecto.</span>
          </h2>

          <p className="text-base text-white/35 leading-relaxed mb-12 font-light">
            Nuestro equipo está preparado para desarrollar soluciones de
            infraestructura adaptadas a las necesidades de su empresa u
            organización.
          </p>

          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#C7AB65] text-black text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#D8C082] transition-all duration-300"
          >
            Solicitar información
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
