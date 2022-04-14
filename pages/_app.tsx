import { DarkModeToggle } from '@components/index';
import { Terminal, TerminalHeader } from '@components/terminal';
import TerminalDateTime from '@components/terminal/TerminalDateTime/TerminalDateTime';
import { TerminalSideBar } from '@components/terminal/TerminalSideBar/TerminalSideBar';
import { TerminalTab } from '@components/terminal/TerminalTab/TerminalTab';
import { TerminalTabs } from '@components/terminal/TerminalTabs/TerminalTabs';
import { aboutContent } from '@content/about';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BlankTerminalTab } from '@styles/terminal/blankTerminalTab';
import { TerminalBodyContainer } from '@styles/terminal/terminalBody';
import { TerminalFooter, TerminalFooterFindMeAtContainer, TerminalFooterLink, TerminalFooterLinkIcon, TerminalFooterLinksContainer, TerminalRightFooterContainer } from '@styles/terminal/terminalFooter';
import { TerminalHeaderName } from '@styles/terminal/terminalHeader';
import { TerminalTabPanel } from '@styles/terminal/terminalTabPanel';
import { TerminalTabsContainer } from '@styles/terminal/terminalTabsContainer';
import { TerminalWindowButton, TerminalWindowButtonContainer } from '@styles/terminal/terminalWindowButtons';
import { Theme } from '@styles/theme';
import { baseTheme } from '@styles/theme/base';
import { darkTheme } from '@theme/dark';
import { lightTheme } from '@theme/light';
import { AboutContext } from 'context/AboutContext';
import _ from 'lodash';
import { useRouter } from 'next/router';
import 'normalize.css';
import "rc-tree/assets/index.css";
import { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import 'react-typist/dist/Typist.css';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import '../styles/global.scss';

// Required to work with next.js
config.autoAddCss = false

const App = ({ Component, pageProps }: any) => {
  const [queryClient] = useState(() => new QueryClient());
  const [aboutContext, setAboutContext] = useState(aboutContent);
  const [isMounted, setIsMounted] = useState(false);
  const { value } = useDarkMode(true);
  const theme: Theme = value ? _.merge(baseTheme, darkTheme) : _.merge(baseTheme, lightTheme);
  const { route } = useRouter();
  const shouldShowSidebar = route === '/about';

  const { colors } = theme;

  const body = (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <style jsx global>{`
            body {
              background-color: ${colors.background};
            }

            .rc-tree-node-selected {
                color: ${colors.terminal.sidebar.tree.selected};
                background: transparent;
                font-weight: bold;
                box-shadow: none;
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
            </TerminalHeader>

            <TerminalBodyContainer shouldShowSidebar={shouldShowSidebar}>
              <AboutContext.Provider value={[aboutContext, setAboutContext]}>
              {shouldShowSidebar && (<TerminalSideBar />)}

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
              </AboutContext.Provider>
            </TerminalBodyContainer>

            <TerminalFooter>
              <TerminalFooterLinksContainer>
                <TerminalFooterFindMeAtContainer>
                  find me at:
                </TerminalFooterFindMeAtContainer>

                <TerminalFooterLink brand="github" href="https://github.com/JoshuaM1995" target="_blank" title="Github">
                  <TerminalFooterLinkIcon icon={faGithub} />
                </TerminalFooterLink>
                <TerminalFooterLink brand="linkedin" href="https://www.linkedin.com/in/jmcnabb1995/" target="_blank" title="Linkedin">
                  <TerminalFooterLinkIcon icon={faLinkedin} />
                </TerminalFooterLink>
              </TerminalFooterLinksContainer>

              <TerminalRightFooterContainer>
                <TerminalDateTime />
                <DarkModeToggle />
              </TerminalRightFooterContainer>
            </TerminalFooter>
          </Terminal>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
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

export default App;