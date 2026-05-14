import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTA from "@/components/home/CTA";
import {
  Building2,
  Paintbrush2,
  Wrench,
  ShoppingBag,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Zentor desarrolla soluciones de construcción, remodelación e infraestructura adaptadas a empresas, instituciones y espacios comerciales.",
};

const servicios = [
  {
    icon: Building2,
    number: "01",
    title: "Construcción y obras civiles",
    description:
      "Ejecución de infraestructura, ampliaciones, adecuaciones y proyectos de obra con enfoque en planificación y cumplimiento. Desarrollamos proyectos desde la etapa inicial hasta la entrega final, garantizando calidad técnica y gestión organizada en cada fase.",
    tags: ["Infraestructura", "Ampliaciones", "Adecuaciones", "Obras nuevas"],
  },
  {
    icon: Paintbrush2,
    number: "02",
    title: "Remodelación y adecuación corporativa",
    description:
      "Transformación y optimización de oficinas, sucursales, showrooms y espacios corporativos. Adaptamos ambientes existentes a nuevas necesidades funcionales y estéticas, con atención a los requerimientos específicos de cada organización.",
    tags: ["Oficinas", "Sucursales", "Showrooms", "Espacios comerciales"],
  },
  {
    icon: Wrench,
    number: "03",
    title: "Mantenimiento preventivo y correctivo",
    description:
      "Servicios de mantenimiento orientados a mantener la continuidad operativa de cada espacio. Incluye diagnóstico, planificación de intervenciones, ejecución técnica y seguimiento para garantizar el óptimo funcionamiento de las instalaciones.",
    tags: ["Preventivo", "Correctivo", "Diagnóstico", "Seguimiento"],
  },
  {
    icon: ShoppingBag,
    number: "04",
    title: "Infraestructura comercial",
    description:
      "Desarrollo y adecuación de espacios orientados al sector retail, comercial y de servicios. Proyectos diseñados para optimizar la experiencia del cliente y la operación del negocio.",
    tags: ["Retail", "Comercio", "Locales", "Espacios de servicio"],
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Gestión y supervisión de proyectos",
    description:
      "Coordinación, planificación, control operativo y seguimiento técnico durante cada etapa del proyecto. Brindamos capacidad de gestión integral para asegurar el cumplimiento de plazos, presupuesto y estándares de calidad.",
    tags: ["Coordinación", "Control", "Planificación", "Supervisión técnica"],
  },
];

export default function ServiciosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-28 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A55A]/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#C5A55A]" />
              <span className="text-[#C5A55A] text-[10px] font-medium tracking-[0.25em] uppercase">
                Servicios
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-light text-white leading-tight tracking-tight mb-8 max-w-3xl">
              Servicios orientados a{" "}
              <span className="text-[#C5A55A] italic">
                infraestructura corporativa.
              </span>
            </h1>
            <p className="text-lg text-white/40 font-light leading-relaxed max-w-2xl">
              Desarrollamos soluciones adaptadas a empresas, instituciones y
              espacios comerciales que requieren ejecución organizada y atención
              profesional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#080808] pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-0">
            {servicios.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn key={s.title} delay={i * 0.08}>
                  <div className="group grid lg:grid-cols-[80px_1fr_auto] gap-6 lg:gap-12 py-14 border-b border-white/[0.06] hover:border-[#C5A55A]/15 transition-colors duration-400">
                    {/* Number + icon */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-4">
                      <span className="text-xs font-light text-[#C5A55A]/30 tracking-wider w-6">
                        {s.number}
                      </span>
                      <div className="w-10 h-10 border border-white/[0.07] group-hover:border-[#C5A55A]/25 flex items-center justify-center transition-colors duration-400">
                        <Icon
                          size={17}
                          className="text-white/25 group-hover:text-[#C5A55A] transition-colors duration-400"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="text-xl font-semibold text-white/85 group-hover:text-white mb-4 transition-colors duration-300">
                        {s.title}
                      </h2>
                      <p className="text-white/40 font-light leading-relaxed max-w-2xl mb-6">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] text-white/30 border border-white/[0.08] px-3 py-1 tracking-wide uppercase font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
