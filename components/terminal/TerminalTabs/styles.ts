import { styled } from '@styles/theme';

export const TerminalTabsContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.terminal.tabs.background};
  border-top: ${({ theme: { colors } }) =>
    `1px solid ${colors.terminal.tabs.container.border}`};
  display: flex;
  height: 45px;
`;
