import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { Solution } from "@/components/landing/Solution";
import { DashboardTour } from "@/components/landing/DashboardTour";
import { Stats } from "@/components/landing/Stats";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <DashboardTour />
        <Stats />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
