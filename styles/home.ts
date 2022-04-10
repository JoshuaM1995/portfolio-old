import Typist from 'react-typist';
import { styled } from './theme';

export const HomeText = styled.div`
  color: ${({ theme: { colors } }) => colors.home.text};
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const HomeNameText = styled.div`
  color: ${({ theme: { colors } }) => colors.home.nameText};
  font-size: 3.5rem;
  margin-bottom: 15px;
`;

export const WhoAmIText = styled(Typist)`
  color: ${({ theme: { colors } }) => colors.home.whoAmIText};
  font-size: 1.5rem;
`;
