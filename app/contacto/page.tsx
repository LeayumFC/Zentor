import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacte a Zentor para consultas relacionadas a infraestructura, remodelación, mantenimiento y ejecución de proyectos corporativos.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "La Paz, Bolivia",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "info@zentor.bo",
    href: "mailto:info@zentor.bo",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+591 — —",
    href: "tel:+591",
  },
  {
    icon: Clock,
    label: "Horarios",
    value: "Lunes a viernes, 8:30 – 18:00",
  },
];

export default function ContactoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7AB65]/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#C7AB65]" />
              <span className="text-[#C7AB65] text-[10px] font-medium tracking-[0.25em] uppercase">
                Contacto
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-light text-[#0F2234] leading-tight tracking-tight mb-8 max-w-2xl">
              Conversemos sobre{" "}
              <span className="text-[#C7AB65] italic">su proyecto.</span>
            </h1>
            <p className="text-lg text-[#64748B] font-light leading-relaxed max-w-xl">
              Nuestro equipo está disponible para atender consultas relacionadas
              a infraestructura, remodelación, mantenimiento y ejecución de
              proyectos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-20 items-start">
            {/* Form */}
            <FadeIn>
              <div className="border-t border-[#0F2234]/[0.09] pt-10">
                <h2 className="text-lg font-light text-[#475569] mb-8 tracking-wide">
                  Formulario de contacto
                </h2>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Contact info */}
            <FadeIn delay={0.15} direction="left">
              <div className="border-t border-[#0F2234]/[0.09] pt-10">
                <h2 className="text-lg font-light text-[#475569] mb-8 tracking-wide">
                  Información de contacto
                </h2>
                <div className="space-y-7">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 border border-[#0F2234]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon
                            size={20}
                            className="text-[#C7AB65]/60"
                            strokeWidth={2}
                          />
                        </div>
                        <div>
                          <div className="text-[10px] text-[#CBD5E1] uppercase tracking-[0.2em] mb-1 font-medium">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-[#475569] hover:text-[#C7AB65] transition-colors duration-200 font-light"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-sm text-[#475569] font-light">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="mt-12 pt-10 border-t border-[#0F2234]/[0.08]">
                  <p className="text-xs text-[#CBD5E1] font-light leading-relaxed">
                    Parte del grupo{" "}
                    <span className="text-[#C7AB65]/40">Biagi & Varnoux</span>
                    <br />
                    La Paz, Bolivia
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
