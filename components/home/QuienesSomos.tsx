"use client";

import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (
    <section className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#C5A55A]" />
              <span className="text-[#C5A55A] text-[10px] font-medium tracking-[0.25em] uppercase">
                Quiénes somos
              </span>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] font-light text-white leading-tight mb-10 tracking-tight">
              Una empresa orientada a la ejecución{" "}
              <span className="text-[#C5A55A] italic">organizada</span> y
              profesional.
            </h2>
            <div className="space-y-5 text-white/45 font-light leading-relaxed">
              <p>
                Zentor es una empresa enfocada en construcción, remodelación,
                adecuación e infraestructura corporativa, orientada
                principalmente a clientes empresariales, institucionales y
                comerciales.
              </p>
              <p>
                Como parte del grupo Biagi & Varnoux, la empresa cuenta con
                capacidades complementarias en logística, abastecimiento y
                coordinación operativa, fortaleciendo su capacidad de
                planificación y ejecución.
              </p>
              <p>
                Nuestro enfoque está basado en profesionalismo, estructura
                organizativa y atención corporativa, permitiendo desarrollar
                proyectos con mayor control, eficiencia y capacidad de
                respuesta.
              </p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-[#0f0f0f] overflow-hidden">
              <div className="absolute inset-0 subtle-grid" />
              {/* Corner accents */}
              <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-[#C5A55A]/40" />
              <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-[#C5A55A]/40" />
              <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-[#C5A55A]/40" />
              <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-[#C5A55A]/40" />
              {/* Inner border */}
              <div className="absolute top-12 left-12 right-12 bottom-12 border border-white/[0.04]" />
              {/* Center mark */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="text-5xl font-light text-white/[0.06] tracking-[0.3em] uppercase">
                  ZENTOR
                </div>
                <div className="h-px w-16 bg-[#C5A55A]/20" />
                <div className="text-[10px] text-white/15 tracking-[0.35em] uppercase">
                  Infraestructura Corporativa
                </div>
              </div>
            </div>
            {/* Tag */}
            <div className="absolute -bottom-5 -right-5 bg-[#C5A55A] px-6 py-4 shadow-2xl">
              <div className="text-black text-[9px] font-semibold tracking-[0.2em] uppercase">
                Parte del grupo
              </div>
              <div className="text-black text-sm font-bold tracking-wide">
                Biagi & Varnoux
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
