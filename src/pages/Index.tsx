import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import ProblemSection from "@/components/ProblemSection";
import WrongSolutionsSection from "@/components/WrongSolutionsSection";
import SolutionSection from "@/components/SolutionSection";
import ProductSection from "@/components/ProductSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection"; // 👈 importado aqui
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EmpathySection />
      <ProblemSection />
      <WrongSolutionsSection />
      <SolutionSection />
      <ProductSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection /> {/* 👈 FAQ posicionado depois dos testemunhos */}
      <GuaranteeSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
