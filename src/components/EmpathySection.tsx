const EmpathySection = () => {
  return (
    <section className="pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Hola, mujer de Dios.
          </h2>
          
          <div className="text-xl sm:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 px-2">
            <p>
              Sé exactamente lo que sientes cuando piensas en subir al púlpito. 
              Esa mezcla de emoción y terror que te paraliza. Sabes que Dios te ha llamado, 
              pero cada vez que imaginas a todas esas personas mirándote, 
              tu corazón se acelera y tu mente se queda en blanco.
            </p>
            
            <p>
              Te quedas despierta por las noches preguntándote: 
              <em>"¿Y si no soy lo suficientemente buena? ¿Y si me equivoco? ¿Y si no tengo la unción necesaria?"</em>
            </p>
            
            <p>
              Quiero que sepas algo: <strong>No estás sola.</strong>
            </p>
          </div>

          <div className="bg-accent border border-accent-foreground/20 p-4 sm:p-6 lg:p-8 rounded-lg">
            <p className="text-xl sm:text-base lg:text-lg font-bold text-accent-foreground mb-3 sm:mb-4">
              En los últimos 10 años, ayudé a más de 2.000 mujeres a descubrir su llamado, 
              a vencer el miedo y a predicar con autoridad.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-primary">
              Hoy, tú puedes ser la próxima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
