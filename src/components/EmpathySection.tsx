import { Heart } from "lucide-react";

const EmpathySection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-accent/10">
      <div className="max-w-3xl mx-auto text-center">
        <Heart className="w-12 h-12 text-primary mx-auto mb-4 sm:mb-6" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Je comprends exactement ce que tu ressens
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          Je sais exactement ce que tu ressens quand tu penses à monter sur l'estrade.
          Ce mélange d'excitation et de peur qui te paralyse. Tu sais que Dieu t'a appelée,
          mais chaque fois que tu imagines toutes ces personnes te regardant, ton coeur s'accélère
          et une voix te dit : <em>"Et si je n'étais pas à la hauteur ?"</em>
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          Tu n'es pas seule. Beaucoup de femmes ressentent ce même combat intérieur :
          le désir ardent de servir Dieu d'un côté, et la peur de se tromper de l'autre.
          Et souvent, cela les empêche d'avancer, les laissant avec ce sentiment
          de frustration spirituelle.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Mais laisse-moi te dire quelque chose : <strong>Dieu ne se trompe jamais dans ses choix.</strong>  
          S'il t'a appelée, c'est parce qu'Il t'a équipée. Il veut seulement que tu apprennes à
          canaliser ce feu intérieur et à trouver les mots justes pour toucher les coeurs.
        </p>
      </div>
    </section>
  );
};

export default EmpathySection;
