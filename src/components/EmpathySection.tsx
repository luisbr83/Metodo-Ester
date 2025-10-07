import React from "react";

const EmpathySection = () => {
  return (
    <section className="bg-muted/50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
          Je comprends exactement ce que tu ressens.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          Je sais exactement ce que tu ressens quand tu penses à monter sur l'estrade.
          Ce mélange d'excitation et de peur qui te paralyse. Tu sais que Dieu t'a appelée,
          mais chaque fois que tu imagines toutes ces personnes te regardant,
          ton coeur s'emballe et tes mots disparaissent.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          Tu n'es pas seule. J'ai été à ta place.
        </p>
      </div>
    </section>
  );
};

export default EmpathySection;
