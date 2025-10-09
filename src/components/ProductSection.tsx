"use client";

import { Monitor, Tablet, Smartphone, CheckCircle } from "lucide-react";

const ProductSection = () => {
  const benefits = [
    <>Préparer un sermon <strong>en 30 minutes</strong>, même si vous ne l'avez jamais fait auparavant</>,
    <>Monter en chaire <strong>sans crainte ni nervosité</strong> grâce à des techniques anti-panique</>,
    <>Avoir toujours un mot puissant pour <strong>toute occasion</strong></>,
    <>Être reconnue comme <strong>une femme de Dieu</strong> dotée d'autorité et de sagesse</>,
    <>Grandir spirituellement grâce à une <strong>véritable intimité</strong> avec la Parole</>,
    <>Influencer des vies et <strong>transformer</strong> des environnements grâce à votre voix</>,
    <>Découvrez <strong>votre style unique</strong> et construisez votre identité ministérielle</>
  ];

  const bonusItems1 = [
    "Une structure claire pour créer des messages fluides et percutants.",
    "Conseils pour relier chaque point du sermon à la Parole de Dieu.",
    "Méthodes pour maintenir l'attention de l'église du début à la fin.",
    "Exemples et modèles prêts à être adaptés et utilisés immédiatement.",
    "Stratégies pour ne plus jamais bloquer lors de la préparation d'un sermon."
  ];

  const bonusItems2 = [
    "Une prière profonde pour aligner ton cœur avec Dieu.",
    "Les clés pour garder un cœur pur et humble avant de parler.",
    "Comment s'assurer que le Christ soit toujours au centre de votre message.",
    "Exercices spirituels pour activer la paix et la force intérieure.",
    "Le pouvoir d'un verset phare qui soutient votre prédication.",
    "Techniques pour visualiser les âmes transformées par votre voix.",
    "Déclarations de foi pour tout remettre au Saint-Esprit."
  ];

  const bonusItems3 = [
    "Compétences essentielles pour diriger avec clarté et confiance.",
    "Exercices de découverte de soi pour identifier vos points forts et vos axes d'amélioration.",
    "Stratégies pour former et équiper de nouvelles leaders dans votre ministère.",
    "Plans d'action à court et à long terme pour votre développement ministériel.",
    "Espaces de réflexion et outils pratiques pour évaluer vos progrès."
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
            ¿Qu'est-ce que la <span className="text-primary">méthode Esther ?</span>?
          </h2>

          {/* Method Image */}
          <div className="max-w-2xl mx-auto">
            <img
              src="https://i.imgur.com/1XCSdWk.png"
              alt="Guía visual del Método Esther"
              className="w-full max-h-[500px] object-contain rounded-lg mx-auto"
            />
          </div>

          <p className="text-xl sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            C'est le <strong>premier guide pratique et spirituel</strong> qui enseigne à toute femme 
            à prêcher avec autorité, sans années d'études, sans crainte et sans complications.
          </p>

          {/* Texto sobre Acceso a Todos los Dispositivos */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Accès à tous les appareils
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Notre espace membre a été conçu pour vous offrir un maximum de commodité et de flexibilité. 
  Vous pouvez désormais accéder à tout le contenu exclusif où que vous soyez et depuis n'importe quel appareil:
            </p>
          </div>

          {/* Product Mockups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Monitor className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Accès sur ordinateur
                </p>
              </div>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Tablet className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Disponible sur tablette
                </p>
              </div>
            </div>
            <div className="text-center space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Emportez-le dans votre téléphone portable
                </p>
              </div>
            </div>
          </div>

          {/* Imagem da Área de Miembros */}
          <div className="max-w-3xl mx-auto mb-10">
            <img
              src="https://i.imgur.com/ij1sgu6.gif"
              alt="Área de Miembros"
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>

          {/* Content Overview */}
          <div className="bg-card border border-border p-4 sm:p-6 lg:p-8 rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-4 sm:mb-6">
              En seulement 3 modules, vous apprendrez à:
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 sm:p-4 bg-success-light border border-success/20 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-success-foreground font-medium text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus 1 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-black">BONIFICATION EXCLUSIVE</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/NCuZ4ll.png"
                alt="Bon exclusif - Guide de préparation des sermons"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imaginez qu'en plus de la <strong>méthode Esther</strong>, vous ayez entre les mains un guide 
              pratique et spirituel qui vous montre étape par étape comment préparer des sermons percutants qui 
              toucheront profondément le cœur de votre auditoire.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Ce que vous trouverez dans ce guide:</h4>
              <ul className="space-y-2">
                {bonusItems1.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                    <span className="text-success-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary p-4 rounded-lg">
              <p className="text-primary font-semibold">💡 Pourquoi ce bon est-il si précieux ?</p>
              <p className="text-muted-foreground">
                Beaucoup de femmes qui reçoivent l'appel à prêcher se sentent encore peu sûres d'elles lorsqu'elles préparent 
                leur contenu, ce qui ralentit tout le processus. Grâce à ce guide, vous saurez non seulement <strong>quoi dire</strong>, 
                mais aussi <strong>comment le dire</strong> avec onction et clarté.
              </p>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-black">BONIFICATION SPÉCIALE</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/TfnUCDC.png"
                alt="Checklist Pre-Predicación"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imaginez qu'avant chaque prédication, vous puissiez avoir entre les mains une checklist pratique et spirituelle 
              qui vous guide pour monter en chaire avec paix, assurance et autorité, laissant derrière vous la nervosité et la peur.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Ce que vous trouverez dans cette checklist:</h4>
              <ul className="space-y-2">
                {bonusItems2.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                    <span className="text-success-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary p-4 rounded-lg">
              <p className="text-primary font-semibold">💡 Pourquoi ce bon est-il si précieux ?</p>
              <p className="text-muted-foreground">
                Beaucoup de femmes montent en chaire avec un message préparé, mais sans la préparation spirituelle adéquate. 
                Cette liste de contrôle vous rappellera les étapes divines suivies par Esther pour prêcher avec confiance, autorité et onction, 
                vous assurant de ne pas monter seule, mais accompagnée de la présence de Dieu.
              </p>
            </div>

            <p className="text-muted-foreground">
              ✨ Aujourd'hui, en activant votre accès à la <strong>Méthode Esther</strong>, vous la recevez entièrement <strong>GRATUITEMENT</strong>.
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-black">BONIFICATION PREMIUM</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/2hF74fK.png"
                alt="Plan de Desarrollo de Liderazgo Ministerial"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imaginez qu'en plus de la <strong>méthode Esther</strong>, vous disposiez d'un plan spécialement conçu pour vous aider 
              à grandir en tant que leader dans le ministère, à renforcer vos dons et à guider avec sagesse d'autres femmes dans leur vocation.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Ce que vous trouverez dans ce plan:</h4>
              <ul className="space-y-2">
                {bonusItems3.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                    <span className="text-success-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary p-4 rounded-lg">
              <p className="text-primary font-semibold">💡 Pourquoi ce bon est-il si précieux ?</p>
              <p className="text-muted-foreground">
                Beaucoup de femmes ressentent l'appel à diriger, mais ne savent pas comment structurer leur croissance ni comment multiplier les leaders. 
                Grâce à ce plan, vous disposerez d'un guide clair, pratique et spirituel pour avancer avec détermination, humilité et autorité.
              </p>
            </div>

            <p className="text-muted-foreground text-center">
              ✨ Aujourd'hui, en activant votre accès à la <strong>Méthode Esther</strong>, vous recevez également ce programme entièrement <strong>GRATUITEMENT</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
