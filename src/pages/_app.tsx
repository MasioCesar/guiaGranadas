import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    (
      <>
      <Header />
      
      <Component {...pageProps} />
      </>
      
    )
    
  )
}
export default App
