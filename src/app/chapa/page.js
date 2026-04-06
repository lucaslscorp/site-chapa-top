"use client"
import { useSession } from "next-auth/react"

export default function PaginaChapa() {
  const { data: session } = useSession()

  // LISTA DE INTEGRANTES (Coloque os e-mails da galera aqui)
  const integrantes = ["lukamateu1@gmail.com", "nicolas@gmail.com", "helena@gmail.com"]

  const ehIntegrante = session && integrantes.includes(session.user.email)

  if (!session) return <p className="text-white p-10 text-center text-xl">Por favor, faça login primeiro!</p>

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
        Painel Chapa TOP 🚀
      </h1>

      {ehIntegrante ? (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl mb-4 border-b border-gray-700 pb-2">Programação da Semana</h2>
          
          {/* CARD DA SEGUNDA */}
          <div className="bg-gray-800 p-5 rounded-2xl mb-4 shadow-lg border border-gray-700">
            <p className="text-orange-400 font-bold">SEG - 06/04</p>
            <h3 className="text-lg font-medium">Divulgação no Pátio</h3>
            <p className="text-gray-400 text-sm italic">Responsável: Lucas</p>
          </div>

          {/* CARD DA TERÇA */}
          <div className="bg-gray-800 p-5 rounded-2xl mb-4 shadow-lg border border-gray-700">
            <p className="text-orange-400 font-bold">TER - 07/04</p>
            <h3 className="text-lg font-medium">Gravação do PodCastionar</h3>
            <p className="text-gray-400 text-sm italic">Responsável: Nicolas</p>
          </div>
        </div>
      ) : (
        <div className="text-center bg-red-500/10 p-10 rounded-3xl border border-red-500/50">
          <h2 className="text-2xl font-bold text-red-500">Acesso Negado</h2>
          <p className="mt-2 text-gray-400">Desculpe {session.user.name}, mas apenas integrantes da Chapa TOP podem ver esta agenda.</p>
        </div>
      )}
    </main>
  )
}