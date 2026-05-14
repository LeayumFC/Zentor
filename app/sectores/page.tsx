import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTA from "@/components/home/CTA";
import {
  Landmark,
  Globe2,
  Building2,
  ShoppingBag,
  Car,
  University,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sectores",
  description:
    "Zentor orienta sus servicios a organizaciones que priorizan formalidad, planificación y ejecución profesional.",
};

const sectores = [
  {
    icon: Landmark,
    title: "Bancos",
    description:
      "Remodelación, adecuación y mantenimiento de sucursales bancarias y oficinas financieras. Proyectos ejecutados con alto nivel de coordinación, discreción y cumplimiento operativo.",
  },
  {
    icon: Globe2,
    title: "Embajadas",
    description:
      "Servicios de infraestructura y adecuación para representaciones diplomáticas e instituciones internacionales, con atención a requerimientos de formalidad, seguridad y protocolo.",
  },
  {
    icon: Building2,
    title: "Oficinas corporativas",
    description:
      "Transformación, optimización y mantenimiento de espacios de trabajo corporativo, adaptando cada ambiente a los requerimientos funcionales y de imagen de la organización.",
  },
  {
    icon: ShoppingBag,
    title: "Retail y comercio",
    description:
      "Adecuación e infraestructura para tiendas, locales comerciales y espacios de atención al cliente, orientados a optimizar la experiencia del usuario y la operación del negocio.",
  },
  {
    icon: Car,
    title: "Concesionarios",
    description:
      "Construcción, remodelación y mantenimiento de showrooms y talleres para concesionarios automotrices, con conocimiento de los estándares visuales y operativos del sector.",
  },
  {
    icon: University,
    title: "Instituciones",
    description:
      "Servicios de infraestructura para organismos públicos, instituciones educativas, organizaciones internacionales y entidades que requieren formalidad y procesos ordenados.",
  },
];

export default function SectoresPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7AB65]/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#C7AB65]" />
              <span className="text-[#C7AB65] text-[10px] font-medium tracking-[0.25em] uppercase">
                Sectores
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-light text-[#0F2234] leading-tight tracking-tight mb-8 max-w-3xl">
              Sectores con los{" "}
              <span className="text-[#C7AB65] italic">que trabajamos.</span>
            </h1>
            <p className="text-lg text-[#64748B] font-light leading-relaxed max-w-2xl">
              Zentor orienta sus servicios a organizaciones que priorizan
              formalidad, planificación y ejecución profesional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="py-20 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#0F2234]/[0.08]">
            {sectores.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <FadeIn key={sector.title} delay={i * 0.08}>
                  <div className="group relative p-10 border-r border-b border-[#0F2234]/[0.08] hover:bg-[#F0F4F9] transition-colors duration-400 cursor-default overflow-hidden">
                    {/* Gold top line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C7AB65]/0 via-[#C7AB65] to-[#C7AB65]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="w-12 h-12 border border-[#C7AB65]/15 group-hover:border-[#C7AB65]/40 flex items-center justify-center mb-6 transition-colors duration-400">
                      <Icon
                        size={28}
                        className="text-[#CBD5E1] group-hover:text-[#C7AB65] transition-colors duration-400"
                        strokeWidth={2}
                      />
                    </div>
                    <h2 className="text-base font-semibold text-[#0F2234] group-hover:text-[#0F2234] mb-3 transition-colors duration-300">
                      {sector.title}
                    </h2>
                    <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                      {sector.description}
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
