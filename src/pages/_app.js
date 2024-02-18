import CustomCursor from '@/components/Courser'
import LoadingPage from '@/components/LoadingPage';
import '@/styles/globals.css'
import { Router } from 'next/router';
import { useState } from 'react';


export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));
  Router.events.on('routeChangeError', () => setLoading(false));


  return (
    <>
      {loading ? ( // If loading is true, render LoadingPage
        <LoadingPage />
      ) : ( // If loading is false, render Component and CustomCursor
        <>
          <Component {...pageProps} />
          <CustomCursor />
        </>
      )}
    </>
  );

}
