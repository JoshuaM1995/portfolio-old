import { DarkModeToggle } from '@components/DarkModeToggle.tsx/DarkModeToggle';
import { Terminal, TerminalHeader } from '@components/terminal';
import { TerminalTab } from '@components/terminal/TerminalTab/TerminalTab';
import { TerminalTabs } from '@components/terminal/TerminalTabs/TerminalTabs';
import { TerminalTabsContainer } from '@styles/terminal/terminalTabsContainer';

const Home = () => {
  return (
    <Terminal>
      <TerminalHeader>
        joshua_mcnabb

        {/* <DarkModeToggle /> */}
      </TerminalHeader>

      <TerminalTabsContainer>
        <TerminalTabs>
          <TerminalTab>hello.ts</TerminalTab>
          <TerminalTab>about.ts</TerminalTab>
          <TerminalTab>projects.ts</TerminalTab>
        </TerminalTabs>
      </TerminalTabsContainer>
    </Terminal>
  );
};

export default Home;
