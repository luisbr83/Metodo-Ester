import { X } from "lucide-react";

const WrongSolutionsSection = () => {
  const wrongSolutions = [
    { title: 'Haz un curso de oratoria', reason: 'Técnica vacía sin poder espiritual' },
    { title: 'Estudia teología por 5 años', reason: 'Demasiado tarde, demasiada teoría' },
    { title: 'Busca mensajes en internet', reason: 'Palabras sin alma' },
    { title: 'Practica hasta que te salga', reason: 'El camino del trauma, no del llamado' },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
            Basta de seguir los consejos equivocados:
          </h2>

          <div className="grid gap-3 sm:gap-4 max-w-2xl mx-auto">
            {wrongSolutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-center p-3 sm:p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
              >
                <div className="bg-destructive p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive-foreground" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg font-medium text-foreground">
  <strong className="text-red-700">"{solution.title}"</strong> – {solution.reason}
</span>
              </div>
            ))}
          </div>

          <div className="bg-accent border border-accent-foreground/20 p-4 sm:p-6 rounded-lg">
            <p className="text-sm sm:text-base lg:text-lg text-accent-foreground leading-relaxed px-2">
              Si estos métodos funcionaran, ya estarías predicando con confianza.
              La verdad es que necesitas algo más profundo, más espiritual, más{" "}
              <strong>estratégico</strong>.
            </p>
          </div>

          <p className="text-base sm:text-lg lg:text-xl font-bold text-primary px-2">
            Necesitas el método que está en la Biblia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WrongSolutionsSection;
