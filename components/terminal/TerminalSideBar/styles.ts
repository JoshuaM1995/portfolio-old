import { styled } from '@styles/theme';

export const TerminalSideBarContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.terminal.sidebar.text};
  background: ${({ theme: { colors } }) => colors.terminal.sidebar.background};
  border: ${({ theme: { colors } }) =>
    `1px solid ${colors.terminal.sidebar.borderRight}`};
  border-bottom: none;
  grid-area: sidebar;
  height: 500px;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.8rem 0.8rem 0.8rem 1.5rem;
  overflow-y: scroll;
`;

export const TerminalSideBarText = styled.p`
  margin: 0;
  text-transform: uppercase;
`;

export const TerminalSideBarTreeContainer = styled.div`
  margin-top: 10px;
`;
