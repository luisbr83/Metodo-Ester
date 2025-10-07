import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Dieu t'appelle à prêcher. <br />
          Découvre comment répondre à cet appel avec puissance et assurance.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
          Même si tu n'as jamais parlé en public auparavant, le Saint-Esprit veut t'utiliser
          pour transmettre Sa Parole avec onction, clarté et transformation.
        </p>

        <Button
          asChild
          size="lg"
          className="text-lg px-8 py-4 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          <a href="#oferta">✨ Oui, je veux être utilisée par Dieu</a>
        </Button>

        <p className="mt-6 text-sm text-muted-foreground">
          Accès immédiat • Formation 100% en ligne • Garantie 7 jours
        </p>
      </div>

      <div className="absolute inset-0 bg-[url('/images/hero-bg-pattern.svg')] bg-center bg-cover opacity-10"></div>
    </section>
  );
};

export default HeroSection;
