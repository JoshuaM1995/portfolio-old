import { styled } from '@styles/theme';

export const TerminalWindowButtonContainer = styled.div`
  display: flex;
`;

export const TerminalWindowButton = styled.div<{
  type: 'close' | 'minimize' | 'maximize';
}>`
  background: ${({ theme: { colors }, type }) =>
    colors.terminal.windowButtons[type]};
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-left: 10px;

  &:first-of-type {
    margin-left: 20px;
  }
`;
