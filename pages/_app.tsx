import { darkTheme } from '@theme/dark';
import { lightTheme } from '@theme/light';
import 'normalize.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: any) => {
  const [isMounted, setIsMounted] = useState(false);
  const { value } = useDarkMode(true);
  const theme = value ? darkTheme : lightTheme;

  const body = (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        body {
          background-color: ${theme.colors.background};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Fix for dark mode flashing on first load
  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body;
}

export default MyApp