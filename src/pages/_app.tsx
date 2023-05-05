import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  const [active, setActive] = React.useState(false)

  return (
    (
      <>
        <Header setActive={setActive} />
        <Sidebar />
        <div className="flex-1">
          <div className="ml-64">
            <Component {...pageProps} />
          </div>
        </div>
      </>

    )

  )
}
export default App
