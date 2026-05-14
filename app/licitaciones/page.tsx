import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTA from "@/components/home/CTA";
import { TrendingUp, FileCheck, Shield, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Licitaciones",
  description:
    "Zentor desarrolla continuamente sus capacidades operativas con el objetivo de participar progresivamente en proyectos y licitaciones de mayor relevancia.",
};

const pilares = [
  {
    icon: TrendingUp,
    title: "Crecimiento y fortalecimiento operativo",
    description:
      "La empresa se encuentra enfocada en consolidar su estructura organizativa, capacidad técnica y procesos operativos para ampliar progresivamente su participación dentro del sector construcción e infraestructura.",
  },
  {
    icon: FileCheck,
    title: "Compromiso con la formalidad y el cumplimiento",
    description:
      "Zentor prioriza procesos organizados, documentación adecuada, supervisión y cumplimiento operativo como parte de su preparación para futuros proyectos institucionales y corporativos de mayor alcance.",
  },
  {
    icon: Shield,
    title: "Respaldo operativo y empresarial",
    description:
      "Como parte del grupo Biagi & Varnoux, Zentor cuenta con capacidades complementarias en logística, abastecimiento y coordinación que fortalecen su propuesta de valor en procesos de licitación.",
  },
  {
    icon: Target,
    title: "Visión de largo plazo",
    description:
      "La estrategia de Zentor contempla una evolución gradual hacia proyectos de mayor escala e infraestructura estratégica, construyendo una trayectoria sólida y confiable en el sector.",
  },
];

export default function LicitacionesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-28 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A55A]/15 to-transparent" />
        {/* Decorative element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden lg:block">
          <div className="absolute top-1/2 right-20 -translate-y-1/2 w-64 h-64 border border-[#C5A55A]/[0.06]" />
          <div className="absolute top-1/2 right-28 -translate-y-1/2 w-48 h-48 border border-[#C5A55A]/[0.04]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#C5A55A]" />
              <span className="text-[#C5A55A] text-[10px] font-medium tracking-[0.25em] uppercase">
                Licitaciones
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-light text-white leading-tight tracking-tight mb-8 max-w-3xl">
              Preparados para proyectos{" "}
              <span className="text-[#C5A55A] italic">de mayor escala.</span>
            </h1>
            <p className="text-lg text-white/40 font-light leading-relaxed max-w-2xl">
              Zentor desarrolla continuamente sus capacidades operativas y
              organizativas con el objetivo de participar progresivamente en
              proyectos y licitaciones de mayor relevancia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 pb-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-0 border border-white/[0.06]">
            {pilares.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div
                    className={`group relative p-10 lg:p-12 border-white/[0.06] hover:bg-[#0f0f0f] transition-colors duration-400 overflow-hidden
                    ${i === 0 ? "border-b border-r" : ""}
                    ${i === 1 ? "border-b" : ""}
                    ${i === 2 ? "border-r" : ""}
                  `}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A55A]/0 via-[#C5A55A] to-[#C5A55A]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="w-11 h-11 border border-[#C5A55A]/15 group-hover:border-[#C5A55A]/40 flex items-center justify-center mb-7 transition-colors duration-400">
                      <Icon
                        size={18}
                        className="text-white/20 group-hover:text-[#C5A55A] transition-colors duration-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h2 className="text-base font-semibold text-white/80 group-hover:text-white mb-4 transition-colors duration-300 leading-snug">
                      {p.title}
                    </h2>
                    <p className="text-sm text-white/35 leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
