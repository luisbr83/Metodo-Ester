import { Lightbulb } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4 sm:mb-6" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Et si tu pouvais parler avec puissance et assurance ?
        </h2>

        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          Imagine-toi prêcher un message qui ne vient pas seulement de ta tête,
          mais directement du coeur de Dieu. Tes mots ne sont pas simplement entendus,
          ils <strong>touchent les coeurs</strong>, ils <strong>libèrent</strong> et <strong>guérissent</strong>.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          Tu n'as pas besoin d'être parfaite, ni d'avoir étudié dans un séminaire.
          Ce que Dieu cherche, c'est ton obéissance et ta disposition à apprendre à
          communiquer Son message avec clarté, onction et authenticité.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          C'est exactement pour cela que le programme <strong>"Femmes Appelées par Dieu"</strong> existe :
          pour t'aider à découvrir ta voix, ton autorité spirituelle et ta manière unique
          d'annoncer la Parole.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          À travers des enseignements simples, pratiques et inspirés, tu apprendras à préparer un message
          en te laissant guider par le Saint-Esprit, même si tu n'as jamais prêché auparavant.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
