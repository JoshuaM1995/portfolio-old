import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  margin-bottom: 100px;
`;

export const WhereToNextText = styled.p`
  color: ${({ theme: { colors } }) => colors.home.text};
  font-size: 0.9rem;
  margin: 0;
  margin-bottom: 10px;
`;

export const WhereToNextComment = styled(WhereToNextText)`
  color: ${({ theme: { colors } }) => colors.terminal.comment.color};
  margin-bottom: 20px;
`;

export const WhereToInputContainer = styled.div``;

export const WhereToInputChevronIcon = styled(FontAwesomeIcon)`
  color: #c89ff2;
  margin-right: 10px;
  font-size: 1.3rem;
`;

export const WhereToInput = styled.input`
  all: unset;
  color: #c89ff2;
  font-size: 1.3rem;
`;
