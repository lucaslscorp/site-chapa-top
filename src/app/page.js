"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white p-4">
      <div className="p-10 bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 text-center max-w-md w-full">
        
        {session ? (
          // O QUE APARECE QUANDO ESTÁ LOGADO
          <>
            <img src={session.user.image} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-400" alt="Sua foto" />
            <h1 className="text-3xl font-bold mb-2">Olá, {session.user.name}!</h1>
            <p className="text-gray-400 mb-8">Você está logado com o e-mail: <br/> {session.user.email}</p>
            <button 
              onClick={() => signOut()}
              className="w-full bg-red-500/20 text-red-400 border border-red-500/50 px-6 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all"
            >
              Sair da conta
            </button>
          </>
        ) : (
          // O QUE APARECE QUANDO NÃO ESTÁ LOGADO
          <>
            <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Olá!
            </h1>
            <p className="text-gray-400 mb-10 text-lg">Faça login para começar.</p>
            <button 
              onClick={() => signIn('google')}
              className="flex items-center justify-center gap-3 w-full bg-white text-black px-6 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/10"
            >
              <img src="https://authjs.dev/img/providers/google.svg" width="24" alt="Google" />
              Entrar com Google
            </button>
          </>
        )}
      </div>
    </main>
  )
}