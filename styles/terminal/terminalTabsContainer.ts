import { styled } from '@styles/theme';

export const TerminalTabsContainer = styled.div`
  height: 55px;
  box-shadow: 0 3px 3px
    ${({ theme: { colors } }) => colors.terminal.tabs.container.boxShadow};
`;
