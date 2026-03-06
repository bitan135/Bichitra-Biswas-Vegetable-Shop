import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import ChooseUs from "@/components/ChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark">
      <Navigation />
      <Hero />
      <StatsStrip />
      <About />
      <Products />
      <Services />
      <ChooseUs />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
