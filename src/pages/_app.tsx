import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';

import theme from '../styles/theme';
import GlobalStyles from '../styles/globals';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp
