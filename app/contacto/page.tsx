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
      <section className="relative pt-40 pb-20 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A55A]/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#C5A55A]" />
              <span className="text-[#C5A55A] text-[10px] font-medium tracking-[0.25em] uppercase">
                Contacto
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-light text-white leading-tight tracking-tight mb-8 max-w-2xl">
              Conversemos sobre{" "}
              <span className="text-[#C5A55A] italic">su proyecto.</span>
            </h1>
            <p className="text-lg text-white/40 font-light leading-relaxed max-w-xl">
              Nuestro equipo está disponible para atender consultas relacionadas
              a infraestructura, remodelación, mantenimiento y ejecución de
              proyectos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 pb-36 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-20 items-start">
            {/* Form */}
            <FadeIn>
              <div className="border-t border-white/[0.07] pt-10">
                <h2 className="text-lg font-light text-white/60 mb-8 tracking-wide">
                  Formulario de contacto
                </h2>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Contact info */}
            <FadeIn delay={0.15} direction="left">
              <div className="border-t border-white/[0.07] pt-10">
                <h2 className="text-lg font-light text-white/60 mb-8 tracking-wide">
                  Información de contacto
                </h2>
                <div className="space-y-7">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 border border-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon
                            size={14}
                            className="text-[#C5A55A]/60"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <div className="text-[10px] text-white/25 uppercase tracking-[0.2em] mb-1 font-medium">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-white/50 hover:text-[#C5A55A] transition-colors duration-200 font-light"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-sm text-white/50 font-light">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="mt-12 pt-10 border-t border-white/[0.06]">
                  <p className="text-xs text-white/20 font-light leading-relaxed">
                    Parte del grupo{" "}
                    <span className="text-[#C5A55A]/40">Biagi & Varnoux</span>
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
