import { styled } from '@styles/theme';

export const TerminalTabContainer = styled.div<{ isSelected?: boolean }>`
  color: ${({ theme: { colors }, isSelected }) =>
    isSelected
      ? colors.terminal.tabs.selected.text
      : colors.terminal.tabs.text};
  background: ${({ theme: { colors }, isSelected }) =>
    isSelected
      ? colors.terminal.tabs.selected.background
      : colors.terminal.tabs.background};
  border-top: ${({ theme: { colors }, isSelected }) =>
    isSelected
      ? `2px solid ${colors.terminal.tabs.selected.borderTop}`
      : 'none'};
  border-right: ${({ theme: { colors }, isSelected }) =>
    isSelected
      ? `1px solid ${colors.terminal.tabs.container.border}`
      : `1px solid ${colors.terminal.tabs.borderRight}`};
  border-bottom: ${({ theme: { colors }, isSelected }) =>
    isSelected ? 'none' : `1px solid ${colors.terminal.tabs.borderBottom}`};
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 'normal')};

  &:hover {
    cursor: pointer;
  }
`;
