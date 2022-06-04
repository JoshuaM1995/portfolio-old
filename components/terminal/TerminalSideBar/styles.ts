import { styled } from '@styles/theme';
import { TreeProps } from 'rc-tree';

export const TerminalSideBarContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.terminal.sidebar.text};
  background: ${({ theme: { colors } }) => colors.terminal.sidebar.background};
  border: ${({ theme: { colors } }) =>
    `1px solid ${colors.terminal.sidebar.borderRight}`};
  border-bottom: none;
  grid-area: sidebar;
  height: 100%;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.8rem 0.8rem 0.8rem 1.5rem;
  overflow: none;
`;

export const TerminalSideBarText = styled.p`
  margin: 0;
  text-transform: uppercase;
`;

export const TerminalSideBarTreeContainer = styled.div`
  margin-top: 10px;
`;

export const treeStyle: TreeProps['style'] = {
  border: '1px solid #000',
};
