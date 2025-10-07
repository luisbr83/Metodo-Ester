import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Shield } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="oferta" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
            Combien coûte le début de votre transformation ?
          </h2>

          {/* Price Anchoring */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="bg-anchor border border-anchor-foreground/20 p-4 sm:p-6 rounded-lg">
              <p className="text-sm sm:text-base lg:text-lg text-anchor-foreground mb-2">
                Les mentorats coûtent généralement :
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-anchor-foreground line-through">
                € 100 EUR
              </p>
            </div>
            <div className="bg-anchor border border-anchor-foreground/20 p-4 sm:p-6 rounded-lg">
              <p className="text-sm sm:text-base lg:text-lg text-anchor-foreground mb-2">
                Les cours de prédication dépassent les :
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-anchor-foreground line-through">
                € 497 EUR
              </p>
            </div>
          </div>

          {/* Main Offer */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary p-4 sm:p-6 lg:p-8 rounded-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                OFFRE SPÉCIALE
              </h3>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-foreground mb-4 sm:mb-6 px-2">
              C'est pourquoi je vous donne un accès complet à la <strong>MÉTHODE ESTHER</strong> pour seulement:
            </p>
            
            <div className="text-center mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">9.00 €</span>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground"></p>
            </div>

            <a
              href="https://pay.kiwify.com/eDRTXb4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center text-base sm:text-lg lg:text-xl font-bold py-4 sm:py-6 mb-3 sm:mb-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
            >
              ACCÉDER MAINTENANT
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-yellow-800 font-semibold">
              <div className="flex items-center justify-center">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Accès immédiat
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                 Garantie 7 jours
              </div>
              <div className="flex items-center justify-center">
                <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Paiement sécurisé
              </div>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="bg-yellow-200 p-4 sm:p-6 rounded-r-lg max-w-2xl mx-auto mt-4">
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-yellow-800 px-2">
              ⚠️ <strong>PRIX PROMOTIONNEL :</strong> cette offre spéciale à 9,00 € est valable pour une durée limitée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
