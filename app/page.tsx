import ComparisonTable from "@/component/ComparisionTable";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import LeadContent from "@/component/LeadContent";
import LeadForm from "@/component/LeadForm";
import Navbar from "@/component/Navbar";
import ProcessStep from "@/component/Process";
import TickerBar from "@/component/TickerBar";
import WhatsAppButton from "@/component/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TickerBar />
      <section
        id="lead-form"
        className="relative overflow-hidden bg-bg-main py-24"
      >
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container max-w-7xl relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <LeadContent />
            <LeadForm />
          </div>
        </div>
      </section>
      <ComparisonTable />
      <ProcessStep />
      <Footer />

      <WhatsAppButton />
    </main>
  );
}
