import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NextNprogress
          color={theme.gold}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />

        <Toaster position="bottom-right" />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp
