"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 subtle-grid" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7AB65]/20 to-transparent" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#C7AB65]/[0.12] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#C7AB65]/[0.08] rounded-full blur-3xl" />
        {/* Corner accents */}
        <div className="absolute top-24 right-16 w-32 h-32 border border-[#C7AB65]/[0.07] hidden lg:block" />
        <div className="absolute top-28 right-20 w-20 h-20 border border-[#C7AB65]/[0.05] hidden lg:block" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-px w-14 bg-[#C7AB65]" />
            <span className="text-[#C7AB65] text-xs font-medium tracking-[0.25em] uppercase">
              Infraestructura Corporativa
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-normal text-[#0F2234] leading-[1.07] tracking-tight mb-8"
          >
            Infraestructura corporativa{" "}
            <br className="hidden md:block" />
            con{" "}
            <span className="text-[#C7AB65] font-normal italic">ejecución</span>{" "}
            profesional.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="text-base md:text-lg text-[#334155] leading-relaxed max-w-2xl mb-14 font-normal"
          >
            Zentor desarrolla soluciones de construcción, remodelación e
            infraestructura para empresas e instituciones, con un enfoque basado
            en organización, planificación y cumplimiento.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C7AB65] text-black text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#D8C082] transition-all duration-300"
            >
              Solicitar cotización
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#0F2234]/15 text-[#334155] text-xs font-medium tracking-[0.12em] uppercase hover:border-white/30 hover:text-[#0F2234] transition-all duration-300"
            >
              Conocer servicios
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-24 pt-10 border-t border-[#0F2234]/[0.09] grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "6+", label: "Sectores atendidos" },
              { value: "B&V", label: "Respaldo grupal" },
              { value: "100%", label: "Proyectos con póliza" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-normal text-[#C7AB65] mb-1.5 tracking-tight">
                  {s.value}
                </div>
                <div className="text-[10px] text-[#334155] uppercase tracking-[0.18em] leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#334155]"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
