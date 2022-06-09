import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import MainLayout from '../components/ui/main.layout';

import { SessionProvider } from 'next-auth/react'

function MyApp({ 
  Component, 
  pageProps: { session,...pageProps} 
}) {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  )
}

export default MyApp
