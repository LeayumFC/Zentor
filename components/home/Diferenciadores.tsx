"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  MessageSquare,
  ShieldCheck,
  Truck,
} from "lucide-react";

const cards = [
  {
    icon: ClipboardList,
    title: "Organización y planificación",
    description:
      "Cada proyecto es desarrollado mediante procesos organizados, coordinación eficiente y seguimiento operativo.",
  },
  {
    icon: MessageSquare,
    title: "Atención corporativa",
    description:
      "Zentor prioriza una comunicación clara, atención profesional y relaciones de largo plazo con sus clientes.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo y seguridad",
    description:
      "Todos los proyectos cuentan con respaldo mediante póliza de responsabilidad civil, fortaleciendo la confianza operativa.",
  },
  {
    icon: Truck,
    title: "Capacidad operativa",
    description:
      "El respaldo del grupo Biagi & Varnoux fortalece las capacidades de abastecimiento, logística y coordinación.",
  },
];

export default function Diferenciadores() {
  return (
    <section className="py-32 bg-[#F4F5F8] relative">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-14 bg-[#C7AB65]" />
            <span className="text-[#C7AB65] text-[10px] font-medium tracking-[0.25em] uppercase">
              Diferenciadores
            </span>
            <div className="h-px w-14 bg-[#C7AB65]" />
          </div>
          <h2 className="text-4xl md:text-[2.75rem] font-normal text-[#0F2234] leading-tight tracking-tight max-w-2xl mx-auto">
            Un enfoque corporativo dentro del{" "}
            <span className="text-[#C7AB65] italic">sector construcción.</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#0F2234]/[0.07]">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 lg:p-10 border-r border-b border-[#0F2234]/[0.07] last:border-r-0 hover:bg-[#F0F3F7] transition-colors duration-400 cursor-default overflow-hidden"
              >
                {/* Gold top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C7AB65]/0 via-[#C7AB65] to-[#C7AB65]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon */}
                <div className="mb-8">
                  <div className="w-11 h-11 border border-[#C7AB65]/20 group-hover:border-[#C7AB65]/50 flex items-center justify-center transition-colors duration-400">
                    <Icon
                      size={26}
                      className="text-[#C7AB65]/60 group-hover:text-[#C7AB65] transition-colors duration-400"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-[#0F2234]/90 mb-3 leading-snug tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
