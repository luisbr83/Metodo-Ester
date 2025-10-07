import { useState } from "react";

const faqs = [
  {
    question: "Est-ce seulement un livre électronique ?",
    answer:
      "Non, pas du tout. La méthode Esther n'est pas un PDF que vous téléchargez et oubliez. Il s'agit d'un espace membre exclusif accessible avec un identifiant et un mot de passe personnels, où vous aurez accès à tous les contenus vidéo, guides et supports pédagogiques.",
  },
  {
    question: "Comment puis-je accéder au contenu après l'achat ?",
    answer:
      "C'est très simple : 1) Une fois votre achat effectué sur Hotmart, vous serez automatiquement redirigée vers une page d'accueil. 2) Vous y trouverez un bouton d'inscription pour créer votre compte sur la plateforme. 3) Avec votre adresse e-mail et votre mot de passe, vous aurez immédiatement accès à la Méthode Esther. 4) En quelques minutes, vous pourrez commencer votre processus de transformation !",
  },
  {
    question: "Dois-je étudier la théologie ou avoir une expérience préalable ?",
    answer:
      "Non ! La méthode Esther a été conçue pour les femmes ordinaires qui ressentent l'appel de Dieu, même si elles n'ont jamais prêché. Tout est expliqué étape par étape, sans termes techniques compliqués ni années de théorie.",
  },
  {
    question: "Et si je ne suis pas douée pour parler en public ?",
    answer:
      "C'est précisément à cela que sert la méthode Esther. Nous vous proposons des stratégies anti-panique et des techniques pratiques pour que vous puissiez monter en chaire avec assurance et sans crainte.",
  },
  {
    question: "Combien de temps faudra-t-il pour voir les résultats ?",
    answer:
      "Cela dépend de votre engagement, mais la plupart de nos élèves ressentent un réel changement dans leur confiance en moins de 7 jours. Beaucoup prononcent leur premier sermon en seulement 2 semaines.",
  },
  {
    question: "Et si cela ne fonctionne pas ?",
    answer:
      "Vous ne courez aucun risque. Vous bénéficiez d'une garantie inconditionnelle de 7 jours. Si vous ne constatez aucune amélioration en matière de sécurité et de préparation à la prédication, il vous suffit de demander votre remboursement et vous récupérerez 100 % de votre argent.",
  },
  {
    question: "Puis-je y accéder depuis mon téléphone portable ?",
    answer:
      "Oui, bien sûr. La plateforme est optimisée pour que vous puissiez y accéder depuis votre ordinateur, votre tablette ou votre téléphone portable, quand et où vous le souhaitez.",
  },
  {
    question: "Pourquoi coûte-t-il seulement 9 € ?",
    answer:
      "Parce que notre mission est d'atteindre le plus grand nombre de femmes possible. Nous voulons que rien ne vous arrête, pas même le prix. La valeur que vous recevez ici équivaut à des mentorats de plusieurs centaines de dollars, mais aujourd'hui, vous avez un accès complet pour moins cher qu'un repas rapide.",
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
          Foire aux questions
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
