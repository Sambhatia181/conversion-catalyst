import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
