"use client"
import { useState } from "react"

export default function Cadastro() {
  // Isso aqui são as "gavetas" (States) para guardar o que o usuário digita
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  const handleCadastro = (e) => {
    e.preventDefault() // Impede a página de recarregar
    alert(`Cadastrando: ${nome} com o e-mail ${email}`)
    // Aqui no futuro enviaríamos para um Banco de Dados!
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form 
        onSubmit={handleCadastro}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Criar Conta</h2>

        {/* Campo de Nome */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nome Completo</label>
          <input 
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Ex: Lucas Santos"
            onChange={(e) => setNome(e.target.value)} // Salva o nome na gaveta
          />
        </div>

        {/* Campo de E-mail */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
          <input 
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="seu@email.com"
            onChange={(e) => setEmail(e.target.value)} // Salva o e-mail na gaveta
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Finalizar Cadastro
        </button>
      </form>
    </main>
  )
}