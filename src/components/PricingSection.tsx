"use client";

import { useEffect, useState } from "react";
import { DollarSign, Clock, Shield } from "lucide-react";

// Helpers simples pour gérer les cookies
const setCookie = (name, value, maxAgeSeconds = 86400) => {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  const sameSite = "; SameSite=Lax";
  document.cookie =
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/` +
    sameSite +
    secure;
};

const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + encodeURIComponent(name) + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
};

const deleteCookie = (name) => {
  document.cookie = `${encodeURIComponent(name)}=; Max-Age=0; Path=/; SameSite=Lax${
    location.protocol === "https:" ? "; Secure" : ""
  }`;
};

const PricingSection = () => {
  const OFFER_COOKIE = "methodo_esther_offer12h_end";
  const OFFER_DURATION_MS = 12 * 60 * 60 * 1000; // 12 heures
  const PAYMENT_LINK = "https://pay.hotmart.com/G103298728Q?off=l72xblvs&checkoutMode=10";

  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  const calculateTimeLeft = (endTimestamp) => {
    const now = Date.now();
    const distance = endTimestamp - now;
    if (distance <= 0) return { expired: true, time: { hours: 0, minutes: 0, seconds: 0 } };

    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);
    return { expired: false, time: { hours, minutes, seconds } };
  };

  const ensureEndTimestamp = () => {
    try {
      const existing = getCookie(OFFER_COOKIE) || localStorage.getItem(OFFER_COOKIE);
      if (existing) return parseInt(existing, 10);

      const newEnd = Date.now() + OFFER_DURATION_MS;
      setCookie(OFFER_COOKIE, String(newEnd), 24 * 3600);
      localStorage.setItem(OFFER_COOKIE, String(newEnd));
      return newEnd;
    } catch {
      return Date.now() + OFFER_DURATION_MS;
    }
  };

  useEffect(() => {
    let endTimestamp = ensureEndTimestamp();

    const update = () => {
      const { expired: isExpired, time } = calculateTimeLeft(endTimestamp);
      setExpired(isExpired);
      setTimeLeft(time);

      if (isExpired) {
        deleteCookie(OFFER_COOKIE);
        localStorage.removeItem(OFFER_COOKIE);
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="oferta" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .pulse {
          animation: pulse 2s infinite ease-in-out;
        }
        @keyframes priceGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(207, 174, 108, 0.8),
                         0 0 40px rgba(207, 174, 108, 0.6),
                         0 0 60px rgba(207, 174, 108, 0.4);
          }
          50% {
            text-shadow: 0 0 30px rgba(207, 174, 108, 1),
                         0 0 60px rgba(207, 174, 108, 0.8),
                         0 0 90px rgba(207, 174, 108, 0.6);
          }
        }
        .price-glow {
          animation: priceGlow 2s infinite ease-in-out;
        }
        @keyframes pricePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .price-pulse {
          animation: pricePulse 1.5s infinite ease-in-out;
          display: inline-block;
        }
        .gradient-gold {
          background: linear-gradient(135deg, #CFAE6C 0%, #F4E5C2 25%, #CFAE6C 50%, #F4E5C2 75%, #CFAE6C 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5B3A89] px-2">
            Combien coûte le début de votre transformation ?
          </h2>

          {/* Ancrage des prix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-[#F9F3E7] border border-[#CFAE6C]/40 p-6 rounded-lg">
              <p className="text-lg text-[#5B3A89] mb-2">
                Les mentorats coûtent généralement :
              </p>
              <p className="text-3xl font-bold text-[#5B3A89] line-through">
                $ 100.00
              </p>
            </div>
            <div className="bg-[#F9F3E7] border border-[#CFAE6C]/40 p-6 rounded-lg">
              <p className="text-lg text-[#5B3A89] mb-2">
                Les cours de prédication dépassent les :
              </p>
              <p className="text-3xl font-bold text-[#5B3A89] line-through">
                $ 497.00
              </p>
            </div>
          </div>

          {/* Offre principale */}
          <div className="bg-gradient-to-br from-[#5B3A89]/10 to-[#CFAE6C]/10 border-2 border-[#CFAE6C] p-6 lg:p-8 rounded-xl max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-[#CFAE6C] mr-2" />
              <h3 className="text-2xl font-bold text-[#5B3A89]">OFFRE SPÉCIALE</h3>
            </div>

            <p className="text-lg text-[#4A3A2B] mb-6 px-2">
              C'est pourquoi je vous donne un accès complet à la{" "}
              <strong>MÉTHODE ESTHER</strong> pour seulement :
            </p>

            {/* Badge Offre éclair */}
            {/* <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg animate-pulse">
              ⚡ OFFRE ÉCLAIR ⚡ 
            </div> */}

            {/* Prix précédent barré */}
            {/* <div className="mb-2">
              <span className="text-3xl font-bold text-gray-400 line-through">
                US$ 9.00 
              </span>
            </div> */}

            {/* Prix principal avec tous les effets */}
            <div className="text-center mb-6 py-6 px-4 rounded-2xl bg-gradient-to-br from-[#5B3A89]/5 to-[#CFAE6C]/5" 
                 style={{
                   boxShadow: '0 0 40px rgba(207, 174, 108, 0.3), inset 0 0 30px rgba(207, 174, 108, 0.1)'
                 }}>
              <span className="text-8xl font-extrabold gradient-gold price-glow price-pulse">
                US$ 9.00
              </span>
            </div>

            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center text-lg font-bold py-5 mb-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundColor: "#5B3A89",
                color: "#FFF8E7",
                boxShadow: "0 0 15px rgba(91, 58, 137, 0.4)",
              }}
            >
              ACCÉDER MAINTENANT
            </a>

            {/* Avantages */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#5B3A89] font-semibold">
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2 text-[#CFAE6C]" />
                Accès immédiat
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2 text-[#CFAE6C]" />
                Garantie de 7 jours
              </div>
              <div className="flex items-center justify-center">
                <DollarSign className="w-4 h-4 mr-2 text-[#CFAE6C]" />
                Paiement sécurisé
              </div>
            </div>
          </div>

          {/* Chronomètre */}
          {false && !expired && (
            <div className="max-w-2xl mx-auto mt-8">
              <h3 className="text-xl font-bold text-[#5B3A89] mb-3">
                🚨 Promotion à durée limitée !
              </h3>

              <div
                className="flex justify-center items-center gap-6 sm:gap-10 py-6 px-8 rounded-lg"
                style={{ backgroundColor: "#681986" }}
              >
                <div className="text-center pulse">
                  <p className="text-white text-5xl font-extrabold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </p>
                  <p className="text-white text-sm mt-1 font-semibold">HEURES</p>
                </div>
                <div className="text-center pulse">
                  <p className="text-white text-5xl font-extrabold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </p>
                  <p className="text-white text-sm mt-1 font-semibold">MINUTES</p>
                </div>
                <div className="text-center pulse">
                  <p className="text-white text-5xl font-extrabold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </p>
                  <p className="text-white text-sm mt-1 font-semibold">SECONDES</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
