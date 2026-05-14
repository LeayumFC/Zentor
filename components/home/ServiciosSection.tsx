"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Paintbrush2, Wrench, BarChart3, ArrowRight } from "lucide-react";

const servicios = [
  {
    icon: Building2,
    number: "01",
    title: "Construcción y obras civiles",
    description:
      "Ejecución de infraestructura, ampliaciones, adecuaciones y proyectos de obra con enfoque en planificación y cumplimiento.",
  },
  {
    icon: Paintbrush2,
    number: "02",
    title: "Remodelación y adecuación",
    description:
      "Transformación y optimización de oficinas, sucursales, showrooms y espacios corporativos.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Mantenimiento e infraestructura",
    description:
      "Servicios preventivos, correctivos y de optimización orientados a mantener la continuidad operativa de cada espacio.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Gestión y supervisión",
    description:
      "Coordinación, planificación, control operativo y seguimiento técnico durante cada etapa del proyecto.",
  },
];

export default function ServiciosSection() {
  return (
    <section className="py-32 bg-[#0F2234]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C7AB65]" />
              <span className="text-[#C7AB65] text-[10px] font-medium tracking-[0.25em] uppercase">
                Servicios
              </span>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] font-light text-white leading-tight tracking-tight">
              Soluciones de infraestructura{" "}
              <span className="text-[#C7AB65] italic">y ejecución.</span>
            </h2>
            <p className="text-white/35 font-light mt-5 max-w-lg leading-relaxed">
              Desarrollamos servicios orientados a empresas, instituciones y
              espacios comerciales que requieren ejecución organizada y atención
              profesional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#C7AB65] transition-colors duration-300 tracking-wide uppercase font-medium"
            >
              Ver todos los servicios
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Services list */}
        <div>
          {servicios.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex items-start gap-6 md:gap-10 py-8 border-b border-white/[0.06] hover:border-[#C7AB65]/15 transition-colors duration-400 cursor-default"
              >
                {/* Number */}
                <span className="text-xs font-light text-[#C7AB65]/25 group-hover:text-[#C7AB65]/60 transition-colors duration-300 w-6 flex-shrink-0 mt-1.5 tracking-wider">
                  {s.number}
                </span>
                {/* Icon */}
                <div className="w-10 h-10 flex-shrink-0 border border-white/[0.07] group-hover:border-[#C7AB65]/25 flex items-center justify-center transition-colors duration-400">
                  <Icon
                    size={17}
                    className="text-white/25 group-hover:text-[#C7AB65] transition-colors duration-400"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white/80 group-hover:text-white mb-2 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed font-light max-w-2xl">
                    {s.description}
                  </p>
                </div>
                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  <ArrowRight size={15} className="text-[#C7AB65]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
