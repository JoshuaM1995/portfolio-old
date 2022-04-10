import { DarkModeToggle } from '@components/DarkModeToggle.tsx/DarkModeToggle';
import { Terminal, TerminalHeader } from '@components/terminal';
import { TerminalTab } from '@components/terminal/TerminalTab/TerminalTab';
import { TerminalTabs } from '@components/terminal/TerminalTabs/TerminalTabs';
import { BlankTerminalTab } from '@styles/terminal/blankTerminalTab';
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
          <TerminalTab isSelected>Hello.tsx</TerminalTab>
          <TerminalTab>AboutMe.tsx</TerminalTab>
          <TerminalTab>Projects.tsx</TerminalTab>
          <BlankTerminalTab />
        </TerminalTabs>
      </TerminalTabsContainer>
    </Terminal>
  );
};

export default Home;
