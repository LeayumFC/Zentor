"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Evaluación",
    description:
      "Análisis inicial del proyecto, requerimientos del cliente y condiciones del espacio.",
  },
  {
    number: "02",
    title: "Planificación",
    description:
      "Desarrollo de plan de trabajo, cronograma, presupuesto y definición de recursos.",
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Implementación organizada del proyecto con equipo técnico calificado.",
  },
  {
    number: "04",
    title: "Control",
    description:
      "Seguimiento continuo del avance, calidad y cumplimiento de objetivos.",
  },
  {
    number: "05",
    title: "Entrega",
    description:
      "Verificación final, documentación y entrega formal del proyecto al cliente.",
  },
];

export default function Proceso() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 subtle-grid opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-14 bg-[#C7AB65]" />
            <span className="text-[#C7AB65] text-[10px] font-medium tracking-[0.25em] uppercase">
              Proceso
            </span>
            <div className="h-px w-14 bg-[#C7AB65]" />
          </div>
          <h2 className="text-4xl md:text-[2.75rem] font-light text-[#0F2234] tracking-tight leading-tight">
            Un proceso basado en{" "}
            <span className="text-[#C7AB65] italic">planificación y control.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-6 relative">
          {/* Connector — desktop only */}
          <div className="hidden lg:block absolute top-[22px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#C7AB65]/20 to-transparent pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Step marker */}
              <div className="relative z-10 w-11 h-11 border border-[#C7AB65]/25 group-hover:border-[#C7AB65]/60 bg-white flex items-center justify-center mb-6 transition-colors duration-400">
                <span className="text-[11px] font-medium text-[#C7AB65]/60 group-hover:text-[#C7AB65] tracking-wider transition-colors duration-400">
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[#0F2234] mb-2.5 group-hover:text-[#0F2234] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
