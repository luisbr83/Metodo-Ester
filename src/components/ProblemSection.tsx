import { TrendingDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="pt-6 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">

          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ¿Por qué otras mujeres pueden... y tú aún no?
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
            Déjame decirte algo que muy pocas se atreven a decir:
          </p>

          {/* Estatística em destaque */}
<div className="bg-highlight p-6 rounded-r-lg max-w-2xl mx-auto">
  <div className="text-lg sm:text-xl font-bold text-highlight-foreground mb-2">
    ✅ ESTADÍSTICA REVELADORA
  </div>
            <p className="text-lg font-semibold text-highlight-foreground">
              82% de las mujeres cristianas sienten el llamado al ministerio, 
              pero solo el 7% actúa de verdad.
            </p>
          </div>

          {/* Texto explicativo */}
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              El problema no es que te falte unción.
            </p>
            <p>
              El problema no es que no tengas fe.
            </p>
            <p className="text-xl font-bold text-foreground">
              El problema es que nadie te enseñó el <span className="text-primary">MÉTODO CORRECTO</span>.
            </p>
          </div>

          {/* Bloco final de reforço */}
          <div className="bg-card border border-border p-6 rounded-lg">
            <p className="text-lg text-card-foreground">
              Mientras otras mujeres suben al púlpito con confianza, 
              tú sigues esperando el "momento perfecto" que nunca llega. 
              Pero no es porque ellas sean más especiales... 
              <strong>es porque conocen algo que tú aún no.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
