import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Camille",
      location: "Canada",
      text: "Pendant trois ans, je me sentais appelée, mais paralysée par la peur. Grâce à la méthode Esther, en deux semaines, je prêchais déjà avec assurance. Mon pasteur n'en croyait pas ses yeux !",
      rating: 5
    },
    {
      name: "Sophie",
      location: "France",
      text: "Je pensais que je devais étudier la théologie pour pouvoir prêcher. Cette méthode m'a montré que j'avais déjà tout ce qu'il fallait en moi. Maintenant, je prêche tous les dimanches.",
      rating: 5
    },
    {
      name: "Alexia",
      location: "Belgique",
      text: "Ma première prédication après le cours a été si puissante que plusieurs personnes sont venues pour donner leur vie à Christ. Gloire à Dieu !",
      rating: 5
    },
    {
      name: "Francine",
      location: "France",
      text: "Le module sur la gestion du trac a changé ma vie. Avant, je tremblais quand je parlais, maintenant je prêche avec autorité et onction.",
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
            Témoignages de femmes qui ont déjà vécu la transformation
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
              Rejoignez plus de 2 000 femmes qui prêchent déjà avec autorité !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
