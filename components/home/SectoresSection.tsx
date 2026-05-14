"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Globe2,
  Building2,
  ShoppingBag,
  Car,
  University,
} from "lucide-react";

const sectores = [
  { icon: Landmark, label: "Bancos" },
  { icon: Globe2, label: "Embajadas" },
  { icon: Building2, label: "Oficinas corporativas" },
  { icon: ShoppingBag, label: "Retail y comercio" },
  { icon: Car, label: "Concesionarios" },
  { icon: University, label: "Instituciones" },
];

export default function SectoresSection() {
  return (
    <section className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-14 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-[10px] font-medium tracking-[0.25em] uppercase">
              Sectores
            </span>
            <div className="h-px w-14 bg-[#C5A55A]" />
          </div>
          <h2 className="text-4xl md:text-[2.75rem] font-light text-white mb-5 tracking-tight leading-tight">
            Orientados a clientes{" "}
            <span className="text-[#C5A55A] italic">
              corporativos e institucionales.
            </span>
          </h2>
          <p className="text-white/35 font-light max-w-xl mx-auto leading-relaxed">
            Zentor desarrolla soluciones adaptadas a organizaciones que requieren
            formalidad, capacidad de respuesta y ejecución organizada.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-white/[0.05]">
          {sectores.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex flex-col items-center justify-center py-12 px-4 border-r border-b border-white/[0.05] hover:bg-[#111111] transition-all duration-400 cursor-default"
              >
                <div className="mb-4">
                  <Icon
                    size={26}
                    className="text-white/20 group-hover:text-[#C5A55A] transition-colors duration-400"
                    strokeWidth={1.25}
                  />
                </div>
                <span className="text-[11px] text-white/30 text-center group-hover:text-white/60 transition-colors duration-400 font-medium tracking-wide leading-snug">
                  {sector.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
