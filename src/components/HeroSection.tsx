import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-accent/30 px-2 sm:px-4 lg:px-6 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-14">
      <div className="mx-auto max-w-7xl text-center">
        
        {/* Hero GIF */}
<div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
  <img 
  src="https://i.imgur.com/R3agsbB.gif" 
  alt="Mulher pregando com unção" 
  className="w-41 h-41 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full"
/>
</div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
          Découvrez le{" "}
          <span className="text-primary">Méthode secrète</span>{" "}
          qui a transformé des femmes ordinaires en{" "}
          <span className="text-primary">Prédicatrices d'autorité</span>
        </h1>

       {/* Subheadline Highlight Box */}
<div className="bg-highlight p-4 sm:p-6 rounded-r-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
  <p className="text-2xl sm:text-lg md:text-xl font-semibold text-highlight-foreground">
    Vous sentez que Dieu vous appelle, mais vous ne savez pas par où commencer ?
  </p>
</div>
        
      </div>
    </section>
  );
};

export default HeroSection;
