import { CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl text-center text-yellow-900 space-y-6 sm:space-y-8">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Estás a un paso de desbloquear tu voz
        </h2>
        
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-yellow-800 leading-relaxed">
          Hoy puedes acceder al <strong>Método Esther</strong> con todos los bonos exclusivos
          y comenzar tu transformación ministerial de inmediato.
        </p>
        
        <a
          href="https://pay.hotmart.com/Q101290557Q?off=r11836qq&checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full sm:w-auto text-lg font-bold py-4 px-8 border-2 border-yellow-600 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          ¡SÍ, QUIERO ACCEDER AHORA!
        </a>

        {/* Direitos reservados */}
        <p className="text-xs sm:text-sm text-muted-foreground mt-4">
          © 2025 Método Esther. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
