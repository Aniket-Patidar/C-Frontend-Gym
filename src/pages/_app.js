import CustomCursor from '@/components/Courser'
import HomeLoader from '@/components/HomeLoader';
import LoadingPage from '@/components/LoadingPage';
import ScrollToTopButton from '@/components/ScrollButton';
import '@/styles/globals.css'
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

function checkLoaded() {
  return document.readyState === 'complete' || document.readyState === 'interactive';
}

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));
  Router.events.on('routeChangeError', () => setLoading(false));

  useEffect(() => {
    setLoading(false)
  }, []);


  return (
    <>
      {loading ? (
        <HomeLoader></HomeLoader>
      ) : (
        <>
          <Component {...pageProps} />
          <CustomCursor />
        </>
      )}
    </>
  );

}
