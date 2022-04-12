import { styled } from '@styles/theme';

export const TerminalBodyContainer = styled.div<{
  shouldShowSidebar?: boolean;
}>`
  display: ${({ shouldShowSidebar }) => (shouldShowSidebar ? 'grid' : 'block')};
  grid-template-columns: 0.25fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'sidebar tabs'
    'sidebar body';
`;
