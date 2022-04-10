import { Terminal, TerminalHeader } from '@components/terminal';
import { TerminalTab } from '@components/terminal/TerminalTab/TerminalTab';
import { TerminalTabs } from '@components/terminal/TerminalTabs/TerminalTabs';
import { BlankTerminalTab } from '@styles/terminal/blankTerminalTab';
import { TerminalTabPanel } from '@styles/terminal/terminalTabPanel';
import { TerminalTabsContainer } from '@styles/terminal/terminalTabsContainer';
import { darkTheme } from '@theme/dark';
import { lightTheme } from '@theme/light';
import 'normalize.css';
import { useEffect, useState } from 'react';
import 'react-typist/dist/Typist.css';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import '../styles/global.css';

const App = ({ Component, pageProps }: any) => {
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
      <Terminal>
        <TerminalHeader>
          joshua_mcnabb

          {/* <DarkModeToggle /> */}
        </TerminalHeader>

        <TerminalTabsContainer>
          <TerminalTabs>
            <TerminalTab link="/">Hello.tsx</TerminalTab>
            <TerminalTab link="/about">About.tsx</TerminalTab>
            <TerminalTab link="/projects">Projects.tsx</TerminalTab>
            <BlankTerminalTab />
          </TerminalTabs>
        </TerminalTabsContainer>

        <TerminalTabPanel>
          <Component {...pageProps} />
        </TerminalTabPanel>
      </Terminal>
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

export default App