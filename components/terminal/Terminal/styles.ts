import { styled } from '@styles/theme';

export const TerminalContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.text};
  background: ${({ theme: { colors } }) => colors.terminal.background};
  border-radius: 6px;
`;
