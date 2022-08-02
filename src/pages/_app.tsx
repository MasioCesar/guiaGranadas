import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    //@ts-ignore
    global.performance = global.performance || {
    now: () => new Date().getTime(),
    }
    (
      <>
      <Header />
      
      <Component {...pageProps} />
      </>
      
    )
    
  )
}
export default App
