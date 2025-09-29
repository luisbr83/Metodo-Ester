"use client";

import { Monitor, Tablet, Smartphone, CheckCircle } from "lucide-react";

const ProductSection = () => {
  const benefits = [
    <>Armar una predicación <strong>en 30 minutos</strong>, aunque nunca lo hayas hecho</>,
    <>Subir al púlpito <strong>sin miedo ni nervios</strong> usando técnicas anti-pánico</>,
    <>Tener siempre una palabra poderosa para <strong>cualquier ocasión</strong></>,
    <>Ser reconocida como <strong>una mujer de Dios</strong> con autoridad y sabiduría</>,
    <>Crecer espiritualmente con <strong>intimidad real</strong> con la Palabra</>,
    <>Impactar vidas y <strong>transformar</strong> ambientes con tu voz</>,
    <>Descubrir <strong>tu estilo único</strong> y construir tu identidad ministerial</>
  ];

  const bonusItems1 = [
    "Una estructura clara para crear mensajes con fluidez e impacto.",
    "Consejos para conectar cada punto del sermón con la Palabra de Dios.",
    "Métodos para mantener la atención de la iglesia de principio a fin.",
    "Ejemplos y modelos listos para que los adaptes y uses de inmediato.",
    "Estrategias para que nunca más te bloquees al preparar una predicación."
  ];

  const bonusItems2 = [
    "Una oración de conexión profunda para alinear tu corazón con Dios.",
    "Claves para mantener un corazón puro y humilde antes de hablar.",
    "Cómo asegurar que Cristo esté siempre en el centro de tu mensaje.",
    "Ejercicios espirituales para activar paz y fortaleza interior.",
    "El poder de un versículo ancla que sostenga tu predicación.",
    "Técnicas para visualizar las almas siendo transformadas por tu voz.",
    "Declaraciones de fe para entregar todo al Espíritu Santo."
  ];

  const bonusItems3 = [
    "Competencias esenciales para liderar con claridad y confianza.",
    "Ejercicios de autodescubrimiento para identificar tus fortalezas y áreas de crecimiento.",
    "Estrategias para entrenar y equipar a nuevas líderes en tu ministerio.",
    "Planes de acción a corto y largo plazo para tu desarrollo ministerial.",
    "Espacios de reflexión y herramientas prácticas para evaluar tu progreso."
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
            ¿Qué es el <span className="text-primary">Método Esther</span>?
          </h2>

          {/* Method Image */}
          <div className="max-w-2xl mx-auto">
            <img
              src="https://i.imgur.com/jKPwAio.png"
              alt="Guía visual del Método Esther"
              className="w-full max-h-[500px] object-contain rounded-lg mx-auto"
            />
          </div>

          <p className="text-xl sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Es la <strong>primera guía práctica y espiritual</strong> que enseña a cualquier mujer 
            a predicar con autoridad, sin años de estudio, sin miedo, y sin complicaciones.
          </p>

          {/* Texto sobre Acceso a Todos los Dispositivos */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Acceso a Todos los Dispositivos
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Nuestra área de miembros ha sido desarrollada para ofrecer la máxima conveniencia y flexibilidad para ti. 
              Ahora, puedes acceder a todo el contenido exclusivo desde cualquier lugar y en cualquier dispositivo:
            </p>
          </div>

          {/* Product Mockups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Monitor className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Acceso en Computadora
                </p>
              </div>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Tablet className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Disponible en Tablet
                </p>
              </div>
            </div>
            <div className="text-center space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="bg-accent p-4 sm:p-6 rounded-lg">
                <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-accent-foreground text-sm sm:text-base">
                  Llévalo en tu Celular
                </p>
              </div>
            </div>
          </div>

          {/* Imagem da Área de Miembros */}
          <div className="max-w-3xl mx-auto mb-10">
            <img
              src="https://i.imgur.com/7NXjVnB.gif"
              alt="Área de Miembros"
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>

          {/* Content Overview */}
          <div className="bg-card border border-border p-4 sm:p-6 lg:p-8 rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-4 sm:mb-6">
              En solo 3 módulos, aprenderás a:
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
              <h3 className="text-2xl font-bold text-black">BONIFICACIÓN EXCLUSIVA</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/0J72exD.png"
                alt="Bono Exclusivo - Guía de Preparación de Sermones"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imagina que, además del <strong>Método Esther</strong>, tengas en tus manos una guía 
              práctica y espiritual que te muestre paso a paso cómo preparar sermones impactantes que 
              toquen profundamente el corazón de tu audiencia.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Lo que encontrarás en esta guía:</h4>
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
              <p className="text-primary font-semibold">💡 ¿Por qué este bono es tan valioso?</p>
              <p className="text-muted-foreground">
                Muchas mujeres que reciben el llamado a predicar todavía se sienten inseguras al preparar 
                su contenido, y eso frena todo el proceso. Con esta guía, no solo sabrás <strong>qué decir</strong>, 
                sino <strong>cómo decirlo</strong> con unción y claridad.
              </p>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-black">BONIFICACIÓN ESPECIAL</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/hOcXFA2.png"
                alt="Checklist Pre-Predicación"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imagina que, antes de cada predicación, pudieras tener en tus manos un checklist práctico y espiritual 
              que te guíe para subir al púlpito con paz, seguridad y autoridad, dejando atrás los nervios y el temor.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Lo que encontrarás en este checklist:</h4>
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
              <p className="text-primary font-semibold">💡 ¿Por qué este bono es tan valioso?</p>
              <p className="text-muted-foreground">
                Muchas mujeres llegan al púlpito con el mensaje preparado, pero sin la preparación espiritual adecuada. 
                Este checklist te recordará los pasos divinos de Ester para predicar con confianza, autoridad y unción, 
                asegurando que no subas sola, sino acompañada por la presencia de Dios.
              </p>
            </div>

            <p className="text-muted-foreground">
              ✨ Hoy, al activar tu acceso al <strong>Método Esther</strong>, lo recibes completamente <strong>GRATIS</strong>.
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="bg-accent/10 border border-accent p-6 sm:p-8 rounded-lg mt-10 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-black">BONIFICACIÓN PREMIUM</h3>
            </div>

            <div className="max-w-xl mx-auto">
              <img
                src="https://i.imgur.com/3hiGgJK.png"
                alt="Plan de Desarrollo de Liderazgo Ministerial"
                className="w-64 h-80 object-cover mx-auto rounded-lg shadow"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imagina que, además del <strong>Método Esther</strong>, tengas un plan diseñado especialmente para ayudarte 
              a crecer como líder en el ministerio, fortalecer tus dones y guiar con sabiduría a otras mujeres en su llamado.
            </p>

            <div className="bg-card border border-border p-4 rounded-lg text-left space-y-3">
              <h4 className="text-lg font-bold text-card-foreground">Lo que encontrarás en este plan:</h4>
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
              <p className="text-primary font-semibold">💡 ¿Por qué este bono es tan valioso?</p>
              <p className="text-muted-foreground">
                Muchas mujeres sienten el llamado a liderar, pero no saben cómo estructurar su crecimiento ni cómo multiplicar líderes. 
                Con este plan, tendrás una guía clara, práctica y espiritual para avanzar con propósito, humildad y autoridad.
              </p>
            </div>

            <p className="text-muted-foreground text-center">
              ✨ Hoy, al activar tu acceso al <strong>Método Esther</strong>, también recibes este plan completamente <strong>GRATIS</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
