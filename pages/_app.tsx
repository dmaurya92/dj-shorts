import React, { Fragment } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  console.log('page', pageProps);
  const router = useRouter();
  console.log('page', router);
  const LayoutComp = !router.pathname.includes('/login')?Layout:Fragment;
  return <LayoutComp><Component {...pageProps} /></LayoutComp>
}
