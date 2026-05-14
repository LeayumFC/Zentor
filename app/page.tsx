import Hero from "@/components/home/Hero";
import QuienesSomos from "@/components/home/QuienesSomos";
import Diferenciadores from "@/components/home/Diferenciadores";
import ServiciosSection from "@/components/home/ServiciosSection";
import SectoresSection from "@/components/home/SectoresSection";
import Proceso from "@/components/home/Proceso";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuienesSomos />
      <Diferenciadores />
      <ServiciosSection />
      <SectoresSection />
      <Proceso />
      <CTA />
    </main>
  );
}
