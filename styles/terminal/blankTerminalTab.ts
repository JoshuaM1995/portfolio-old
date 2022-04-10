import { styled } from '@styles/theme';

export const BlankTerminalTab = styled.div`
  width: 100%;
  border-bottom: ${({ theme: { colors } }) =>
    `1px solid ${colors.terminal.tabs.borderBottom}`};
`;
