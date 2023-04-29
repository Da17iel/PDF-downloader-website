import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { AppProps } from 'next/app'
import { title } from 'process'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <title>Watery Water</title>
      <Component {...pageProps} />
    </UserProvider>
  );
}
