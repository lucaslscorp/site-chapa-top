"use client"
import { useSession } from "next-auth/react"

export default function PaginaChapa() {
  const { data: session } = useSession()

  // Lista de e-mails que mandam na parada
  const administradores = ["lukamateu1@gmail.com", "lucas.lscorp@gmail.com"]

  // Se não estiver logado
  if (!session) {
    return <p className="text-center mt-10">Faça login para ver a programação!</p>
  }

  // Se logou, mas não é um dos seus e-mails
  const ehAdmin = administradores.includes(session.user.email)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Bem-vindo, {session.user.name}!</h1>
      
      {ehAdmin ? (
        <section className="mt-6 bg-yellow-100 p-4 rounded-lg border border-yellow-400">
          <h2 className="text-xl font-bold text-yellow-800">📅 Programação de Líder (Privado)</h2>
          <ul>
            <li>08:00 - Reunião com a direção</li>
            <li>10:00 - Gravação do PodCastionar</li>
          </ul>
        </section>
      ) : (
        <section className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800">📢 Nossas Propostas</h2>
          <p>Confira o que a Chapa TOP preparou para você...</p>
        </section>
      )}
    </div>
  )
}