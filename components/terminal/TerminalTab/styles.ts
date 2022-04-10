import { styled } from '@styles/theme';

export const TerminalTabContainer = styled.div`
  color: #666d75;
  background: ${({ theme: { colors } }) => colors.terminal.tabs.background};
  border-right: 1px solid #666d75;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
