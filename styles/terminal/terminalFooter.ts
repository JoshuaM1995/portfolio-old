import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@styles/theme';

export const TerminalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => colors.terminal.footer.text};
  border-top: 1px solid
    ${({ theme: { colors } }) => colors.terminal.footer.borderTop};
  height: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const TerminalFooterLinksContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const TerminalFooterFindMeAtContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;
`;

export const TerminalFooterLink = styled.a`
  color: #737b84;
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 1rem;
  border-right: 1px solid #1e232d;

  &:first-of-type {
    border-left: 1px solid #1e232d;
  }
`;

export const TerminalFooterLinkIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
`;
