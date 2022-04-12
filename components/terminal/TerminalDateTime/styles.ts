import { styled } from '@styles/theme';

export const TerminalDateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 25px;
  border-right: ${({ theme: { colors } }) =>
    `1px solid ${colors.terminal.footer.border}`};
`;
