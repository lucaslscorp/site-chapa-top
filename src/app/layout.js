import "./globals.css"
import { Providers } from "./providers"

export const metadata = {
  title: "Meu Site Incrível",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {/* Aqui é onde a mágica acontece: o Providers envolve o site todo */}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}