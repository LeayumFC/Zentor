import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Zentor nace con el objetivo de desarrollar proyectos de infraestructura mediante un enfoque basado en organización, profesionalismo y capacidad operativa.",
};

const sections = [
  {
    label: "La empresa",
    content:
      "La empresa está enfocada en remodelación, adecuación, mantenimiento e infraestructura corporativa para empresas e instituciones. A diferencia de modelos tradicionales de construcción, Zentor prioriza procesos organizados, atención empresarial y coordinación eficiente en cada etapa del proyecto.",
  },
  {
    label: "Nuestra filosofía",
    content:
      "Creemos que la correcta ejecución de un proyecto depende tanto de la capacidad técnica como de la organización operativa. Por ello, Zentor desarrolla sus proyectos mediante planificación, comunicación clara, seguimiento y control continuo.",
  },
  {
    label: "Visión de largo plazo",
    content:
      "La visión de Zentor es evolucionar progresivamente hacia proyectos de mayor escala, infraestructura estratégica y participación en licitaciones de mayor relevancia. La empresa busca consolidarse como una organización sólida, escalable y confiable dentro del sector construcción e infraestructura.",
  },
  {
    label: "Respaldo empresarial y capacidad operativa",
    content:
      "Como parte de Biagi & Varnoux, Zentor cuenta con capacidades complementarias relacionadas a logística, abastecimiento y coordinación operativa. Este respaldo fortalece la capacidad de planificación, respuesta y ejecución de la empresa.",
  },
];

export default function NosotrosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-28 bg-[#0F2234] overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7AB65]/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#C7AB65]" />
              <span className="text-[#C7AB65] text-[10px] font-medium tracking-[0.25em] uppercase">
                Nosotros
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-light text-white leading-tight tracking-tight mb-8 max-w-3xl">
              Construcción e infraestructura con{" "}
              <span className="text-[#C7AB65] italic">visión corporativa.</span>
            </h1>
            <p className="text-lg text-white/40 font-light leading-relaxed max-w-2xl">
              Zentor nace con el objetivo de desarrollar proyectos de
              infraestructura mediante un enfoque basado en organización,
              profesionalismo y capacidad operativa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sections */}
      <section className="py-28 bg-[#0F2234]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {sections.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="border-t border-white/[0.07] pt-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-px w-8 bg-[#C7AB65]/60" />
                    <h2 className="text-xs font-semibold text-[#C7AB65] tracking-[0.2em] uppercase">
                      {s.label}
                    </h2>
                  </div>
                  <p className="text-white/45 font-light leading-relaxed">
                    {s.content}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-20 bg-[#0E2132] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { title: "Profesionalismo", sub: "En cada etapa del proyecto" },
              { title: "Organización", sub: "Como base de la ejecución" },
              { title: "Confiabilidad", sub: "Como estándar de relación" },
            ].map((v, i) => (
              <div
                key={v.title}
                className={`py-10 px-10 ${
                  i !== 2 ? "border-b md:border-b-0 md:border-r border-white/[0.06]" : ""
                }`}
              >
                <div className="text-xl font-light text-white mb-2">{v.title}</div>
                <div className="text-sm text-white/30 font-light">{v.sub}</div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <CTA />
    </main>
  );
}
