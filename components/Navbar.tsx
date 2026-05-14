"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sectores", href: "/sectores" },
  { label: "Licitaciones", href: "/licitaciones" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F2234]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-lg font-semibold tracking-[0.2em] text-white uppercase">
            ZENTOR
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7AB65] group-hover:scale-125 transition-transform duration-300" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                pathname === link.href
                  ? "text-[#C7AB65]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[#C7AB65] transition-all duration-300 ${
                  pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contacto"
            className="px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase border border-[#C7AB65] text-[#C7AB65] hover:bg-[#C7AB65] hover:text-black transition-all duration-300"
          >
            Solicitar información
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white/70 hover:text-white transition-colors p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#0F2234]/98 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3.5 text-sm font-medium border-b border-white/[0.05] transition-colors ${
                    pathname === link.href
                      ? "text-[#C7AB65]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="mt-4 px-5 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase border border-[#C7AB65] text-[#C7AB65] text-center hover:bg-[#C7AB65] hover:text-black transition-all duration-300"
              >
                Solicitar información
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
