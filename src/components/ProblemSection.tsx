import { TrendingDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="pt-6 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">

          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pourquoi d'autres femmes peuvent-elles... et pas toi encore ?
          </h2>

          {/* GIF abaixo do título */}
          <div className="flex justify-center">
            <div className="p-2 rounded-full bg-background">
              <img 
                src="https://i.imgur.com/WJ7qUkF.gif" 
                alt="Mulher confusa com o chamado" 
                className="w-41 h-41 md:w-52 md:h-52 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Nova frase abaixo do GIF */}
          <p className="text-xl font-semibold text-muted-foreground max-w-xl mx-auto">
            Laisse-moi te dire quelque chose que très peu osent dire:
          </p>

          {/* Estatística em destaque */}
<div className="bg-highlight p-6 rounded-r-lg max-w-2xl mx-auto">
  <div className="text-lg sm:text-xl font-bold text-highlight-foreground mb-2">
    ✅ STATISTIQUE RÉVÉLATRICE
  </div>
            <p className="text-lg font-semibold text-highlight-foreground">
              82 % des femmes chrétiennes se sentent appelées au ministère, 
              mais seulement 7 % passent réellement à l'action..
            </p>
          </div>

          {/* Texto explicativo */}
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              Le problème n'est pas que tu manques d'onction.
            </p>
            <p>
              Le problème n'est pas que tu n'as pas la foi.
            </p>
            <p className="text-xl font-bold text-foreground">
              Le problème, c'est que personne ne t'a enseigné la <span className="text-primary">BONNE MÉTHODE</span>.
            </p>
          </div>

          {/* Bloco final de reforço */}
          <div className="bg-card border border-border p-6 rounded-lg">
            <p className="text-lg text-card-foreground">
              Alors que d'autres femmes montent en chaire avec assurance, 
              tu continues d'attendre le « moment idéal » qui n'arrive jamais. 
              Mais ce n'est pas parce qu'elles sont plus spéciales... 
              <strong>fres parce qu'ils savent quelque chose que tu ne sais pas encore.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
