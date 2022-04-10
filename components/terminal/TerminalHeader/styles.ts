import { styled } from '@styles/theme';

export const TerminalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 40px;
  color: ${({ theme: { colors } }) => colors.terminal.header.text};
  font-size: 0.8rem;
  font-weight: 600;
`;
