import Link from "next/link";
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
    <footer className="bg-[#091826] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-lg font-semibold tracking-[0.2em] text-white uppercase">
                ZENTOR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7AB65]" />
            </div>
            <p className="text-white/35 leading-relaxed text-sm font-light max-w-sm mb-2">
              Empresa de construcción e infraestructura orientada al sector
              corporativo, institucional y comercial.
            </p>
            <p className="text-[#C7AB65]/50 text-xs tracking-wider font-light">
              Parte del grupo Biagi & Varnoux.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-[#C7AB65] hover:border-[#C7AB65]/30 transition-all duration-300"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-[#C7AB65] hover:border-[#C7AB65]/30 transition-all duration-300"
              >
                <Instagram size={14} />
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
                    className="text-sm text-white/35 hover:text-[#C7AB65] transition-colors duration-200 font-light"
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
                <MapPin
                  size={13}
                  className="text-[#C7AB65]/50 flex-shrink-0 mt-0.5"
                />
                <span className="text-sm text-white/35 font-light leading-relaxed">
                  La Paz, Bolivia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={13}
                  className="text-[#C7AB65]/50 flex-shrink-0 mt-0.5"
                />
                <a
                  href="mailto:info@zentor.bo"
                  className="text-sm text-white/35 hover:text-[#C7AB65] transition-colors duration-200 font-light"
                >
                  info@zentor.bo
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={13}
                  className="text-[#C7AB65]/50 flex-shrink-0 mt-0.5"
                />
                <a
                  href="tel:+591"
                  className="text-sm text-white/35 hover:text-[#C7AB65] transition-colors duration-200 font-light"
                >
                  +591 — —
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20 font-light">
            © {new Date().getFullYear()} Zentor. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-white/20 font-light">
            Parte del grupo{" "}
            <span className="text-[#C7AB65]/40">Biagi & Varnoux</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
