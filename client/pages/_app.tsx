import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import type { AppProps } from 'next/app';
import React from 'react';
import "../components/Header.css";
import "../pages/auth/Signup.css";


export const app: React.FC<AppProps> = ({ Component, pageProps}) => {
  return <Component {...pageProps} />
}


export default app;
