# Zentor

Sitio web corporativo para Zentor — empresa de construcción, remodelación e infraestructura corporativa.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura

```
app/
├── page.tsx              # Home
├── nosotros/page.tsx
├── servicios/page.tsx
├── sectores/page.tsx
├── licitaciones/page.tsx
└── contacto/page.tsx

components/
├── Navbar.tsx
├── Footer.tsx
├── ContactForm.tsx
├── ui/
│   └── FadeIn.tsx        # Wrapper de animación reutilizable
└── home/
    ├── Hero.tsx
    ├── QuienesSomos.tsx
    ├── Diferenciadores.tsx
    ├── ServiciosSection.tsx
    ├── SectoresSection.tsx
    ├── Proceso.tsx
    └── CTA.tsx
```

## Deploy

El proyecto está configurado para desplegarse en Vercel. Cada push a `main` genera un deploy automático.

---

Parte del grupo **Biagi & Varnoux**
