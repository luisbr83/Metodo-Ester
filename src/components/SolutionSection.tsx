import { Book, Crown } from "lucide-react"; // Removido Sparkles e Gift

const SolutionSection = () => {
  return (
    <section className="pt-6 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Ícone do livro */}
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <Book className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Título principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            El Secreto Está en la Biblia
          </h2>

          {/* Estratégia da Rainha Ester */}
          <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-primary">
                La Estrategia de la Reina Ester
              </h3>
            </div>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Cuando Ester fue llamada para salvar a su pueblo, no se lanzó sin preparación.
              Siguió un proceso divino de 4 etapas que la transformó de una joven común
              en una mujer de autoridad que cambió la historia.
            </p>

            <div className="grid grid-cols-1 gap-6">
  <div className="flex items-center justify-center">
    <span className="font-bold text-xl text-purple-700 uppercase">Selección</span>
  </div>
  <div className="flex items-center justify-center">
    <span className="font-bold text-xl text-purple-700 uppercase">Purificación</span>
  </div>
  <div className="flex items-center justify-center">
    <span className="font-bold text-xl text-purple-700 uppercase">Unción</span>
  </div>
  <div className="flex items-center justify-center">
    <span className="font-bold text-xl text-purple-700 uppercase">Entrega</span>
  </div>
</div>

            {/* Revelación Divina sem ícone e sem borda */}
            <div className="bg-highlight p-6 rounded-lg max-w-2xl mx-auto mt-8">
              <div className="flex justify-center mb-2">
                
              </div>
              <p className="text-lg font-semibold text-highlight-foreground">
                Inspirada por esta estrategia divina, adapté cada etapa para mujeres como tú
                y creé el <strong>MÉTODO ESTHER</strong>.
              </p>
            </div>

            {/* Texto final */}
            <div className="text-lg text-muted-foreground mt-6">
              <p>
                No es casualidad que este método lleve el nombre de Ester.
                Ella nos mostró que cualquier mujer, sin importar su origen,
                puede ser transformada en una voz de autoridad cuando sigue el proceso correcto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
