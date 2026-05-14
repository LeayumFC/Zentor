"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

const tiposProyecto = [
  "Construcción y obras civiles",
  "Remodelación y adecuación",
  "Mantenimiento",
  "Infraestructura comercial",
  "Gestión y supervisión",
  "Otro",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    telefono: "",
    proyecto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire up EmailJS or API here
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 border border-[#C7AB65]/40 flex items-center justify-center mb-6">
          <Check size={24} className="text-[#C7AB65]" />
        </div>
        <h3 className="text-xl font-light text-white mb-3">Mensaje enviado</h3>
        <p className="text-white/40 font-light max-w-sm leading-relaxed">
          Gracias por contactarnos. Nuestro equipo se pondrá en contacto con
          usted a la brevedad.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-white/[0.1] px-4 py-3.5 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-[#C7AB65]/50 transition-colors duration-300 font-light";

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo *"
          value={form.nombre}
          onChange={handleChange}
          className={inputClass}
          required
        />
        <input
          type="text"
          name="empresa"
          placeholder="Empresa u organización *"
          value={form.empresa}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={form.cargo}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico *"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          className={inputClass}
        />
        <div className="relative">
          <select
            name="proyecto"
            value={form.proyecto}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" className="bg-[#162C3E] text-white/40">
              Tipo de proyecto
            </option>
            {tiposProyecto.map((t) => (
              <option key={t} value={t} className="bg-[#162C3E] text-white">
                {t}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/20" />
          </div>
        </div>
      </div>
      <textarea
        name="mensaje"
        placeholder="Descripción del proyecto o consulta *"
        value={form.mensaje}
        onChange={handleChange}
        rows={5}
        className={`${inputClass} resize-none`}
        required
      />
      <div className="pt-2">
        <button
          onClick={handleSubmit}
          disabled={loading || !form.nombre || !form.email || !form.mensaje}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C7AB65] text-black text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#D8C082] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
        >
          {loading ? (
            "Enviando..."
          ) : (
            <>
              Enviar mensaje
              <Send
                size={13}
                className="group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
