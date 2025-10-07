import { Shield, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Guarantee Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 sm:p-8 rounded-full shadow-xl">
                <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-800 text-yellow-100 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                GARANTIE
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
            Garantie inconditionnelle de 7 jours
          </h2>

          <div className="bg-card border border-border p-4 sm:p-6 lg:p-8 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                ESSAYEZ SANS RISQUE
              </h3>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-card-foreground leading-relaxed mb-4 sm:mb-6 px-2">
              Je suis tellement convaincue que la <strong>méthode Esther</strong> transformera 
              votre ministère que je vous offre une garantie totale de 7 jours.
            </p>

            <div className="space-y-3 sm:space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <p className="text-card-foreground text-sm sm:text-base">
                  Si vous ne vous sentez pas plus confiant pour prêcher dans 7 jours...
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <p className="text-card-foreground text-sm sm:text-base">
                  Si vous ne surmontez pas votre peur de la chaire en 7 jours...
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <p className="text-card-foreground text-sm sm:text-base">
                  Si vous ne voyez pas de résultats concrets dans votre prédication dans les 7 jours...
                </p>
              </div>
            </div>

            <div className="bg-highlight border-l-4 p-4 sm:p-6 rounded-r-lg mt-4 sm:mt-6">
              <p className="text-base sm:text-lg lg:text-xl font-bold text-highlight-foreground text-center">
                Nous vous remboursons 100 % de votre argent, sans poser de questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
