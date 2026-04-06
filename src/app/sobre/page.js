export default function Teste() {
  return (
    // Div principal (fundo e alinhamento)
    <div className="bg-black h-screen flex items-center justify-center">
      
      {/* Caixa branca (o card) */}
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        
        {/* Título (HTML + Estilo) */}
        <h1 className="text-2xl font-bold text-gray-800">Programação Chapa TOP</h1>
        
        {/* Texto comum */}
        <p className="text-gray-500 mt-2">Cadastre-se ou Faça Login.</p>
        
        {/* Botão com efeito de hover */}
        <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
          Saiba Mais
        </button>
        
      </div>
    </div>
  )
}