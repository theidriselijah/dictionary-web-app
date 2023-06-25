import '@/styles/globals.css'
import { Inter, Lora, Inconsolata  } from 'next/font/google'
import type { AppProps } from 'next/app'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
})

const incon = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-incon',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable}, ${lora.variable}, ${incon.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
