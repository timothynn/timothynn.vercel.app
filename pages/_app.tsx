import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return (
      <React.Fragment>

        <Navbar />
        <Component {...pageProps} />
      </React.Fragment>
    ); 
};
