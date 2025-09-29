import { useState } from "react";

const faqs = [
  {
    question: "¿Esto es solo un e-book?",
    answer:
      "No, para nada. El Método Esther no es un PDF que descargas y olvidas. Es un área de miembros exclusiva con login y contraseña personal, donde tendrás acceso a todo el contenido en video, guías y materiales de apoyo.",
  },
  {
    question: "¿Cómo accedo al contenido después de la compra?",
    answer:
      "Es muy sencillo: 1) Una vez que compres en Hotmart, serás dirigida automáticamente a una página de bienvenida. 2) Allí verás un botón de registro para crear tu cuenta en la plataforma. 3) Con tu correo y contraseña, tendrás acceso inmediato al Método Esther. 4) ¡En minutos ya podrás comenzar tu proceso de transformación!",
  },
  {
    question: "¿Necesito estudiar teología o tener experiencia previa?",
    answer:
      "¡No! El Método Esther fue diseñado para mujeres comunes que sienten el llamado de Dios, aunque nunca hayan predicado. Todo está explicado paso a paso, sin tecnicismos complicados ni años de teoría.",
  },
  {
    question: "¿Y si no soy buena para hablar en público?",
    answer:
      "Justamente para eso es el Método Esther. Te damos estrategias anti-pánico y técnicas prácticas para que subas al púlpito con seguridad y sin miedo.",
  },
  {
    question: "¿Cuánto tiempo me tomará ver resultados?",
    answer:
      "Depende de tu compromiso, pero la mayoría de nuestras alumnas sienten un cambio real en su confianza en menos de 7 días. Muchas predican su primer sermón en tan solo 2 semanas.",
  },
  {
    question: "¿Y si no me funciona?",
    answer:
      "No corres ningún riesgo. Tienes 7 días de garantía incondicional. Si no ves avances en tu seguridad y preparación para predicar, simplemente pides tu reembolso y recuperas tu dinero al 100%.",
  },
  {
    question: "¿Puedo acceder desde mi celular?",
    answer:
      "Sí, claro. La plataforma está optimizada para que accedas desde tu computadora, tablet o celular, cuando y donde quieras.",
  },
  {
    question: "¿Por qué cuesta solo $9?",
    answer:
      "Porque nuestra misión es alcanzar a la mayor cantidad de mujeres posibles. Queremos que nada te detenga, ni siquiera el precio. El valor que recibes aquí es equivalente a mentorías de cientos de dólares, pero hoy tienes acceso completo por menos de lo que cuesta una comida rápida.",
  },
];

// Ícone Chevron em SVG inline (sem dependência externa)
const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 transform transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDownIcon open={openIndex === index} />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
