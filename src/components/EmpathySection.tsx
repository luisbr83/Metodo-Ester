const EmpathySection = () => {
  return (
    <section className="pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Bonjour, femme de Dieu.
          </h2>
          
          <div className="text-xl sm:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 px-2">
            <p>
              Je sais exactement ce que tu ressens quand tu penses à monter en chaire. 
              Ce mélange d'excitation et de terreur qui te paralyse. Tu sais que Dieu t'a appelé, 
              mais chaque fois que tu imagines tous ces gens qui te regardent, 
              ton cœur s'emballe et ton esprit se vide.
            </p>
            
            <p>
              Tu restes éveillée la nuit à te demander: 
              <em>"Et si je ne suis pas assez bonne ? Et si je me trompe ? Et si je n'ai pas l'onction nécessaire ?"</em>
            </p>
            
            <p>
              Je veux que tu saches une chose : <strong>tu n'es pas seule.</strong>
            </p>
          </div>

          <div className="bg-accent border border-accent-foreground/20 p-4 sm:p-6 lg:p-8 rounded-lg">
            <p className="text-xl sm:text-base lg:text-lg font-bold text-accent-foreground mb-3 sm:mb-4">
              Au cours des dix dernières années, j'ai aidé plus de 2 000 femmes à découvrir leur vocation, 
              à surmonter leur peur et à prêcher avec autorité.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-primary">
              Aujourd'hui, tu peux être la prochaine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
