import { styled } from '@styles/theme';

export const TerminalContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.terminal.text};
  background: ${({ theme: { colors } }) => colors.terminal.background};
  height: 825px;
  border-radius: 6px;
`;
