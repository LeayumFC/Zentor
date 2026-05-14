import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sectores", href: "/sectores" },
  { label: "Licitaciones", href: "/licitaciones" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F2234] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo blanco para fondo oscuro */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/isotipo-dorado.png"
                alt="Zentor isotipo"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/images/logotipo-blanco.png"
                alt="Zentor"
                width={110}
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-white/50 leading-relaxed text-sm font-normal max-w-sm mb-2">
              Empresa de construcción e infraestructura orientada al sector
              corporativo, institucional y comercial.
            </p>
            <p className="text-[#C7AB65]/60 text-xs tracking-wider font-normal">
              Parte del grupo Biagi & Varnoux.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-white/[0.12] flex items-center justify-center text-white/40 hover:text-[#C7AB65] hover:border-[#C7AB65]/40 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/[0.12] flex items-center justify-center text-white/40 hover:text-[#C7AB65] hover:border-[#C7AB65]/40 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-semibold text-white/30 tracking-[0.25em] uppercase mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#C7AB65] transition-colors duration-200 font-normal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold text-white/30 tracking-[0.25em] uppercase mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C7AB65]/60 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm text-white/50 font-normal leading-relaxed">
                  La Paz, Bolivia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#C7AB65]/60 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <a
                  href="mailto:info@zentor.bo"
                  className="text-sm text-white/50 hover:text-[#C7AB65] transition-colors duration-200 font-normal"
                >
                  info@zentor.bo
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#C7AB65]/60 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <a
                  href="tel:+591"
                  className="text-sm text-white/50 hover:text-[#C7AB65] transition-colors duration-200 font-normal"
                >
                  +591 — —
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 font-normal">
            © {new Date().getFullYear()} Zentor. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-white/25 font-normal">
            Parte del grupo{" "}
            <span className="text-[#C7AB65]/50">Biagi & Varnoux</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
