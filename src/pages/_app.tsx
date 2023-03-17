import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    (
      <>
      <Header />
      <Sidebar />
      
      <Component {...pageProps} />
      </>
      
    )
    
  )
}
export default App
