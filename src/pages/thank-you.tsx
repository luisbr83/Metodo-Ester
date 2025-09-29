export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">🎉 Obrigado pela sua compra!</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        Sua inscrição foi confirmada com sucesso. Enviamos os detalhes para o seu e-mail.
      </p>
      <a
        href="mailto:suporte@ebooksexpress.shop"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        📩 Falar com o Suporte
      </a>
    </div>
  );
}
