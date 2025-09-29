import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana López",
      location: "México",
      text: "Llevaba 3 años sintiéndome llamada pero paralizada por el miedo. Con el Método Esther, en 2 semanas ya estaba predicando con confianza. ¡Mi pastor no podía creerlo!",
      rating: 5
    },
    {
      name: "Rosa María Gutiérrez",
      location: "Colombia",
      text: "Pensé que necesitaba estudiar teología para predicar. Este método me mostró que ya tenía todo lo necesario dentro de mí. Ahora predico todos los domingos.",
      rating: 5
    },
    {
      name: "Carmen Rodríguez",
      location: "España",
      text: "Mi primera predicación después del curso fue tan poderosa que varias personas se acercaron para entregarle su vida a Cristo. ¡Gloria a Dios!",
      rating: 5
    },
    {
      name: "Ana Patricia Silva",
      location: "Argentina",
      text: "El módulo sobre cómo manejar los nervios me cambió la vida. Antes temblaba al hablar, ahora predico con autoridad y unción.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
    ));
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 sm:space-y-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
            Testimonios de Mujeres que Ya Vivieron la Transformación
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-card-foreground italic mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-3 sm:pt-4">
                  <p className="font-semibold text-card-foreground text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-success-light border border-success/20 p-4 sm:p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-success-foreground px-2">
              ¡Únete a más de 2,000 mujeres que ya están predicando con autoridad!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;