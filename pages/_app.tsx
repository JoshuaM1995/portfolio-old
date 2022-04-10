import { Terminal, TerminalHeader } from '@components/terminal';
import TerminalDateTime from '@components/terminal/TerminalDateTime/TerminalDateTime';
import { TerminalTab } from '@components/terminal/TerminalTab/TerminalTab';
import { TerminalTabs } from '@components/terminal/TerminalTabs/TerminalTabs';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BlankTerminalTab } from '@styles/terminal/blankTerminalTab';
import { TerminalFooter, TerminalFooterLinksContainer, TerminalFooterFindMeAtContainer, TerminalFooterLink, TerminalFooterLinkIcon } from '@styles/terminal/terminalFooter';
import { TerminalHeaderName } from '@styles/terminal/terminalHeader';
import { TerminalTabPanel } from '@styles/terminal/terminalTabPanel';
import { TerminalTabsContainer } from '@styles/terminal/terminalTabsContainer';
import { TerminalWindowButton, TerminalWindowButtonContainer } from '@styles/terminal/terminalWindowButtonts';
import { darkTheme } from '@theme/dark';
import { lightTheme } from '@theme/light';
import 'normalize.css';
import { useEffect, useState } from 'react';
import 'react-typist/dist/Typist.css';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import '../styles/global.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Required to work with next.js
config.autoAddCss = false

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
          <TerminalWindowButtonContainer>
            <TerminalWindowButton type="close" />
            <TerminalWindowButton type="minimize" />
            <TerminalWindowButton type="maximize" />
          </TerminalWindowButtonContainer>

          <TerminalHeaderName>joshua_mcnabb</TerminalHeaderName>

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

        <TerminalFooter>
          <TerminalFooterLinksContainer>
            <TerminalFooterFindMeAtContainer>
              find me at:
            </TerminalFooterFindMeAtContainer>

            <TerminalFooterLink href="https://github.com/JoshuaM1995" target="_blank">
              <TerminalFooterLinkIcon icon={faGithub} />
            </TerminalFooterLink>
            <TerminalFooterLink href="https://www.linkedin.com/in/jmcnabb1995/" target="_blank">
              <TerminalFooterLinkIcon icon={faLinkedin} />
            </TerminalFooterLink>
          </TerminalFooterLinksContainer>

          <TerminalDateTime />
        </TerminalFooter>
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